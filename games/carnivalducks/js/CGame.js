function CGame(oData) {

    var _aRails;
    var _oCourtainManager;
    var _oInterface;
    var _iTime;
    var _iScore;
    var _bPause;
    var _oShakeManager;
    var _oData;
    var _oEndPanel;
    var _oHelpPanel;
    var _oEndGameSound;
    this._init = function (oData){
        s_oGame = this;
        if (oData !== undefined)
        {
            if (oData.rail_speeds !== undefined)
            {
                RAILS_SPEEDS = oData.rail_speeds;
            }
            if (oData.game_time !== undefined)
            {
                GAME_TIME = oData.game_time;
            }
            if (oData.rail_speed_increment_max !== undefined)
            {
                SPEED_INCREMENT_MAX = oData.rail_speed_increment_max;
            }
     if (oData.duck_type_occurences !== undefined)
            {
                if (oData.duck_type_occurences.length !== DUCK_SCORE.length)
                {
                    OCCURENCES = oData.duck_type_occurences;
                    _oData = oData;
                }
            }
        }
        var oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oGameContainer = new createjs.Container();
        s_oGameContainer.addChild(oBg);
        s_oStage.addChild(s_oGameContainer);
        _aRails = new Array();
        var y = 330;
        var scale = 0.7;

        setVolume("soundtrack",SOUNDTRACK_VOLUME_IN_GAME);
        
        for (var i = 0; i < 3; i++)
        {
            if (i === 1)
                _aRails.push(new CVerticalRail(CANVAS_WIDTH - 300, CANVAS_HEIGHT - 200, -3));
            if (i === 2)
                _aRails.push(new CWheel(2, true))
            var oRail = new CRail(RAILS_SPEEDS[i], 0, y, 6, scale);
            _aRails.push(oRail);
            scale += 0.1;
            y += 90;
        }

        _iTime = GAME_TIME * 1000; //We need the time in milliseconds     
        _iScore = 0;

        _oCourtainManager = new CCourtain();

        _oInterface = new CInterface();
        _bPause = true;
        _oCourtainManager.courtainOut();
        _bPause = true;
        _oShakeManager = new CShake(s_oGameContainer, 500, 3 ,4);
        _oEndPanel = new CEndPanel();
     
        _oHelpPanel = new CHelpPanel();
        _oEndGameSound = null;
    };




    this.unload = function ()
    {
        _oCourtainManager.unload()
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oGameContainer = null;

        s_oGame = null;
    };


    this.togglePause = function (bool)
    {

        if (bool !== undefined && bool !== null)
        {
            _bPause = bool;
        } else
        {
            _bPause = !_bPause;
        }
        if (_bPause)
        {

            if (_oEndGameSound !== null)
                setVolume("time_out", 0);
            createjs.Tween.pauseAllTweens();
        } else{

            if (_oEndGameSound !== null)
                setVolume("time_out", 1);
            createjs.Tween.resumeAllTweens();
        }




    };

    this.restart = function ()
    {
        this.unload();
        this._init(_oData);
    };
   
    this.onExit = function ()
    {

        s_oGame.unload();
        s_oMain.gotoMenu();

        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad");
    };

    this.getTime = function ()
    {
        return _iTime;
    };
    this.increaseScore = function (score)
    {
        if (score <= 0)
        {
        _oShakeManager.tremble();
        }
        _iScore += score;
        
    };
    
    this.increaseTime = function (time)
    {
        _iTime += time;
    };
    
    this.getScore = function (){
        
        return _iScore;
    };
    
    this.getBestScore = function ()
    {
        if (getItem(SCORE_ITEM_NAME) !== null && getItem(SCORE_ITEM_NAME) !== undefined)
        {
            return getItem(SCORE_ITEM_NAME);
        }
        return 0;
    };

    this.showEndPanel = function ()
    {
        _oEndPanel.show();
    };
    this.showHelpPanel = function (bFromCourtain)
    {
        if (bFromCourtain !== null && bFromCourtain !== undefined)
        {
            if (s_bFirstTime === true) {
                _oHelpPanel.show();
                s_bFirstTime = false;
                return;
            }
            s_oGame.togglePause();
            return;
        }
        _oHelpPanel.show();
    }
    
    this.bestScoreBeated = function () {
        
         if (s_iBestScore < _iScore){
            s_iBestScore = _iScore;
            setVolume("soundtrack",0);

            playSound("best_score",1,false);
            saveItem(SCORE_ITEM_NAME, _iScore);
         }else{
             playSound("game_over",1,false); 
        }
    };
    
    this.update = function ()
    {
        if (_iScore <= 0)
            _iScore = 0;
        if (!_bPause)
        {
            if (_iTime > 0)
            {
                _iTime -= s_iTimeElaps;
                if (_iTime <= ((GAME_TIME * 20) / 100) * 1000)
                {
                    _oInterface.clockAnim();
                }
                _oInterface.refreshGUI();
                //Update the Rails
                for (var i = 0; i < _aRails.length; i++) {
                    _aRails[i].update();
                }

            } else{

                if (_oEndGameSound === null){
                    _oEndGameSound = playSound("time_out",1,false);
                    
                    

                    $(s_oMain).trigger("save_score", _iScore);
                }
               
                

                _oCourtainManager.courtainIn();
            }
        }
    };

    this._init(oData);
}
var s_oGame;
var s_oGameContainer;
