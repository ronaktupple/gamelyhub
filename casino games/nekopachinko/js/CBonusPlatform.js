function CBonusPlatform(iX, iY, oParentContainer){
    var _aCbCompleted;
    var _aCbOwner;
    var _aExultationSounds;
    //var _aLastCombo;
    
    var _oContainer;
    var _oPlatform;
    var _oWheelEngine;
    var _oBallNum;
    var _oBonusText;
    var _oManekinekoAnim;
    
    var _oParent;

    this._init = function(iX, iY, oParentContainer){      
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);

        var oSprite = s_oSpriteLibrary.getSprite('wall_platform_mask');
        var oWall = createBitmap(oSprite);
        oWall.regX = oSprite.width/2;
        oWall.regY = oSprite.height/2;
        oWall.y = -15;
        _oContainer.addChild(oWall);
        
        _oWheelEngine = new CWheelEngine(_oContainer);
        _oWheelEngine.addEventListener(ON_WHEEL_STOP, this._onWheelStop, this);
        _oWheelEngine.addEventListener(ON_WHEEL_WIN, this._onWheelWin, this);

        var aSprite = new Array();
        for(var i=0; i<50; i++){
            aSprite.push( s_oSpriteLibrary.getSprite('bonus_platform_'+i) );
        }
        var iWidth = aSprite[0].width;
        var iHeight = aSprite[0].height;
        
        ////REVERSE ANIM
        var aFrames = new Array();
        var oCloseShutterAnim = {frames:[], next:"flip_to_idle", speed:1};
        for(var i=49; i>=21; i--){
            aFrames.push(i);
        }
        oCloseShutterAnim.frames = aFrames;

        var aFrames = new Array();
        var oFlipToIdleAnim = {frames:[], next:"state_close", speed:1};
        for(var i=20; i>=1; i--){
            aFrames.push(i);
        }
        oFlipToIdleAnim.frames = aFrames;
        ////////////////
        
        var oData = {   
                        framerate: 30,
                        images: aSprite, 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2}, 
                        animations: {   flip_to_bonus:[1,20,"open_shutter"],open_shutter:[21,49, "state_open"],state_open:[49,49],
                                        state_close:[0,0], close_shutter: oCloseShutterAnim, flip_to_idle: oFlipToIdleAnim
                                    }
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);
	_oPlatform = createSprite(oSpriteSheet, "state_close",iWidth/2,iHeight/2,iWidth,iHeight);
        _oPlatform.on("animationend", this._onAnimationEnd, this);
        _oContainer.addChild(_oPlatform);
        
        var oSprite = s_oSpriteLibrary.getSprite('bonus_ball_counter');
        var oBallPanel = createBitmap(oSprite);
        oBallPanel.regX = oSprite.width/2;
        oBallPanel.regY = oSprite.height/2;
        oBallPanel.y = 170;
        oBallPanel.scaleX = oBallPanel.scaleY = 1.3; 
        _oContainer.addChild(oBallPanel);

        var iWidth = 30;
        var iHeight = 22;
        var iTextX = oBallPanel.x;
        var iTextY = oBallPanel.y+2;
        _oBallNum = new CTLText(_oContainer, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    18, "center", "#f7f7f7", PRIMARY_FONT, 1,
                    2, 2,
                    "0",
                    true, true, false,
                    false );
        
        _oParent.hideReels();
        
        var oSprite = s_oSpriteLibrary.getSprite('bonus_text');
        _oBonusText = new CLightIndicator(oSprite, -1, 124, _oContainer, 0, 0);
        _oBonusText.setVisible(false);
        
        _oManekinekoAnim = new CManekinekoAnim(_oContainer);
        
        _aExultationSounds = new Array()
        var szTag = "exultation_";
        for(var i=1; i<=4; i++){
            _aExultationSounds.push(szTag+i)
        }
        
        //_oWheelEngine = new CWheelEngine(_oContainer);
        //_oWheelEngine.addEventListener(ON_WHEEL_STOP, this._onWheelStop, this);
        
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.activate = function(){
        var szCurAnim = _oPlatform.currentAnimation;
        if(szCurAnim === "state_close"){
            _oPlatform.gotoAndPlay("flip_to_bonus");
            _oManekinekoAnim.hide();
            
            playSound("platform_turn", 1, false);
        }
    };
    
    this.deactivate = function(){
        _oPlatform.gotoAndPlay("close_shutter");
    };

    this.pause = function(bVal){
        _oManekinekoAnim.pause(bVal);
        
        _oWheelEngine.pause(bVal);
    };

    this.showReels = function(){
        //
        _oWheelEngine.setVisible(true);
    };
    
    this.hideReels = function(){
        //
        _oWheelEngine.setVisible(false);
    };
    
    this.setNumBalls = function(iBalls){
        _oBallNum.refreshText(iBalls);
    };

    this.spin = function(aCombo){
        _oWheelEngine.generateWheelCombo(aCombo);
    };
    
    this._onWheelStop = function(){
        if(_aCbCompleted[ON_WHEEL_STOP]){
            _aCbCompleted[ON_WHEEL_STOP].call(_aCbOwner[ON_WHEEL_STOP], "");
        }
        if(_aCbCompleted[ON_WHEEL_READY_TO_SPIN]){
            _aCbCompleted[ON_WHEEL_READY_TO_SPIN].call(_aCbOwner[ON_WHEEL_READY_TO_SPIN], "");
        }
        _oBonusText.highlight2(3000);
    };
    
    this._onWheelWin = function(iSymbolIndex){
        _oBonusText.longFlashing();
        
        playSound("bonus_win", 1, false);
        
        if(iSymbolIndex<2){
            var iRandExultationIndex = Math.floor(Math.random()*_aExultationSounds.length);
            playSound(_aExultationSounds[iRandExultationIndex], 1, false);
        }else {
            playSound("well_done", 1, false);
        }

        if(_aCbCompleted[ON_WHEEL_WIN]){
            _aCbCompleted[ON_WHEEL_WIN].call(_aCbOwner[ON_WHEEL_WIN], iSymbolIndex);
        }
    };
    
    this._onAnimationEnd = function(){
        var szCurAnim = _oPlatform.currentAnimation;
        switch(szCurAnim){
            case "flip_to_bonus":{
                    _oParent.showReels();
                    _oBonusText.setVisible(true);
                    _oBonusText.highlight2(3000);
                    break;
            }
            case "close_shutter":{
                    _oParent.hideReels();
                    _oBonusText.setVisible(false);
                    
                    playSound("platform_turn", 1, false);
                    break;
            }
            case "flip_to_idle":{
                    _oManekinekoAnim.show();
                    break;
            }
            case "state_open":{
                    if(_aCbCompleted[ON_WHEEL_READY_TO_SPIN]){
                        _aCbCompleted[ON_WHEEL_READY_TO_SPIN].call(_aCbOwner[ON_WHEEL_READY_TO_SPIN], "");
                    }
                    break;
            }
            case "state_close":{
                    if(_aCbCompleted[ON_WHEEL_CLOSED]){
                        _aCbCompleted[ON_WHEEL_CLOSED].call(_aCbOwner[ON_WHEEL_CLOSED], "");
                    }
                    break;
            }
        }
    };
    
    this.update = function(){
        _oWheelEngine.update();
        
        //if(_iC)
        
    };
    
    _oParent = this;
    this._init(iX, iY, oParentContainer);
}

