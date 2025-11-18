function CMsgBox() {
    var _oFade;
    var _oPanelContainer;
    var _oParent;
    var _oListener;
    var _oTitle;
    
    var _pStartPanelPos;

    this._init = function () {
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
        
        
        var iWidth = oSprite.width-100;
        var iHeight = 200;
        var iX = 0;
        var iY = 0;
        _oTitle = new CTLText(_oPanelContainer, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    34, "center", "#ff0", PRIMARY_FONT, 1.2,
                    2, 2,
                    " ",
                    true, true, true,
                    false );
    };

    this.unload = function () {

        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);

        _oFade.off("mousedown",_oListener);
    };

    this.show = function(szMsg){
        _oTitle.refreshText(szMsg);
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},300, createjs.Ease.quartIn).wait(2000).call(function(){
            _oParent.hide();
        });
    };

    this.hide = function(){
        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        
        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT + oSprite.height/2},500, createjs.Ease.cubicIn);
    };

    _oParent = this;
    this._init();
}

