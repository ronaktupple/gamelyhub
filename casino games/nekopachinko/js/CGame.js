function CGame(oData){
    var _bStartGame;
    var _bBallShooting;
    var _bCannonUsing;
    
    var _iControllerValue;
    var _iTimerBallShot;
    var _iBallSaved = 0;
    var _iBallInBonus = 0;
    var _iCurCredits;
    var _iBank;
    var _iMaxPayout;
    var _iBallRemaining;
    
    var _oInterface;
    var _oEndPanel = null;
    var _oParent;
    var _oHelpPanel;
    var _oMsgBox;
    var _oTable;
    var _oCurBallDebug;

    var _oSpriteContainer;
    var _oBackGroundContainer;
    var _oMiddleContainer;
    var _oForeGroundContainer;
    var _oCameraPos;

    var _oBonusPlatform;
    var _oBallsPool;
    var _oPachinkoText;
    
    this._init = function(){
        
        _bStartGame=false;
        _bBallShooting = false;
        _bCannonUsing = false;

        _iControllerValue = 0;
        _iBallRemaining = 0;
        _iCurCredits = START_CREDITS;
        _iBank = BANK;
        _iMaxPayout = Math.max.apply(null, PAYTABLE);

        new CPhysicsController();
        new CObjectBuilder();

        _oSpriteContainer = new createjs.Container();
        _oSpriteContainer.scaleX = _oSpriteContainer.scaleY = ZOOM;
        _oSpriteContainer.x = CANVAS_WIDTH/2;
        _oSpriteContainer.y = CANVAS_HEIGHT/2-85;
        s_oStage.addChild(_oSpriteContainer);

        _oBackGroundContainer = new createjs.Container();
        _oSpriteContainer.addChild(_oBackGroundContainer);

        _oMiddleContainer = new createjs.Container();
        _oSpriteContainer.addChild(_oMiddleContainer);

        _oForeGroundContainer = new createjs.Container();
        _oSpriteContainer.addChild(_oForeGroundContainer);

        var oSprite = s_oSpriteLibrary.getSprite('bg_game');
        var oBg = createBitmap(oSprite);
        oBg.regX = oSprite.width/2;
        oBg.regY = oSprite.height/2;
        _oBackGroundContainer.addChild(oBg);

        _oTable = new CTable(_oBackGroundContainer, _oForeGroundContainer);
        _oTable.addEventListener(ON_SENSOR_BASKET, this._onSaveBall, this);
        _oTable.addEventListener(ON_SENSOR_BONUS, this._onEnterBonusBall, this);

        var oSprite = s_oSpriteLibrary.getSprite('pachinko_text');
        _oPachinkoText = new CLightIndicator(oSprite, -80,-480,_oForeGroundContainer,0,0);
        _oPachinkoText.lit(true);

        _oBonusPlatform = new CBonusPlatform(0, 40, _oForeGroundContainer);
        _oBonusPlatform.addEventListener(ON_WHEEL_READY_TO_SPIN, this._onWheelReadyToSpin, this);
        _oBonusPlatform.addEventListener(ON_WHEEL_STOP, this._onWheelStop, this);
        _oBonusPlatform.addEventListener(ON_WHEEL_CLOSED, this._onWheelClosed, this);
        _oBonusPlatform.addEventListener(ON_WHEEL_WIN, this._onWheelWin, this);

        _oBallsPool = new CBallsPool(_oMiddleContainer);
        var oBall = _oBallsPool.getCurBall();
        oBall.SetPosition(BALL_STARTPOS_WORLD);
        
        _oBallsPool.setCurBallVisible();

        _oCameraPos = {x: _oSpriteContainer.x, y:_oSpriteContainer.y};

        /////////////////DEBUG FUNCTIONS
        //_oBackGroundContainer.on("mousedown", this.moveBall);
        //_oBackGroundContainer.on("pressmove", this.moveBall);
        //_oBackGroundContainer.on("pressup", this.releaseBall);
        ////////////////////////////////

        _oInterface = new CInterface(_oForeGroundContainer);
        _oInterface.refreshCredits(START_CREDITS);
        
        _oHelpPanel = new CHelpPanel(s_oStage);
        _oHelpPanel.addEventListener(ON_EXIT_HELP, this._onExitHelp, this);
        _oHelpPanel.show();
   
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('msg_box'));
   
        _oMsgBox = new CMsgBox();
   
        _bStartGame = true;
        
    };
    
    this.unload = function(){
        _bStartGame = false;
        
        _oInterface.unload();
        _oEndPanel.unload(); 
        _oHelpPanel.unload();
        _oMsgBox.unload();
        
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        
        s_oPhysicsController.unload();
    };
    
    this.refreshPos = function(){
        var iBottomBarHeight = 150;
        var iCameraWidth = (CANVAS_WIDTH-s_iOffsetX*2);
        var iCameraHeight = (CANVAS_HEIGHT-s_iOffsetY*2-iBottomBarHeight);
        ZOOM = zoomInCamera(_oSpriteContainer, iCameraWidth, iCameraHeight, 670, 1080);

        var iY = linearFunction(s_iOffsetX, 0, 100, -480, -480-s_iOffsetX);
        if(iY < -540){
            iY = -540;
        }
        var iScale = linearFunction(s_iOffsetX, 0, 100,0.6, 1);
        _oPachinkoText.setPos(-80,iY);
        _oPachinkoText.scale(iScale);
    };

    this.onControllerChanged = function(iValue){
        _iControllerValue = iValue;
        if(_iControllerValue === 0){
            _bBallShooting = false;
        }
    };
    
    this._onWheelReadyToSpin = function(){
        if(_iBallInBonus>0){
            _oParent.spinWheel();
        }else{
            _oBonusPlatform.deactivate();
        }
    };
    
    this._onWheelStop = function(){

    };
    
    this._onWheelWin = function(iSymbolIndex){       
        _oPachinkoText.longFlashing();
        
        var iPrize = PAYTABLE[iSymbolIndex];
        _iCurCredits += iPrize;
        _iBank -= iPrize;
        
        $(s_oMain).trigger("save_score",_iCurCredits);
        
        _oInterface.refreshCredits(_iCurCredits);
        _oInterface.winAnimation(iPrize)
        
    };
    
    this._onWheelClosed = function(){
        if(_iBallInBonus > 0){
            _oBonusPlatform.activate();
        }
    };
    
    this.spinWheel = function(){
        var iPercentage =  WIN_PERCENTAGE/100;
        if(_iBank < _iMaxPayout){
            //USER MUST LOSE CAUSE NOT ENOUGH MONEY IN GAME CASH
            iPercentage = 0;
        }

        var bWin = Math.random() < iPercentage ? true : false;
        var aCombo = new Array();
        if(bWin){
            aCombo = this._generateWinCombo();
        }else {
            aCombo = this._generateLoseCombo();
        }
        
        _iBallInBonus--;
        _oBonusPlatform.setNumBalls(_iBallInBonus);
        
        _oBonusPlatform.spin(aCombo);
    };    

    this._generateLoseCombo = function(){
        var aRandomCombo = new Array();
        do{
            
            for(var i=0; i<NUM_REELS; i++){
                aRandomCombo[i] = Math.floor( Math.random()*NUM_SYMBOLS );
            }
            
        }while(this._isAWinningCombo(aRandomCombo));
        
        return aRandomCombo;
    };
    
    this._generateWinCombo = function(){
        var iRandomIndex = Math.floor( Math.random()*WHEEL_WINNING_COMBO.length );
        
        var aRandomCombo = WHEEL_WINNING_COMBO[iRandomIndex];

        return aRandomCombo;
    };
    
    this._isAWinningCombo = function(aCombo){
        for(var i=0; i<WHEEL_WINNING_COMBO.length; i++){
            if(arraysEqual(WHEEL_WINNING_COMBO[i] , aCombo)){
                return true;
            }
        }
        
        return false;
    };
    
    ////////////DEBUG FUNCTION
    this.moveBall = function(evt){
        var oPos = {x: evt.localX /WORLD_SCALE, y: evt.localY / WORLD_SCALE};
        
        _oCurBallDebug = _oBallsPool.getCurBall();
        
        _oCurBallDebug.SetLinearVelocity({x:0,y:0});
        _oCurBallDebug.SetAngularVelocity(0);
        _oCurBallDebug.SetPosition(oPos);

        _oBallsPool.setCurBallVisible();
    };
 
    this.releaseBall = function(){
        _oCurBallDebug.SetActive(true);
        _oCurBallDebug = _oBallsPool.setNextBall();
    };
    /////////////////////////////

    this.ballInGame = function(bVal){
        _bBallShooting = bVal;
    };
    
    this.restartGame = function () {
        _bStartGame = true;
        $(s_oMain).trigger("recharge");
    };        

    this._onEnterBonusBall = function(iBallIndex){
        _oBallsPool.resetBall(iBallIndex);
        
        _iBallInBonus++;
        
        _oBonusPlatform.setNumBalls(_iBallInBonus);
        
        _oBonusPlatform.activate();
    };

    this._onSaveBall = function(iBallIndex){
        _oBallsPool.resetBall(iBallIndex);
        
        _iBallRemaining++;
        _oInterface.increaseBallRemaining(_iBallRemaining)
        
        _iBallSaved++;
    };

    this.buyBalls = function(){
        $(s_oMain).trigger("show_interlevel_ad");
        
        if(!ALLOW_BET_WHILEPLAYING){
            if(_iBallRemaining>0) {
                _oMsgBox.show(TEXT_BALLS_TO_PLAY);
                return;
            }
        }
        
        if(_iCurCredits>=BET){
            $(s_oMain).trigger("bet_placed",BET);
            
            _iBallRemaining += BALLS_PER_BET;
            _iCurCredits -= BET;
            _iBank += BET;
            
            _oInterface.refreshBallRemaining(_iBallRemaining);
            _oInterface.refreshCredits(_iCurCredits);
        }else {
            if(_iBallRemaining === 0){
                this.gameOver();
            }else if(ALLOW_BET_WHILEPLAYING){
                _oMsgBox.show(TEXT_BALLS_TO_PLAY);
            }
        }
    };  

    this.addMoney = function(iMoney){
        _iCurCredits += iMoney;
        _oInterface.refreshCredits(_iCurCredits);
        _oInterface.refreshBallRemaining(_iBallRemaining);
    };

    this.getBall = function(){
        return _oCurBallDebug;
    };
    
    this.getBallRemaining = function(){
        return _iBallRemaining;
    };

    this.onExit = function(){
        $(s_oMain).trigger("end_session");
        
        s_oGame.unload();
        s_oMain.gotoMenu();

        setVolume("soundtrack", 1);

    };
    
    this.showHelp = function(){
        _oHelpPanel.show();
    };
    
    this._onExitHelp = function () {
        _oPachinkoText.slowOff(1500,0);
        playSound('good_luck', 1, false);
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
    };
    
    this.onExitFromEndPanel = function(bContinued){
        _oEndPanel.hide();
        
        if(bContinued){
            s_oGame.restartGame();
        }else {
            _oInterface.refreshBallRemaining(_iBallRemaining);
        }
    };
    
    this.gameOver = function(){  
        _oEndPanel.show();
    };

    this.onPause = function(){
        _bStartGame = false;

        _oBonusPlatform.pause(true);
        _oInterface.pause(true)
    };

    this.onResume = function(){
        _bStartGame = true;

        _oBonusPlatform.pause(false);
        _oInterface.pause(false)
    };

    this._onCannonUsing = function(){
        if(_bBallShooting){
            if(!_bCannonUsing){
                _bCannonUsing = true;
                s_oTable.arrowsLaunchAnimation();
            }
            if(_iBallRemaining === 0){
                _bBallShooting = false;
            }
        }else {
            if(_bCannonUsing){
                _bCannonUsing = false;
                s_oTable.arrowsIdleAnimation();
            }
        }
    };

    this._launchABall = function(){
        playSound("launch", 1, false);
        
        _iBallRemaining--;
        
        _oInterface.refreshBallRemaining(_iBallRemaining);
        
        var oBall = _oBallsPool.getCurBall();
        _oBallsPool.setCurBallInForeground();

        oBall.SetAngularVelocity(0);
        oBall.SetPosition(BALL_STARTPOS_WORLD);
        oBall.SetActive(true);
        
        var vDirection = new CVector2(1,-1);
        
        var iStrength = 6*_iControllerValue;
        if(iStrength<2){
            ///THIS CONTROL, IS NEEDED TO LAUNCH THE BALLS ALWAYS IN THE AIR.
            ///THIS WAY, IS ASSURED THAT A BALL LAUNCHED IS ALWAYS OVER EAR MASK
            var iRotateBehind = linearFunction(iStrength,0,2,45,0);
            iRotateBehind = degreesToRadians(iRotateBehind);
            rotateVector2D(iRotateBehind, vDirection);
            iStrength = 2;
        }        
        
        var iRandomRange = 20;
        var iRad = degreesToRadians(-iRandomRange/2+Math.random()*iRandomRange);
        rotateVector2D(iRad, vDirection);
        vDirection.scalarProduct(iStrength);
        oBall.SetLinearVelocity({x:vDirection.getX(),y:vDirection.getY()});

    };
    
    this._ballSpawnControl = function(){
        _iTimerBallShot -= s_iTimeElaps;
        if(_iTimerBallShot<0 && _iBallRemaining>0){
            
            _bBallShooting = true;
            
            _iTimerBallShot = BALL_SPAWN_TIMER;
            this._launchABall();
            
            _oBallsPool.prepareNextBall();
        }
    };
    
    this.update = function(){
        
        if(!_bStartGame){
            return;
        }
        
        if(_iControllerValue>0){
            //WE CAN SHOT BALLS
            this._ballSpawnControl();
        }else {
            _iTimerBallShot = BALL_SPAWN_TIMER;
        }

        _oBallsPool.update();

        s_oPhysicsController.update(_oCameraPos);
       
       _oBonusPlatform.update();
       
       this._onCannonUsing();
       
    };

    WIN_PERCENTAGE = oData.win_occurrence;
    START_CREDITS = oData.start_credits;
    BALLS_PER_BET = oData.balls_per_bet;
    BET = oData.bet;
    PAYTABLE = oData.paytable;

    s_oGame=this;
    
    _oParent=this;
    this._init();
}

var s_oGame;
