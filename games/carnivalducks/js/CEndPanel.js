function CEndPanel(iScore){
    var _oBg;
    var _oFade;
    var _oButExit;
    var _oButRestart;
    var _oScoreTextOutline;
    var _oBestScoreTextOutline;
    var _oScoreText;
    var _oBestScoreText;
    var _oThis;

    var _oContainer;
    var _oFadeContainer;

    this._init = function(){
        _oContainer = new createjs.Container();
        _oFadeContainer = new createjs.Container();
        s_oStage.addChild(_oFadeContainer);
        s_oStage.addChild(_oContainer);
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oBg = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        _oFadeContainer.addChild(_oFade);
        _oContainer.addChild(_oBg);


        _oBestScoreTextOutline = new CTLText(_oContainer, 
                    _oContainer.getBounds().width/2-300, 180, 600, 30, 
                    30, "center", "#000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_YOUR_BEST_SCORE+s_iBestScore,
                    true, true, false,
                    false );
        _oBestScoreTextOutline.setOutline(4);
        
        _oBestScoreText = new CTLText(_oContainer, 
                    _oContainer.getBounds().width/2-300, 180, 600, 30, 
                    30, "center", "#d99b01", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_YOUR_BEST_SCORE+s_iBestScore,
                    true, true, false,
                    false );
                    
        _oScoreTextOutline = new CTLText(_oContainer, 
                    _oContainer.getBounds().width/2-300, 120, 600, 44, 
                    44, "center", "#000", PRIMARY_FONT, 1,
                    0, 0,
                    " ",
                    true, true, false,
                    false );
        
        _oScoreTextOutline.setOutline(4);
                
        _oScoreText = new CTLText(_oContainer, 
                    _oContainer.getBounds().width/2-300, 120, 600, 44, 
                    44, "center", "#cc0000", PRIMARY_FONT, 1,
                    0, 0,
                    " ",
                    true, true, false,
                    false );



        _oButExit = new CGfxButton(_oContainer.getBounds().width/2 - 180, 300, s_oSpriteLibrary.getSprite('but_home'), _oContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);


        _oButRestart = new CGfxButton(_oContainer.getBounds().width/2 + 180 ,300, s_oSpriteLibrary.getSprite('but_restart'), _oContainer);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        _oContainer.x = CANVAS_WIDTH/2 - _oContainer.getBounds().width/2;
        _oContainer.y = - _oContainer.getBounds().height;
        _oFadeContainer.on("mousedown", function (){});
    };

    this.unload = function(){
        _oButExit.unload();
        _oButExit = null;

        _oButRestart.unload();
        _oButRestart = null;

        s_oStage.removeChild(_oContainer);
        s_oStage.removeChild(_oFadeContainer);
    };
    this.show = function (){
        new createjs.Tween.get(_oFade).to({alpha: 0.8}, 1000);
        new createjs.Tween.get(_oContainer).to({y: CANVAS_HEIGHT/2 - _oContainer.getBounds().height/2}, 1000, createjs.Ease.quintOut).call(s_oGame.togglePause);
       
       var szScoreText = TEXT_YOUR_SCORE+s_oGame.getScore();
        _oScoreText.refreshText(szScoreText);
        _oScoreTextOutline.refreshText(szScoreText);
        
        
        _oBestScoreText.refreshText(TEXT_YOUR_BEST_SCORE+": "+s_iBestScore);
        _oBestScoreTextOutline.refreshText(TEXT_YOUR_BEST_SCORE+": "+s_iBestScore);
        
        
    };

    this._onExit = function(){
        _oThis.unload();
        s_oGame.onExit();
    };

    this._onRestart = function(){
        _oThis.unload();
        s_oGame.restart();
    };

    _oThis = this;
    this._init(iScore);
}