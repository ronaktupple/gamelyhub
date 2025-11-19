function CCourtain()
{
    var _oLeftCourtainSprite;
    var _oRightCourtainSprite;
    var _oCourtainContainer;

    var _oHitArea;
    
    
    var _oTweenInL;
    var _oTweenInR;
    var _oTweenOutL;
    var _oTweenOutR;
    this._init = function ()
    {
        
        _oLeftCourtainSprite = createBitmap(s_oSpriteLibrary.getSprite("courtain"));
        _oLeftCourtainSprite.x = 0;
        _oLeftCourtainSprite.y = 50;
        _oRightCourtainSprite = createBitmap(s_oSpriteLibrary.getSprite("courtain"));
        _oRightCourtainSprite.scaleX = -1;
        _oRightCourtainSprite.y = 50;
        _oRightCourtainSprite.x = CANVAS_WIDTH;
        _oRightCourtainSprite.on("mousedown", function () {});
        _oLeftCourtainSprite.on("mousedown", function () {});
        _oCourtainContainer = new createjs.Container();
        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("black").drawRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oHitArea.alpha = 0.01;
        _oHitArea.on("mousedown", function () {});
        _oCourtainContainer.addChild(_oHitArea);
        _oCourtainContainer.addChild(_oLeftCourtainSprite);
        _oCourtainContainer.addChild(_oRightCourtainSprite);
        s_oStage.addChild(_oCourtainContainer);
        _oTweenInL = null;
        _oTweenInR = null;
        _oTweenOutR = null;
        _oTweenOutL = null;

    };
    this.unload = function ()
    {
      s_oStage.removeChild(_oCourtainContainer); 
    };
    this.courtainIn = function ()
    {
        var time = 1000;
       if (_oTweenInL === null && _oTweenInR === null)
       {
                   this.fadeHitArea ();

           _oTweenInL = new createjs.Tween.get(_oLeftCourtainSprite, {ignoreGlobalPause: true}).to({x:0}, time);
           _oTweenInR = new createjs.Tween.get(_oRightCourtainSprite, {ignoreGlobalPause: true}).to({x:CANVAS_WIDTH}, time).call(s_oGame.togglePause).call(s_oGame.bestScoreBeated).call(s_oGame.showEndPanel);
       }
    };
    this.fadeHitArea = function ()
    {
        if (_oHitArea.alpha > 0)
        {
            _oHitArea.alpha = 0;
        }
        else
        {
            _oHitArea.alpha = 0.01;
        }
    };
    this.courtainOut = function ()
    {
       var time = 1000;   
       
       if (_oTweenOutL === null && _oTweenOutR === null)
       {
           _oTweenOutL = new createjs.Tween.get(_oLeftCourtainSprite, {ignoreGlobalPause: true}).to({x: -CANVAS_WIDTH/2 + 60}, time);
           _oTweenOutR = new createjs.Tween.get(_oRightCourtainSprite, {ignoreGlobalPause: true}).to({x:CANVAS_WIDTH + CANVAS_WIDTH/2 - 60}, time).call(this.fadeHitArea).call(s_oGame.showHelpPanel, [true]);
       } 
    };
    this._init();
}

