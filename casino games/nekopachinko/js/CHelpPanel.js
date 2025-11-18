function CHelpPanel(oParentContainer){
    var _bExitPanel;
    
    var _aCbCompleted;
    var _aCbOwner;

    var _oFade;
    var _oPanelContainer;
    var _oParent;
    var _oListener;
    var _oListenerFade;
    var _oButContainer;
    var _oPage1Container;
    var _oPage2Container;
    var _oButNext;
    var _oButPrev;

    var _pStartPanelPos;

    this._init = function(oParentContainer){
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oListenerFade = _oFade.on("mousedown",function(){_oParent.hide()});
        oParentContainer.addChild(_oFade);
        
        _oPanelContainer = new createjs.Container();     
        _oListener = _oPanelContainer.on("mousedown",function(){_oParent.hide()});
        oParentContainer.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box_big');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        
        _oButContainer = new createjs.Container();     
        _oButContainer.x = _oPanelContainer.x;
        _oButContainer.y = _oPanelContainer.y;
        oParentContainer.addChild(_oButContainer);
        
        var iX = 200;
        var iY = 400;
        _oButNext = new CGfxButton(iX, iY, s_oSpriteLibrary.getSprite('but_next'), _oButContainer);
        _oButNext.addEventListener(ON_MOUSE_UP, this._onPag2, this);
        
        _oButPrev = new CGfxButton(-iX, iY, s_oSpriteLibrary.getSprite('but_prev'), _oButContainer);
        _oButPrev.addEventListener(ON_MOUSE_UP, this._onPag1, this);

        /////////PAGE1;
        _oPage1Container = new createjs.Container();     
        _oPanelContainer.addChild(_oPage1Container);
        
        var oText1Pos = {x: 0, y: -210};

        var iWidth = 500;
        var iHeight = 100;
        var iTextX = oText1Pos.x;
        var iTextY = oText1Pos.y;
        var oText1 = new CTLText(_oPage1Container, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.2,
                    2, 2,
                    TEXT_HELP1,
                    true, true, true,
                    false );

        var oSprite = s_oSpriteLibrary.getSprite('help_holes');
        var oHoles = createBitmap(oSprite);        
        oHoles.regX = oSprite.width/2;
        oHoles.regY = oSprite.height/2;
        oHoles.y = -90;
        _oPage1Container.addChild(oHoles);
        

        var oText2Pos = {x: 0, y:110};
  
        var iWidth = 500;
        var iHeight = 100;
        var iTextX = oText2Pos.x;
        var iTextY = oText2Pos.y;
        var oText2 = new CTLText(_oPage1Container, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.2,
                    2, 2,
                    TEXT_HELP2,
                    true, true, true,
                    false );
                   
        var iXOffset = 100;
        for(var i=0; i<3; i++){
            var oSymbolData = createSprite(s_aSymbolData[0]);
            oSymbolData.regX = SYMBOL_WIDTH/2;
            oSymbolData.x = -iXOffset+i*iXOffset;
            oSymbolData.y = oText2Pos.y+70; 
            _oPage1Container.addChild(oSymbolData);
        }
        
        
        
        /////////PAGE2;
        _oPage2Container = new createjs.Container();     
        _oPanelContainer.addChild(_oPage2Container);
        
        var oText1Pos = {x: 0, y: -210};

        var iWidth = 500;
        var iHeight = 50;
        var iTextX = oText1Pos.x;
        var iTextY = oText1Pos.y;
        var oText1 = new CTLText(_oPage2Container, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
                    2, 2,
                    TEXT_PAYTABLE,
                    true, true, false,
                    false );

        var iScale = 1;
        var iXOffset = (SYMBOL_WIDTH+2)*iScale;
        var iYOffset = (SYMBOL_HEIGHT+16)*iScale;
        var iStartX = -100;
        var iStartY = 10;
        
        for(var i=0; i<NUM_SYMBOLS; i++){
            
            var iRowY = iStartY -iYOffset+i*iYOffset;

            for(var j=0; j<3; j++){
                var oSymbolData = createSprite(s_aSymbolData[i]);
                oSymbolData.regX = SYMBOL_WIDTH/2;
                oSymbolData.x = iStartX -iXOffset+j*iXOffset;
                oSymbolData.y = iRowY;
                oSymbolData.scaleX = oSymbolData.scaleY = iScale;
                _oPage2Container.addChild(oSymbolData);
            }
            
            var iWidth = 150;
            var iHeight = 50;
            var iTextX = oSymbolData.x + 120;
            var iTextY = iRowY + iYOffset/2;
            var oText1 = new CTLText(_oPage2Container, 
                        iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                        30, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
                        2, 2,
                        formatValue(PAYTABLE[i]),
                        true, true, false,
                        false );
            
        }
        

        this._onPag1();
        
    };

    this.unload = function(){
        oParentContainer.removeChild(_oFade);
        oParentContainer.removeChild(_oPanelContainer);

        _oButNext.unload();
        _oButPrev.unload();

        _oPanelContainer.off("mousedown",_oListener);
        _oFade.off("mousedown",_oListenerFade);
    };

    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };

    this.show = function(){
        _bExitPanel = false;
        
        new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.cubicOut);
        new createjs.Tween.get(_oButContainer).to({y:CANVAS_HEIGHT/2},500, createjs.Ease.cubicOut);
    };

    this.hide = function(){
        if(_bExitPanel){
            return;
        }
        _bExitPanel = true;

        new createjs.Tween.get(_oFade).to({alpha:0},500);
        new createjs.Tween.get(_oButContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn)
        new createjs.Tween.get(_oPanelContainer).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn).call(function(){
            if(_aCbCompleted[ON_EXIT_HELP]){
                _aCbCompleted[ON_EXIT_HELP].call(_aCbOwner[ON_EXIT_HELP]);
            }
        });
    };

    this._onPag1 = function(){
        _oButNext.setVisible(true);
        _oButPrev.setVisible(false);
        
        _oPage1Container.visible = true;
        _oPage2Container.visible = false;
    };

    this._onPag2 = function(){
        _oButNext.setVisible(false);
        _oButPrev.setVisible(true);
        
        _oPage1Container.visible = false;
        _oPage2Container.visible = true;
    };

    

    _oParent=this;
    this._init(oParentContainer);

}
