function CEndPanel(oSpriteBg){
    
    var _oPanelContainer;
    var _oFade;
    var _oButHome;
    var _oButRestart;
    var _oListener;
    
    var _pStartPanelPos;
    
    this._init = function(oSpriteBg){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oListener = _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);

        _oPanelContainer = new createjs.Container();        
        s_oStage.addChild(_oPanelContainer);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};

        var oText1Pos = {x: 0, y: -110};

        var iWidth = 400;
        var iHeight = 60;
        var iTextX = oText1Pos.x;
        var iTextY = oText1Pos.y;
        var oText1 = new CTLText(_oPanelContainer, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    30, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.2,
                    2, 2,
                    TEXT_GAMEOVER,
                    true, true, true,
                    false );

        _oButRestart = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite('but_yes'), _oPanelContainer);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        _oButRestart.pulseAnimation();

        _oButHome = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite('but_no'), _oPanelContainer);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onExit, this);

    };
    
    this.unload = function(){
        _oFade.off("mousedown",_oListener);
        
        s_oStage.removeChild(_oPanelContainer);
        s_oStage.removeChild(_oFade);
    };

    this.show = function(iScore){
        _oButRestart.setClickable(true);
        _oButHome.setClickable(true);
        
	playSound('game_over',1,false);

        createjs.Tween.get(_oFade).to({alpha:0.7},500);
        createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.quartIn);
            
        $(s_oMain).trigger("end_level",1);
    };
    
    this.hide = function(){
        createjs.Tween.get(_oFade).to({alpha:0},500);
        createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn); 
    };
    
    this._onRestart = function(){
        _oButRestart.setClickable(false);
        _oButHome.setClickable(false);
        
        $(s_oMain).trigger("show_interlevel_ad");
        
        s_oGame.onExitFromEndPanel(true);
    };
    
    this._onExit = function(){
        _oButRestart.setClickable(false);
        _oButHome.setClickable(false);
        
        $(s_oMain).trigger("show_interlevel_ad");
        
        s_oGame.onExitFromEndPanel(false);
    };
    
    this._init(oSpriteBg);
    
    return this;
}
