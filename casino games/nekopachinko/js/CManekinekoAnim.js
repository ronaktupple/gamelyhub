function CManekinekoAnim(oParentContainer){
    var _iIDTimeout;
    var _iHeadAnimationFrequency;
    
    var _oParent;
    var _oContainer;
    var _oHead;
    var _oArm;
    
    
    this._init = function(oParentContainer){
        _iHeadAnimationFrequency = 8000;
        
        _oContainer = new createjs.Container();
        oParentContainer.addChild(_oContainer);
        
        ////////LABELS///////////
        /*
        state_open:[5,5],
        close_eyes:[5,8, "state_close"],state_close:[8,8],
        look_left:[9,15,"state_left"], state_left: [15,15], left_to_center: [16, 18, "state_left"], state_center:[18,18],
        look_right:[18, 22, "state_right"], state_right:[22, 22], right_to_center:[22, 26, "state_center"],
        */

        /////FROM OPEN STATE
        var oBlink = {frames:[], next:"state_open", speed:1};
        var aFrames = [5,5,5,0,0,5,5,5];
        oBlink.frames = aFrames;
        
        var oBlink2 = {frames:[], next:"state_open", speed:1};
        var aFrames = [5,5,5,5,5,0,0,5,5,5,0,0,5,5,5,5,5];
        oBlink2.frames = aFrames;
        
        var oLookLeft = {frames:[], next:"state_open", speed:0.5};
        var aFrames = [12,13,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,17,18];
        oLookLeft.frames = aFrames;
        
        var oLookRight = {frames:[], next:"state_open", speed:0.5};
        var aFrames = [19,20,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,24,25,26];
        oLookRight.frames = aFrames;
        
        var oOpenedWary = {frames:[], next:"state_open", speed:0.3};
        var aFrames = [12,13,14,15,15,15,15,15,15,15,15,15,15,15,16,17,18,19,20,21,22,22,22,22,22,22,22,22,22,22,22,22,22,23,24,25,26];
        oOpenedWary.frames = aFrames;
        
        var oOpenedWaryAndClose = {frames:[], next:"state_close", speed:0.3};
        var aFrames = [ 12,13,14,15,15,15,15,15,15,15,15,15,15,15,16,17,18,19,20,21,22,22,22,22,22,22,22,22,22,22,22,22,22,23,24,25,26,
                        26,26,26,26,26,26,26,26,26,26,26,27,28,29,30,31,32];
        oOpenedWaryAndClose.frames = aFrames;
        ////////////////////////////
        
        
        /////FROM CLOSED STATE
        var oStraightLeft = {frames:[15], next:"state_close", speed:0.01};
        
        var oStraightRight = {frames:[22], next:"state_close", speed:0.01};
        
        var oFurtively = {frames:[], next:"state_close", speed:0.3};
        var aFrames = [0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,0];
        oFurtively.frames = aFrames;
        
        var oWary = {frames:[], next:"state_open", speed:0.3};
        var aFrames = [9,10,11,12,13,14,15,15,15,15,15,15,15,15,15,15,15,16,17,18,19,20,21,22,22,22,22,22,22,22,22,22,22,22,22,22,23,24,25,26];
        oWary.frames = aFrames;
        
        var oWaryAndClose = {frames:[], next:"state_close", speed:0.3};
        var aFrames = [ 9,10,11,12,13,14,15,15,15,15,15,15,15,15,15,15,15,16,17,18,19,20,21,
                        22,22,22,22,22,22,22,22,22,22,22,22,22,23,24,25,
                        26,26,26,26,26,26,26,26,26,26,26,27,28,29,30,31,32];
        oWaryAndClose.frames = aFrames;
        //////////////////////////////////
        
        var oSprite = s_oSpriteLibrary.getSprite('head');
        var iWidth = oSprite.width/3;
        var iHeight = oSprite.height/11;
        var oData = {   
                        framerate: 30,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2}, 
                        animations: {   state_open:[5,5],
                                        state_close:[0,0],

                                        /////FROM OPENED STATE
                                        close_eyes:[5,8, "state_close"],
                                        blink: oBlink,
                                        blink2: oBlink2,
                                        look_left: oLookLeft,
                                        look_right: oLookRight,
                                        opened_wary: oOpenedWary,
                                        opened_wary_and_close: oOpenedWaryAndClose,
                                        
                                        /////FROM CLOSED STATE
                                        open_eyes:[0,5,"state_open"],
                                        wary: oWary,
                                        wary_and_close: oWaryAndClose,
                                        straight_left: oStraightLeft,
                                        straight_right: oStraightRight,
                                        furtively: oFurtively
                                        
                                        
                                    }
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);
	_oHead = createSprite(oSpriteSheet, "state_close",iWidth/2,iHeight/2,iWidth,iHeight);
        _oHead.on("animationend", this._onAnimationHeadEnd, this);
        _oHead.y = -9;
        _oContainer.addChild(_oHead);


        var oSprite = s_oSpriteLibrary.getSprite('arm');
        var iWidth = oSprite.width/10;
        var iHeight = oSprite.height/3;
        var oData = {   
                        framerate: 30,
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2}, 
                        animations: {   idle:[0,29] }
                    }
        var oSpriteSheet = new createjs.SpriteSheet(oData);
	_oArm = createSprite(oSpriteSheet, "idle",iWidth/2,iHeight/2,iWidth,iHeight);
        _oArm.x = -48;
        _oArm.y = -4;
        _oContainer.addChild(_oArm);

    };
    
    this.show = function(bVal){
        _oContainer.visible = true;
        _oArm.gotoAndPlay("idle");
    };
    
    this.hide = function(){
        _oContainer.visible = false;
    };
    
    this.pause = function(bVal){
        
        clearTimeout(_iIDTimeout);
        
        if(bVal){
            _oArm.stop();
            _oHead.stop();
        }else {
            _oArm.play();
            _oHead.play();
        }
    };
    
    this._onAnimationHeadEnd = function(){
        var szCurAnim = _oHead.currentAnimation;
        
        switch(szCurAnim){
            case "state_open":{
                    _oParent._chooseAnimFromOpenState();
                    break;
            }
            case "state_close":{
                    _oParent._chooseAnimFromClosedState();
                    break;
            }
        }
    };
    
    this._chooseAnimFromOpenState = function(){
        var aAnimFromOpenedStateList = new Array();
        aAnimFromOpenedStateList = ["close_eyes", "close_eyes",     ///GIVE MORE CHANCE TO THIS ANIMATIONS
                                    "blink","blink","blink",        ///GIVE MORE CHANCE TO THIS ANIMATIONS
                                    "blink2", "blink2",             ///GIVE MORE CHANCE TO THIS ANIMATIONS
                                    "look_left", "look_right", 
                                    "opened_wary", "opened_wary_and_close"];
        
        var iRandomAnimIndex = Math.floor( Math.random()*aAnimFromOpenedStateList.length );
        
        _oParent._prepareNextAnimation(aAnimFromOpenedStateList[iRandomAnimIndex]);
    };
    
    this._chooseAnimFromClosedState = function(){
        var aAnimFromClosedStateList = new Array();
        aAnimFromClosedStateList = ["open_eyes", "wary", "wary_and_close", "straight_left", "straight_right", "furtively"];
        
        var iRandomAnimIndex = Math.floor( Math.random()*aAnimFromClosedStateList.length );
        
        _oParent._prepareNextAnimation(aAnimFromClosedStateList[iRandomAnimIndex]);
    };
    
    this._prepareNextAnimation = function(szAnim){
        _iIDTimeout = setTimeout(function(){
            _oHead.gotoAndPlay(szAnim);
        }, _iHeadAnimationFrequency);
    };
    
    _oParent = this;
    this._init(oParentContainer);
}


