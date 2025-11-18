function CInterface(oForeGroundContainer){
    var _oAudioToggle;
    var _oButExit;
    var _oButHelp;
    var _oButFullscreen;

    var _oPausePanel;
    var _oGUIExpandible;
    var _oBottomPanel;
    

    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    this._init = function(oForeGroundContainer){                
        var oExitX;        
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.width/2)- 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite,s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        oExitX = _pStartPosExit.x - (oSprite.width) - 10;
        _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 10};
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);   
            
            oExitX = _pStartPosAudio.x - (oSprite.width/2) - 10;
        }

        _oButHelp = new CGfxButton(0, 0, s_oSpriteLibrary.getSprite('but_info'), s_oStage);
        _oButHelp.addEventListener(ON_MOUSE_UP, this._onHelp, this);

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.isEnabled){
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
            _pStartPosFullscreen = {x:oExitX - 10,y:oSprite.height/2+10};
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this);
        }

        _oBottomPanel = new CBottomBar(CANVAS_WIDTH/2, CANVAS_HEIGHT, s_oStage);
        
        _oPausePanel = new CPausePanel(s_oStage);

        var oSprite = s_oSpriteLibrary.getSprite('but_settings');
        _oGUIExpandible = new CGUIExpandible(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oGUIExpandible.addButton(_oButExit);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oGUIExpandible.addButton(_oAudioToggle);
        }
        if (_fRequestFullScreen && screenfull.isEnabled){
            _oGUIExpandible.addButton(_oButFullscreen);
        }

        _oGUIExpandible.addButton(_oButHelp);

        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.unload = function(){
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }        
        
        _oGUIExpandible.unload();
        
        s_oInterface = null;
        
    };

    this.refreshButtonPos = function(iNewX,iNewY){
        _oGUIExpandible.refreshPos(iNewX,iNewY);

        _oBottomPanel.refreshPos();
        
        s_oGame.refreshPos();
    };
    
    this.pause = function(bVal){
        if(bVal){
            _oPausePanel.show()
        }else {
            _oPausePanel.hide()
        }
        
    };    
    
    this.refreshCredits = function(iValue){
        _oBottomPanel.refreshCredits(iValue);
    };

    this.winAnimation = function(iWin){
        _oBottomPanel.winAnim(iWin);
    };

    this.refreshBallRemaining = function(iNumBall){
        _oBottomPanel.refreshBallRemaining(iNumBall);
    };

    this.increaseBallRemaining = function(iNumBall){
        this.refreshBallRemaining(iNumBall);
        _oBottomPanel.ballRemainingIncreaseAnim();
    };
    
    this._onHelp = function(){
        s_oGame.showHelp();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onExit = function(){
        var oAreYouSure = new CAreYouSurePanel(s_oGame.onExit);
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
    
    s_oInterface = this;
    
    this._init(oForeGroundContainer);
    
    return this;
}

var s_oInterface = null;