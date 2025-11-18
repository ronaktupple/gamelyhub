function CWheelEngine(oParentContainer){
    var _bSpinReceived;
    
    var _iCurState;
    var _iCurReelLoops;
    var _iNextColToStop;
    var _iNumReelsStopped;
    var _iAnimWinLoopCounter;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aReelSequence;
    var _aMovingColumns;
    var _aFinalSymbolCombo;
    var _aWinAnimation;
    
    var _oReelContainer;
    var _oMaskReel;
    var _oParent;
    
    this._init = function(oParentContainer){
        _bSpinReceived = false;
        _iCurState = WHEEL_STATE_IDLE;
        _iCurReelLoops = 0;
        _iNextColToStop = 0;
        _iNumReelsStopped = 0;
        _iAnimWinLoopCounter = ANIM_WIN_LOOPS*NUM_REELS;
        
        //THIS IS THE SORTED SEQUENCE OF REELS TO STOP
        _aReelSequence = new Array();
        for(var i=0; i<NUM_REELS; i++){
            _aReelSequence.push(i);
        }
        _iNextColToStop = _aReelSequence[0];
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _aWinAnimation = new Array();
        
        //IN THIS ARRAY WILL BE STORED THE FINAL 1x3 WHEEL
        _aFinalSymbolCombo = new Array();
        for(var i=0;i<NUM_ROWS;i++){
            _aFinalSymbolCombo[i] = new Array();
            for(var j=0;j<NUM_REELS;j++){
                _aFinalSymbolCombo[i][j] = 0;
            }
        }
        
        _oReelContainer = new createjs.Container();
        oParentContainer.addChild(_oReelContainer);
        
        ////THE BG WITH THE SAME COLOR OF SYMBOLS, AVOID A REEL GLITCH
        var oSprite = s_oSpriteLibrary.getSprite('bg_reels');
        var oBg = createBitmap(oSprite);        
        oBg.regX = oSprite.width/2;
        oBg.y = REEL_OFFSET_Y;
        _oReelContainer.addChild(oBg);
        
        _oMaskReel = new createjs.Shape();
        _oMaskReel.graphics.beginFill("rgba(255,250,0,0.01)").drawRect(REEL_OFFSET_X,REEL_OFFSET_Y,
                                                                (SYMBOL_WIDTH*NUM_REELS) + (SPACE_BETWEEN_SYMBOLS*NUM_REELS),
                                                                (SYMBOL_HEIGHT * NUM_ROWS) + (SPACE_HEIGHT_BETWEEN_SYMBOLS * NUM_ROWS));


        var iCont = 0;
        var iCurDelay = 0;
        var iXPos = REEL_OFFSET_X;
        var iYPos = REEL_OFFSET_Y;
        
        //CREATE REEL STRIPS TO MOVE UP AND DOWN DURING SPINNING
        _aMovingColumns = new Array();
        for(var i=0;i<NUM_REELS;i++){ 
            var aSymbols = new Array();
            for(var j=0; j<NUM_ROWS; j++){
                var iRandSymbols = Math.floor( Math.random()*NUM_SYMBOLS );
                aSymbols.push(iRandSymbols);
            }
            _aMovingColumns[i] = new CReelColumn(i,iXPos,iYPos,iCurDelay,aSymbols,_oReelContainer,_oReelContainer);
            _aMovingColumns[i+NUM_REELS] = new CReelColumn(i+NUM_REELS,iXPos,
                                                iYPos + ( ( SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS)*NUM_ROWS),iCurDelay,aSymbols,_oReelContainer,_oReelContainer);
            
            _aMovingColumns[i].addEventListener(ON_REEL_ARRIVED, this.reelArrived, this);
            _aMovingColumns[i+NUM_REELS].addEventListener(ON_REEL_ARRIVED, this.reelArrived, this);
               
            _aMovingColumns[i].addEventListener(ON_REEL_STOP, this.stopNextReel, this);
            _aMovingColumns[i+NUM_REELS].addEventListener(ON_REEL_STOP, this.stopNextReel, this);
            
            _aMovingColumns[i].setMask(_oMaskReel);
            _aMovingColumns[i+NUM_REELS].setMask(_oMaskReel);
            
            iXPos += SYMBOL_WIDTH + SPACE_BETWEEN_SYMBOLS;
            iCurDelay += REEL_DELAY;
            
            iCont +=3;
        }

    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.pause = function(bVal){
        if(bVal){
            setVolume("reels",0);
        }else {
            setVolume("reels",1);
        }
    };
    
    this.setVisible = function(bVal){
        _oReelContainer.visible = bVal;
    };
    
    this.resetWheel = function(){
        for(var i=0; i<_aWinAnimation.length; i++){
            _aWinAnimation[i].stop();
            _oReelContainer.removeChild(_aWinAnimation[i]);
        };
        
        _aWinAnimation = new Array();
        _iAnimWinLoopCounter = ANIM_WIN_LOOPS*NUM_REELS;
    };
    
    //THIS FUNCTION IS CALLED WHEN A REEL STOPS
    this.stopNextReel = function() {
	//INCREASE INDEX OF THE NEXT REEL TO STOP
        _iNumReelsStopped++;        
        
        
        if(_iNumReelsStopped%2 === 0){
           
            _iNextColToStop = _aReelSequence[_iNumReelsStopped/2];
            
            
            if (_iNumReelsStopped === (NUM_REELS*2) ) {
                this._endReelAnimation();
            }
        }else{
            
            playSound("reels_stop", 1, false);
        }  
    };
    
    //THIS FUNCTION IS CALLED WHEN A REEL REACH THE Y BELOW THE MASK SLOT
    this.reelArrived = function(iReelIndex,iCol) {
        //IF THE CURRENCT REEL HAS DONE THE MINIMUM AMOUNT OF LOOPS, IT MUST STOP
        if(_iCurReelLoops>MIN_REEL_LOOPS && _bSpinReceived){
            //IF THE CURRENT REEL IS THE NEXT ONE THAT MUST STOP...
            if (_iNextColToStop === iCol) {
                //ALERT HIM THAT IT MUST STOP
                if (_aMovingColumns[iReelIndex].isReadyToStop() === false) {
                    var iNewReelInd = iReelIndex;
                    if (iReelIndex < NUM_REELS) {
                            iNewReelInd += NUM_REELS;

                            var aSymbol = new Array();
                            for(var i=0; i<_aFinalSymbolCombo.length; i++){
                                aSymbol.push(_aFinalSymbolCombo[i][iReelIndex]);
                            }
                            
                    }else {
                            iNewReelInd -= NUM_REELS;

                            var aSymbol = new Array();
                            for(var i=0; i<_aFinalSymbolCombo.length; i++){
                                aSymbol.push(_aFinalSymbolCombo[i][iNewReelInd]);
                            }
                    }
                    _aMovingColumns[iNewReelInd].setReadyToStop();
                    _aMovingColumns[iReelIndex].restart(aSymbol, true);    
                }
            }else {
                    //OTHERWISE CONTINUE LOOPING
                    _aMovingColumns[iReelIndex].restart(this._generateRandSymbols(),false);
            }   
        }else {    
            //...OTHERWISE IT MUST CONTINUE REPOSITIONING ITSELF
            _aMovingColumns[iReelIndex].restart(this._generateRandSymbols(), false);
            if(iReelIndex === 0){
                _iCurReelLoops++;
            }
            
        }

    };
    
    //GENERATE RANDOM SYMBOLS DURING REEL MOVEMENT
    this._generateRandSymbols = function() {
        var aRandSymbols = new Array();
        for (var i = 0; i < NUM_ROWS; i++) {
                var iRandIndex = Math.floor(Math.random()* s_aRandSymbols.length);
                aRandSymbols[i] = s_aRandSymbols[iRandIndex];
        }

        return aRandSymbols;
    };
    

    this.generateWheelCombo = function(aCombo){
        playSound("reels", 0.5, true);
        
        _oParent.resetWheel();
        
        var iCont = 0;
        for(var i=0;i<NUM_ROWS;i++){
            for(var j=0;j<NUM_REELS;j++){
                _aFinalSymbolCombo[i][j] = aCombo[iCont];
                iCont++;
            }
        }
        
        for(var i=0;i<NUM_REELS;i++){ 
            _aMovingColumns[i].activate();
            _aMovingColumns[i+NUM_REELS].activate();
        }
        
        _bSpinReceived = true;
        _iCurState = WHEEL_STATE_SPINNING;
    };
    
    //THIS FUNCTION IS CALLED WHEN ALL REELS ARE STOPPED
    this._endReelAnimation = function(){        
        _iCurState = WHEEL_STATE_IDLE;

        _iCurReelLoops = 0;
        _iNumReelsStopped = 0;
        _iNextColToStop = _aReelSequence[0];
        
        _bSpinReceived = false;     
        
        stopSound("reels");

        if(this._isAWinningCombo(_aFinalSymbolCombo[0])){
            _oParent.showWin();
            if(_aCbCompleted[ON_WHEEL_WIN]){
                _aCbCompleted[ON_WHEEL_WIN].call(_aCbOwner[ON_WHEEL_WIN], _aFinalSymbolCombo[0][0]);
            }
        } else {
            if(_aCbCompleted[ON_WHEEL_STOP]){
                _aCbCompleted[ON_WHEEL_STOP].call(_aCbOwner[ON_WHEEL_STOP], "");
            }
        }
    };
    
    this.showWin = function(){
        
        var iXPos = REEL_OFFSET_X;
        var iYPos = REEL_OFFSET_Y;
        _aWinAnimation = new Array();
        for(var i=0; i<NUM_REELS; i++){
            var iIndex = _aFinalSymbolCombo[0][i];

            var oWinAnim = createSprite(s_aSymbolsWinAnim[iIndex], "win",0,0,0,0);
            oWinAnim.on("animationend", this._onWinAnimationEnd, this);
            oWinAnim.x = iXPos;
            oWinAnim.y = iYPos;
            _oReelContainer.addChild(oWinAnim);
            
            iXPos += SYMBOL_WIDTH + SPACE_BETWEEN_SYMBOLS;
            
            _aWinAnimation.push(oWinAnim);
        }
    };
    
    this._onWinAnimationEnd = function(){
        _iAnimWinLoopCounter--;
        if(_iAnimWinLoopCounter<=0){
            _oParent.resetWheel();
            
            if(_aCbCompleted[ON_WHEEL_STOP]){
                _aCbCompleted[ON_WHEEL_STOP].call(_aCbOwner[ON_WHEEL_STOP], "");
            }
        }
    };
    
    this._isAWinningCombo = function(aCombo){
        for(var i=0; i<WHEEL_WINNING_COMBO.length; i++){
            if(arraysEqual(WHEEL_WINNING_COMBO[i] , aCombo)){
                return true;
            }
        }
        
        return false;
    };
    
    this.update = function(){
        switch(_iCurState){
            case WHEEL_STATE_IDLE:{
                    break;
            }
            case WHEEL_STATE_SPINNING:{
                    for(var i=0; i<_aMovingColumns.length; i++){
                        _aMovingColumns[i].update();
                    }
                    break;
            }
            case WHEEL_STATE_SHOW_WIN:{
                break;
            }
        }
    };
    
    _oParent = this;
    this._init(oParentContainer);
}
