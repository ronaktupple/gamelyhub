function CBottomBar(iX, iY, oParentContainer){
    
    var _oContainer;
    var _oPowerMask;
    var _oBallNum;
    var _oCreditsNum;
    var _oButPlus;
    var _oController;
    var _oHandAnim;
    var _oHandWheel;
    var _oParent;
    
    this._init = function(iX, iY, oParentContainer){
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('power_bg');
        var oPowerBG = createBitmap(oSprite);
        oPowerBG.regX = oSprite.width/2;
        oPowerBG.regY = oSprite.height;
        oPowerBG.x = 188;
        oPowerBG.y = -35;
        _oContainer.addChild(oPowerBG);
        
        var oSprite = s_oSpriteLibrary.getSprite('power_level');
        var oPowerLevel = createBitmap(oSprite);
        oPowerLevel.regX = oSprite.width/2;
        oPowerLevel.regY = oSprite.height;
        oPowerLevel.x = oPowerBG.x;
        oPowerLevel.y = oPowerBG.y;
        _oContainer.addChild(oPowerLevel);
        
        var oSprite = s_oSpriteLibrary.getSprite('power_level');
        _oPowerMask = new createjs.Shape();
        _oPowerMask.graphics.beginFill("rgba(255,0,0,1)").drawRect(-oSprite.width/2, 0, oSprite.width, -oSprite.height);
        _oPowerMask.x = oPowerLevel.x;
        _oPowerMask.y = oPowerLevel.y;
        
        oPowerLevel.mask = _oPowerMask;
        
        var oSprite = s_oSpriteLibrary.getSprite('bottom_panel');
        var oBottomPanel = createBitmap(oSprite);
        oBottomPanel.regX = oSprite.width/2;
        oBottomPanel.regY = oSprite.height;
        _oContainer.addChild(oBottomPanel);

        var iCenterY = -oSprite.height/2 + 44;

        var iWidth = 70;
        var iHeight = 70;
        var iTextX = -180;
        var iTextY = iCenterY-3;
        _oBallNum = new CTLText(_oContainer, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    28, "center", "#f7f7f7", PRIMARY_FONT, 1,
                    2, 2,
                    "0",
                    true, true, false,
                    false );

                    
        var iWidth = 180;
        var iTextX = 36;
        _oCreditsNum = new CTLText(_oContainer, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    28, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
                    2, 2,
                    formatValue(START_CREDITS),
                    true, true, false,
                    false );

        var oSprite = s_oSpriteLibrary.getSprite('but_buy');
        _oButPlus = new CGfxButton(-298, iCenterY, oSprite,_oContainer);
        _oButPlus.addEventListener(ON_MOUSE_UP, this._onButPlusRelease, this);

        var oSprite = s_oSpriteLibrary.getSprite('hand_anim');
        var iWidth = oSprite.width/5;
        var iHeight = oSprite.height/2;
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth-30, regY: iHeight-10}, 
                        animations: {   start:[5, 9, "stop"], stop: [9,9,"back", 0.02], back: [0,4, "start"],
                                        single_frame:[0,0]
                                    }
                   };


        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oHandAnim = createSprite(oSpriteSheet, "start",iWidth/2,iHeight/2,iWidth,iHeight);
        _oHandAnim.x = _oButPlus.getX();
        _oHandAnim.y = _oButPlus.getY();
        _oContainer.addChild(_oHandAnim);

        
        var oControllerPos = {x: 265,y: -115}
        _oController = new CController(oControllerPos.x, oControllerPos.y, _oContainer);
        _oController.addEventListener(ON_CONTROLLER, this._onControllerChanged, this);
        
        _oHandWheel = createSprite(oSpriteSheet, "single_frame",iWidth/2,iHeight/2,iWidth,iHeight);
        _oHandWheel.x = oControllerPos.x;
        _oHandWheel.y = oControllerPos.y;
        _oHandWheel.scaleY =-1;
        _oHandWheel.visible = false;
        _oContainer.addChild(_oHandWheel);

        this._handWheelAnim(1);

        

        this._changePowerLevel(0);
        
        
    };
    
    this.unload = function(){
        _oButPlus.unload();
        
        createjs.Tween.removeTweens(_oHandWheel);
        
        oParentContainer.removeChild(_oContainer);
    };
    
    this.pause = function(bVal){

    };
    
    this.refreshPos = function(){
        _oContainer.y = iY-s_iOffsetY;
        
        smartResize(_oContainer, 0, 0);
    };
    
    this.refreshCredits = function(iValue){
        _oCreditsNum.refreshText( formatValue(iValue) );
    };

    this.refreshBallRemaining = function(iNumBall){
        _oBallNum.refreshText(iNumBall);
        
        if(iNumBall === 0){
            _oHandAnim.visible = true;
        }
    };
    
    this.ballRemainingIncreaseAnim = function(){
        var iX = _oBallNum.getX() + 25;
        var iY = _oBallNum.getY() + 10;
        var oAnimText = new CAnimText("+1", iX,iY, _oContainer, "#19ca01");
        oAnimText.moveUp();
    };
    
    this.winAnim = function(iWin){
        var iX = _oCreditsNum.getX() + 85;
        var iY = _oCreditsNum.getY() + 10;
        var oAnimText = new CAnimText("+ "+formatValue(iWin), iX,iY, _oContainer, "#ff0");
        oAnimText.moveUpAndFlash();
    };
    
    this._handWheelAnim = function(iDir){
        var oStartPos = {x: 265,y: -200};
        
        _oHandWheel.x = oStartPos.x;
        _oHandWheel.y = oStartPos.y;
        
        var iTime = 1000;
        var iDirection = iDir;
        var iX = oStartPos.x+70*iDirection;
        createjs.Tween.get(_oHandWheel).to({x:iX}, iTime/2, createjs.Ease.sineOut).to({x:oStartPos.x}, iTime/2, createjs.Ease.sineIn);
        createjs.Tween.get(_oHandWheel).to({y:oStartPos.y + 150}, iTime).wait(iTime).call(function(){
            iDir *= -1;
            _oParent._handWheelAnim(iDir);
        });
    };
    
    this._checkHandWheelAnimToShown = function(){
        var iNumBall = s_oGame.getBallRemaining();
        if(iNumBall > 0){
            _oHandWheel.visible = true;
        }
    };
    
    this._changePowerLevel = function(iLevel){
        _oPowerMask.scaleY = iLevel;
    };
    
    this._onButPlusRelease = function(){
        s_oGame.buyBalls();
        _oHandAnim.visible = false;
        
        _oParent._checkHandWheelAnimToShown();
    };
    
    this._onControllerChanged = function(iValue){
        if(iValue > 0){
            _oHandWheel.visible = false;
        }else {
            _oParent._checkHandWheelAnimToShown();
        }
        
        
        _oParent._changePowerLevel(iValue);
        
        s_oGame.onControllerChanged(iValue);
    };  
    
    
    _oParent = this;
    this._init(iX, iY, oParentContainer);
}


