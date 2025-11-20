function CHelpPanel() {
    var _oBg;

    var _oLabelText;
    var _oLabelText1;
    var _oLabelTextOutline;
    var _oLabelText1Outline;
    var _oHitArea;
    var _oContainer;

    var _oTween;
    
    this._init = function () {
        _oContainer = new createjs.Container();
        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("black").drawRect(0, 10, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oHitArea.alpha = 0;
        _oHitArea.on("mousedown", function (){});
        s_oStage.addChild(_oHitArea);
        s_oStage.addChild(_oContainer);
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        _oContainer.addChild(_oBg);

        _oLabelTextOutline = new CTLText(_oContainer, 
                    250,150, 380, 56, 
                    56, "center", "#000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_HELP,
                    true, true, false,
                    false );
        _oLabelTextOutline.setOutline(4);            
                    
        _oLabelText = new CTLText(_oContainer, 
                    250,150, 380, 56, 
                    56, "center", "#cc0000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_HELP,
                    true, true, false,
                    false );
                    
  
       

        _oLabelText1Outline = new CTLText(_oContainer, 
                    250,260, 380, 56, 
                    56, "center", "#000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_HELP2,
                    true, true, false,
                    false );
        _oLabelText1Outline.setOutline(4);                        
        
         _oLabelText1 = new CTLText(_oContainer, 
                    250,260, 380, 56, 
                    56, "center", "#cc0000", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_HELP2,
                    true, true, false,
                    false );

        
        
        var oData = { images: [s_oSpriteLibrary.getSprite("duck0")],
                      frames: {width:300, height:216, count: 1},
                      animations:{ idle: [0]}
                    };
        var oSheet = new createjs.SpriteSheet(oData);
        var oDuckSprite = createSprite(oSheet, "idle",0,0,300,216);
        oDuckSprite.scaleX = 0.7;
        oDuckSprite.scaleY = 0.7;
        oDuckSprite.x = -40;
        oDuckSprite.y = 70;
        var oData = { images: [s_oSpriteLibrary.getSprite("fish")],
                      frames: {width:300, height:216, count: 1},
                      animations:{ idle: [0]}
                    };
        var oSheet = new createjs.SpriteSheet(oData);
        var oFishSprite = createSprite(oSheet, "idle",0,0,300,216);
        oFishSprite.scaleX = 0.7;
        oFishSprite.scaleY = 0.7;
        oFishSprite.x = 80;
        oFishSprite.y = 70;
        
        
        
        
        var oData = { images: [s_oSpriteLibrary.getSprite("duck4")],
                      frames: {width:300, height:216, count: 1},
                      animations:{ idle: [0]}
                    };
        var oSheet = new createjs.SpriteSheet(oData);
        var oBadDuckSprite = createSprite(oSheet, "idle",0,0,300,216);
        oBadDuckSprite.scaleX = 0.7;
        oBadDuckSprite.scaleY = 0.7;
        oBadDuckSprite.x = -40;
        oBadDuckSprite.y = 180;
        var oData = { images: [s_oSpriteLibrary.getSprite("duck5")],
                      frames: {width:300, height:216, count: 1},
                      animations:{ idle: [0]}
                    };
        var oSheet = new createjs.SpriteSheet(oData);
        var oBadDuck2Sprite = createSprite(oSheet, "idle",0,0,300,216);
        oBadDuck2Sprite.scaleX = 0.7;
        oBadDuck2Sprite.scaleY = 0.7;
        oBadDuck2Sprite.x = 80;
        oBadDuck2Sprite.y = 180;

        

        var skipBut = new CGfxButton(600, 380, s_oSpriteLibrary.getSprite("but_continue"), _oContainer);
        skipBut.addEventListener(ON_MOUSE_DOWN, this.hide, this);


        _oContainer.addChild(oDuckSprite);
        _oContainer.addChild(oFishSprite);
        _oContainer.addChild(oBadDuckSprite);
        _oContainer.addChild(oBadDuck2Sprite);





        _oContainer.x = CANVAS_WIDTH / 2 - _oContainer.getBounds().width / 2;
        _oContainer.y = -_oContainer.getBounds().height;
        
        _oTween = null;

    };

    this.hide = function ()
    {
        if (_oTween === null)
        {
            _oTween = new createjs.Tween.get(_oContainer).to({y: -2000}, 500).call(function () {_oTween = null});
            _oTween.ignoreGlobalPause = true;
        }

       _oHitArea.alpha = 0;
        s_oGame.togglePause();


    }
    this.unload = function ()
    {
    };

    this.show = function ()
    {

        s_oGame.togglePause(true);
       _oTween = new createjs.Tween.get(_oContainer).to({y: CANVAS_HEIGHT / 2 - 200}, 500, createjs.Ease.cubicOut).call(function () {_oTween = null});
       _oTween.ignoreGlobalPause = true;
       var oTween2 = new createjs.Tween.get(_oHitArea).to({alpha: 0.85}, 400);
       oTween2.ignoreGlobalPause = true;

    };



    this._init();
}