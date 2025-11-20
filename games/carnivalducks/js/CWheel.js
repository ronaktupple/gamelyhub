function CWheel (iSpeed, bOnRail)
{
    var _oSprite;
    var _oWheelContainer;
    var _oMainContainer;
    var _aStartPos;
    var _aDuckAttached;
    var _iSpeed;
    var _bOnRail;
    var _bAnimEnded;
    var _oStick;
    var _startY;
    var _startX;
    this.init = function(iSpeed, bOnRail)
    {
        _oSprite = createBitmap(s_oSpriteLibrary.getSprite("wheel"));
        _oWheelContainer = new createjs.Container();
        _oMainContainer = new createjs.Container();
        _iSpeed = iSpeed;
        _bOnRail = bOnRail;
        _bAnimEnded = false;
        _aDuckAttached = [];
        _oStick = createBitmap(s_oSpriteLibrary.getSprite("stick"));
        _aStartPos = 
                [
            {x: _oSprite.getBounds().width - 40, y: _oSprite.getBounds().height/4 - 600, rotation : 90},
            {x: _oSprite.getBounds().width - 400, y: _oSprite.getBounds().height/4 - 700, rotation: 180},
            {x: _oSprite.getBounds().width - 545, y: _oSprite.getBounds().height/4 - 350, rotation: 270},
            {x: _oSprite.getBounds().width/2 , y: -_oSprite.getBounds().height/2, rotation: 0}


                ];
        for (var i = 0; i < _aStartPos.length; i++) 
        {    
            var oDuck = new CDuck(_oWheelContainer, false, this);
            oDuck.setPos(_aStartPos[i].x, _aStartPos[i].y);
            oDuck.updateStickPos();
            oDuck.rotate(_aStartPos[i].rotation); 
            _aDuckAttached.push(oDuck);
        }
        _oWheelContainer.addChild(_oSprite);

       _oMainContainer.addChild(_oStick);
       _oMainContainer.addChild(_oWheelContainer);
       s_oGameContainer.addChild(_oMainContainer);
       _oMainContainer.regX = _oSprite.getBounds().width/2;
       _oMainContainer.regY = _oSprite.getBounds().height/2;
       _oWheelContainer.regX = _oSprite.getBounds().width/2;
       _oWheelContainer.regY = _oSprite.getBounds().height/2;
       _oMainContainer.y = _startY = CANVAS_HEIGHT + 300 ;
       _oMainContainer.x = _startX = 400;
       _oStick.y = 90;
       _oWheelContainer.scaleY = 0.8;
       _oWheelContainer.scaleX = 0.8;
        _oMainContainer.scaleY = 0.8;
       _oMainContainer.scaleX = 0.8;
    };
    
    this.rearrangeDuck = function (oDuck)
    {
         oDuck.getSprite().gotoAndPlay("shuttering");
    };
    this.handlePause = function()
    {
        
    }
    this.updateDucks = function ()
    {
        for (var i = 0; i < _aDuckAttached.length; i++) {
               
                    _aDuckAttached[i].changeType();
                    _aDuckAttached[i].setPos (_aStartPos[i].x, _aStartPos[i].y);
                    _aDuckAttached[i].updateStickPos();
            }
    }
    this.update = function ()
    {
        
        if (_oWheelContainer.rotation >= 360)
        {
            _oWheelContainer.rotation -= 360;
            
        }
        _oWheelContainer.rotation+= _iSpeed;
        
        if (_bOnRail)
        {
           if (!_bAnimEnded && createjs.Tween.hasActiveTweens(_oMainContainer) === false)
            {
               new createjs.Tween.get(_oMainContainer).to({y: _startY - 600}, 1000, createjs.Ease.sineInOut).to({}, 1000).to({y: _startY}, 1000, createjs.Ease.sineInOut).to({}, 1000).call(function () {_bAnimEnded = true; });
            }
            
            if(_bAnimEnded){
                this.updateDucks();
                createjs.Tween.removeTweens(_oMainContainer);
                _bAnimEnded = false; 
            }
        }
    };
    this.init(iSpeed, bOnRail);
}