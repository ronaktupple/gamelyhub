function CMenu(){
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oCreditsBut;
    var _oButFullscreen;
    var _oLogo;
    
    var _aLetters;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosCredits;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    this._init = function(){
        var aSprite = new Array();
        for(var i=0; i<4; i++){
            aSprite.push(s_oSpriteLibrary.getSprite('bg_menu_anim_'+i));
        };
        var iWidth = aSprite[0].width;
        var iHeight = aSprite[0].height;
        var oData = {   
                        framerate:4,
                        images: aSprite, 
                        // width, height & registration point of each sprite
                        frames: {width: iWidth, height: iHeight, regX: 0, regY: 0}, 
                        animations: {idle:[0,3]}
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oBgAnim = createSprite(oSpriteSheet, "idle",0,0,iWidth,iHeight);
        s_oStage.addChild(oBgAnim);
        
        
        var aSprite = new Array();
        for(var i=0; i<4; i++){
            aSprite.push(s_oSpriteLibrary.getSprite('logo_menu_'+i));
        };
        var oSprite = s_oSpriteLibrary.getSprite('logo_menu');
        var oLogo = new CLightIndicator(oSprite, CANVAS_WIDTH/2, 350, s_oStage, 0, 0);
        oLogo.highlight2(1500);

        var oSprite = s_oSpriteLibrary.getSprite('bg_menu');
        _oBg = createBitmap(oSprite);
        _oBg.regY = oSprite.height;
        _oBg.y = CANVAS_HEIGHT;
        s_oStage.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -300,oSprite,s_oStage);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
     
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.width/4)- 10, y: (oSprite.height/2) + 10};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }

        if(SHOW_CREDITS){
            var oSprite = s_oSpriteLibrary.getSprite('but_credits');
            _pStartPosCredits = {x: (oSprite.width/2) + 10, y: (oSprite.height/2) + 10};            
            _oCreditsBut = new CGfxButton(_pStartPosCredits.x,_pStartPosCredits.y,oSprite, s_oStage);
            _oCreditsBut.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
            
            _pStartPosFullscreen = {x:_pStartPosCredits.x + oSprite.width + 10,y:_pStartPosCredits.y};
        }else{
            var oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:10 + oSprite.width/4,y:(oSprite.height / 2) + 10};
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled){
            var oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this);
        }

       
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;});  
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.unload = function(){
        _oButPlay.unload(); 
        _oButPlay = null;
        _oFade.visible = false;
        
        if(SHOW_CREDITS){
            _oCreditsBut.unload();
        }

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
                _oButFullscreen.unload();
        }
        
        s_oStage.removeAllChildren();
        _oBg = null;
        s_oMenu = null;
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(SHOW_CREDITS){
            _oCreditsBut.setPosition(_pStartPosCredits.x + iNewX,iNewY + _pStartPosCredits.y);
        }
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.isEnabled){
                _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }
    };

    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onCreditsBut = function(){
        new CCreditsPanel();
    };
    
    this.resetFullscreenBut = function(){
        if (_fRequestFullScreen && screenfull.isEnabled){
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };
        
    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    
    this._onButPlayRelease = function(){
        
        this.unload();

        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame();

    };
	
    s_oMenu = this;
    
    this._init();
}

var s_oMenu = null;