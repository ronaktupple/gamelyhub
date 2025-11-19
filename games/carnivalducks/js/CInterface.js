function CInterface() {
    var _oAudioToggle;
    var _oButFullscreen;
    var _oButExit;
    var _oButHelp;
    var _oFillTime;
    var _oFillBox;
    var _oFillMask;
    var _oTextScore;
    var _oTextBest;
    var _oTextScoreOutline;
    var _oTextBestOutline;
    var _oTimeIcon;
    var _pStartPosAudio;
    var _pStartPosExit;
    var _pStartPosRestart;
    var _pStartPosFullscreen;
    var _pStartPosHelp;

    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oTween;
    var _oTopFrame;
    var _oBottomFrame;
    
    this._init = function () {
        _oTopFrame = createBitmap(s_oSpriteLibrary.getSprite("frame_top"));
      
        _oBottomFrame = createBitmap(s_oSpriteLibrary.getSprite("frame_bottom"));
        s_oStage.addChild(_oTopFrame);
        s_oStage.addChild(_oBottomFrame);
        _oBottomFrame.y = CANVAS_HEIGHT - 180;
        var oSpriteExit = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - oSpriteExit.width/2 - 10, y: (oSpriteExit.height / 2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSpriteExit,s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        _oTween = null;
       _oFillTime = createBitmap(s_oSpriteLibrary.getSprite("time_fill"));
       _oFillTime.x = 80;
       _oFillTime.y = 60;
       _oFillTime.regY = _oFillTime.getBounds().height;
       _oFillBox = createBitmap(s_oSpriteLibrary.getSprite("time_box"));
       _oFillBox.x = 80;
       _oFillBox.y = 60;
       _oFillBox.regY = _oFillTime.getBounds().height;
       _oFillMask = new createjs.Shape();
       _oTimeIcon = createBitmap(s_oSpriteLibrary.getSprite("time_icon"));
       _oTimeIcon.x = 50;
       _oTimeIcon.y = 55;
       _oTimeIcon.scaleX = 0.8;
       _oTimeIcon.scaleY = 0.8;
       _oTimeIcon.regX = 34;
       _oTimeIcon.regY = 45;
        _oFillMask.graphics.beginFill("rgba(255,255,255,1)").drawRect(_oFillTime.x, _oFillBox.y - 50, _oFillBox.getBounds().width*s_oGame.getTime() / (GAME_TIME*1000)  , _oFillBox.getBounds().height + 50);
        _oFillTime.mask = _oFillMask;
        s_oStage.addChild(_oFillBox);
        s_oStage.addChild(_oFillTime);
        s_oStage.addChild(_oTimeIcon);
        
      
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            
            _pStartPosAudio = {x: _pStartPosExit.x - oSpriteExit.width/2 - oSprite.width/4 - 10, y: _pStartPosExit.y};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive,s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
            _pStartPosFullscreen = {x: _pStartPosAudio.x - oSprite.width/2  - 10,y:_pStartPosAudio.y};
        }else{
            _pStartPosFullscreen = {x: _pStartPosExit.x - oSpriteExit.width - 10, y: _pStartPosExit.y};
        }
        
        
        _oTextScoreOutline = new CTLText(s_oStage, 
                    460, 50, 220, 32, 
                    32, "left", "#000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_YOUR_SCORE,
                    true, true, false,
                    false );
        _oTextScoreOutline.setOutline(3);
        
        _oTextScore = new CTLText(s_oStage, 
                    460, 50, 220, 32, 
                    32, "left", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_YOUR_SCORE,
                    true, true, false,
                    false );
                    
        _oTextBestOutline = new CTLText(s_oStage, 
                    460, 10, 220, 32, 
                    32, "left", "#000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_BEST+": "+s_iBestScore,
                    true, true, false,
                    false );
        _oTextBestOutline.setOutline(3);
        
        _oTextBest = new CTLText(s_oStage, 
                    460, 10, 220, 32, 
                    32, "left", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_BEST+": "+s_iBestScore,
                    true, true, false,
                    false );            

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
            
            _pStartPosRestart = {x: _pStartPosFullscreen.x - oSpriteExit.width, y: _pStartPosFullscreen.y};
        }else{
            _pStartPosRestart = {x: _pStartPosFullscreen.x, y: _pStartPosFullscreen.y};
        }
        var oSpriteHelp = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosHelp = {x: _pStartPosFullscreen.x - oSpriteHelp.width - 10, y: (oSpriteHelp.height / 2) + 10};
        _oButHelp = new CGfxButton(_pStartPosHelp.x, _pStartPosExit.y, oSpriteHelp,s_oStage);
        _oButHelp.addEventListener(ON_MOUSE_UP, this._showHelp, this);
        
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y + iNewY);
        }
        if (_fRequestFullScreen && screenfull.isEnabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX,_pStartPosFullscreen.y + iNewY);
        }
        _oFillTime.y = 65 + iNewY;
        _oFillTime.x = 85 + iNewX;
        _oFillBox.y = 60 + iNewY;
        _oFillBox.x = 80 + iNewX;
        
       _oTimeIcon.x = 40 + iNewX;
       _oTimeIcon.y = 45 + iNewY;
        
        _oTextScore.setX(460 + iNewX);
        _oTextScore.setY(45 + iNewY);
        _oTextScoreOutline.setX(460 + iNewX);
        _oTextScoreOutline.setY(45 + iNewY);
        
        _oTextBest.setX(460 + iNewX);
        _oTextBest.setY(25 + iNewY);
        _oTextBestOutline.setX(460 + iNewX);
        _oTextBestOutline.setY(25 + iNewY);
        
        _oButExit.setPosition(_pStartPosExit.x - iNewX, _pStartPosExit.y + iNewY);
        _oButHelp.setPosition(_pStartPosHelp.x - iNewX, _pStartPosHelp.y + iNewY);
        if (s_oGame !== null)
        {
            this.refreshGUI();
        }
        _oTopFrame.x = iNewX;
        _oTopFrame.y = iNewY - 40 ;
        _oBottomFrame.x = iNewX;
        _oBottomFrame.y = CANVAS_HEIGHT - 180 - iNewY/5;



    };

   
    
    this.unload = function () {
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
            _oButFullscreen.unload();
        }

        _oButExit.unload();
        s_oInterface = null;
    };
    
    this.clockAnim = function ()
    {
       if (_oTween === null)
       {
           _oTween = new createjs.Tween.get(_oTimeIcon).to({rotation: -15}, 300).to({rotation: 15}, 300).call(function(){_oTween = null});
       }
    }
    this._onExit = function () {
        new CAreYouSurePanel();
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
   
   this.refreshGUI = function () {
       if (_oFillMask.scaleX > 0){
           _oFillMask.graphics.clear();
           _oFillMask.graphics.beginFill("rgba(255,255,255,1)").drawRect(_oFillTime.x, _oFillBox.y - 50, _oFillBox.getBounds().width*s_oGame.getTime() / (GAME_TIME*1000)  , _oFillBox.getBounds().height*2);
       }
       
       _oTextScore.refreshText(TEXT_SCORE+": " + s_oGame.getScore());
       _oTextScoreOutline.refreshText(TEXT_SCORE+": " + s_oGame.getScore());
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
   
   this._showHelp = function ()
   {
       s_oGame.showHelpPanel();
   };
    s_oInterface = this;

    this._init();

    return this;
}

var s_oInterface = null;