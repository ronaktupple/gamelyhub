function CMenu() {
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oButCredits;
    var _oCreditsPanel = null;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosFullscreen;
    var _oGameLogo;

    var bottom;
    var rail;
    this._init = function () {
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        bottom = createBitmap(s_oSpriteLibrary.getSprite("frame_bottom"));

        bottom.y = CANVAS_HEIGHT - 180;
        if (s_oSoundTrack !== null && s_oSoundTrack !== undefined && s_oSoundTrack.playState === "playFinished")
        {
            s_oSoundTrack.play();

        }
        _oGameLogo = createBitmap(s_oSpriteLibrary.getSprite("logo_menu"));
        _oGameLogo.regX = _oGameLogo.getBounds().width / 2;
        _oGameLogo.x = CANVAS_WIDTH / 2;
        _oGameLogo.y = 100;
        _oGameLogo.rotation = -10;

        rail = new CRail(5, -50, 500, 5, 1);

        s_oStage.addChild(_oGameLogo);
        s_oStage.addChild(bottom);
        var oSpritePlay = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton((CANVAS_WIDTH / 2), (CANVAS_HEIGHT / 2 + 400), oSpritePlay);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosCredits = {x: 10 + oSprite.width / 2, y: (oSprite.height / 2) + 10};
        _oButCredits = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite);
        _oButCredits.addEventListener(ON_MOUSE_UP, this._onCredits, this);


        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - oSprite.width / 4 - 10, y: (oSprite.height / 2) + 10};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x: _pStartPosCredits.x + oSprite.width / 2 + 10, y: _pStartPosCredits.y};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({alpha: 0}, 1000).call(function () {
            s_oStage.removeChild(_oFade);
        });

        if (!s_bStorageAvailable) {
            new CMsgBox(TEXT_ERR_LS, s_oStage);
        } else {
            var iBestScore = getItem("best_score");
            if (iBestScore !== null) {
                s_iBestScore = iBestScore;
            }
        }
        
        setVolume("soundtrack", 1);
        
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.unload = function () {
        _oButPlay.unload();
        _oButPlay = null;
        rail.unload();
        _oButCredits.unload();


        s_oStage.removeAllChildren();
        _oBg = null;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }
        s_oMenu = null;
    };

    this.update = function ()
    {
        if (_oGameLogo.rotation === -10)
        {
            new createjs.Tween.get(_oGameLogo).to({rotation: 10}, 2000, createjs.Ease.sineInOut).to({rotation: -10}, 2000, createjs.Ease.sineInOut);
        }
        if (_oGameLogo.scaleX === 1){
            rail.updateOnMenu();
        }
    };
    this.refreshButtonPos = function (iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y + iNewY);
        }
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }
        _oButPlay.setPosition(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 150);
        _oButCredits.setPosition(_pStartPosCredits.x + iNewX, _pStartPosCredits.y + iNewY);
        _oGameLogo.x = CANVAS_WIDTH / 2;
        _oGameLogo.y = 180;
        
        bottom.x = iNewX;
        bottom.y = CANVAS_HEIGHT - 180 - iNewY / 5;
    };

    this.exitFromCredits = function () {
        _oCreditsPanel = null;
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onCredits = function () {
        _oCreditsPanel = new CCreditsPanel();
    };

    this._onButPlayRelease = function () {
        this.unload();

        s_oMain.gotoGame();
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.isEnabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };

    this._onFullscreenRelease = function () {
        if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    s_oMenu = this;

    this._init();
}

var s_oMenu = null;