function CRail(iSpeed, iX, iY, iDucks, iScale)
{
    var _iSpeed;
    var _oRailContainer;
    var _aDuckAttached;
    var _oSeaSprite;
    var _iDucks;
    var _iMinDistance;
    var _iMaxDistance;
    var _iLastObjIndex;
    var _iDuckOffset;

    var _iSineCounter;
    var _iDirection;
    var _iRespawnPosY = 0;
    var _oTween;

    this._init = function (iSpeed, iX, iY, iDucks, iScale) {
        _iSpeed = iSpeed;
        _iDucks = iDucks;
        _oTween = null;
        _iMinDistance = 300;
        _iMaxDistance = 500;
        var iXPos = 0;
        if (_iSpeed < 0) {
            iXPos = CANVAS_WIDTH
        }
        var iRandDistance = 0;
        _oRailContainer = new createjs.Container();
        _aDuckAttached = new Array();
        for (var i = 0; i < iDucks; i++) {
            if (_iSpeed > 0)
                var oDuck = new CDuck(_oRailContainer, false, this);
            else
                var oDuck = new CDuck(_oRailContainer, true, this);


            oDuck.getSprite().x = iXPos + iRandDistance;
            iXPos = iXPos + iRandDistance;
            iRandDistance = Math.floor(randomFloatBetween(_iMinDistance, _iMaxDistance));
                        oDuck.updateStickPos();

            _aDuckAttached.push(oDuck);

        }
         _oSeaSprite = createBitmap(s_oSpriteLibrary.getSprite("sea"));
        _oSeaSprite.regX = _oSeaSprite.getBounds().width/2;
                _oSeaSprite.x = CANVAS_WIDTH/2 + 200;

        
        if (_iSpeed > 0)
        {
            _iLastObjIndex = 0;
            _iDirection = -1;
        } else
        {
            _iLastObjIndex = _aDuckAttached.length - 1;
            _iDirection = 1;
            _oSeaSprite.scaleX = -1;
        }
       
       
        _oRailContainer.x = iX;
        _oRailContainer.y = iY;

        _oRailContainer.scaleX = iScale;
        _oRailContainer.scaleY = iScale;
        if (s_oGameContainer !== undefined && s_oGameContainer !== null)
        s_oGameContainer.addChild(_oRailContainer);
    else
        s_oStage.addChild(_oRailContainer);

        _oRailContainer.addChild(_oSeaSprite);
        _iSineCounter = 0;
      

    };

    this.updateSpeed = function ()
    {
        var xMax = SPEED_INCREMENT_MAX;
        var xMin = 0;
        var yMax = GAME_TIME;
        var yMin = 1;

        var percent = (s_oGame.getTime() - yMin) / (yMax - yMin);
        var incrementalSpeed = (percent * (xMax - xMin) + xMin) / 1000;
        if (_iSpeed > 0)
        {
            _iSpeed += incrementalSpeed / 100;
        } else
            _iSpeed -= incrementalSpeed / 100;
    };
  
    this.handlePause = function ()
    {
        if (_oTween !== null)
            _oTween.setPaused(!_oTween._paused);
    };
    this.unload = function ()
    {
        _oRailContainer.parent.removeChild(_oRailContainer);
    }
    this.rearrangeDuck = function (oDuck)
    {
        oDuck.getSprite().gotoAndPlay("shuttering"); 

    };

    //USED FOR REPOSITIONING OF DUCKS ATTACHED TO THE CONTAINER
    this.handleDucksPositions = function ()
    {
        for (var i = 0; i < _aDuckAttached.length; i++) {
            var bChangeDuck = false;
            
            if (_aDuckAttached[i].getSprite().x > CANVAS_WIDTH + 500 && _iSpeed > 0) {
                bChangeDuck = true;
            }
            if (_aDuckAttached[i].getSprite().x < -200 && _iSpeed < 0 ) {
                bChangeDuck = true;
            }

            if (bChangeDuck) {
                _aDuckAttached[i].changeType();
                _aDuckAttached[i].getSprite().y = _iRespawnPosY;

                var iRandDistance = Math.floor(randomFloatBetween(_iMinDistance, _iMaxDistance));
                _aDuckAttached[i].getSprite().x = _aDuckAttached[_iLastObjIndex].getSprite().x + (iRandDistance * _iDirection);
                _iLastObjIndex = i;

            }

            if (_iSpeed !== 0) {
                _aDuckAttached[i].getSprite().x += _iSpeed;
                _aDuckAttached[i].updateStickPos();
            }
            _aDuckAttached[i].getSprite().y = _iDuckOffset;
            _iRespawnPosY = _aDuckAttached[i].getSprite().y;


        }
    };

    this.update = function () {
        //SEA ANIMATION
        
        if (_oSeaSprite.x >= CANVAS_WIDTH/2 + 200)
        {
            createjs.Tween.removeTweens(_oSeaSprite);
            _oTween = new createjs.Tween.get(_oSeaSprite).to({x: CANVAS_WIDTH/2 + 150}, randomFloatBetween(1, 2) * 800, createjs.Ease.sineInOut).to({x: CANVAS_WIDTH/2 + 200}, randomFloatBetween(1, 2) * 800, createjs.Ease.sineInOut);
        }

        this.updateSpeed();
        this.handleDucksPositions();

        _iSineCounter += 0.1;
        _iDuckOffset = Math.sin(_iSineCounter) * 20;

    };
    
     this.updateOnMenu = function () {
        //SEA ANIMATION
        
        if (_oSeaSprite.x >= CANVAS_WIDTH/2 + 200)
        {
            createjs.Tween.removeTweens(_oSeaSprite);
            _oTween = new createjs.Tween.get(_oSeaSprite).to({x: CANVAS_WIDTH/2 + 150}, randomFloatBetween(1, 2) * 800).to({x: CANVAS_WIDTH/2 + 200}, randomFloatBetween(1, 2) * 800);
        }

        this.handleDucksPositions();

        _iSineCounter += 0.1;
        _iDuckOffset = Math.sin(_iSineCounter) * 20;

    };
    this._init(iSpeed, iX, iY, iDucks, iScale);

}


