function CVerticalRail (x, y, iShowCount)
{
    var _oRailContainer;
    var _iShowCount;
    var _iCounter;
    var _oDuckAttached;
    
    var _startX;
    var _startY;
    var _bAnimEnded;
    var _bShow;
    var _oTween;
    this.init = function(x, y, iShowCount)
    {
        
        _iShowCount = iShowCount;
        _iCounter = 0;
        _oRailContainer = new createjs.Container();
        _oRailContainer.x = _startX= x;
        _oRailContainer.y = _startY = y;
        s_oGameContainer.addChild(_oRailContainer);
        _bAnimEnded = false;
        _bShow = true;
        _oTween = null;
        _oDuckAttached  = new CFish(_oRailContainer, false, this);
    };
    
    this.update = function ()
    {
        _oDuckAttached.updateStickPos();

        if (_bShow)
        {
            
            if (!_bAnimEnded && createjs.Tween.hasActiveTweens(_oRailContainer) === false)
            {
                
              _oTween =  new createjs.Tween.get(_oRailContainer).to({y: _startY - 300}, 600, createjs.Ease.sineInOut).to({}, 600).to({y: _startY}, 600, createjs.Ease.sineInOut).to({}, 1200).call(this.reset);
            }
           
            if(_bAnimEnded){
                
                createjs.Tween.removeTweens(_oRailContainer);
                _bAnimEnded = false;
                this.updateCounter();

            }
        }
       
    };
    
    this.updateCounter = function ()
    {
        if (_iShowCount > 0)
        {
            _iCounter++;
            if (_iCounter <= _iShowCount)
            {
                _bShow = true;
            } 
            else if (_iCounter > _iShowCount)
            {
                _bShow = false;
            }
        }
        else
            _bShow = true;
      
    };
    this.reset = function ()
    {        
        _bAnimEnded = true;
       _oDuckAttached.changeType();
    };
    this.handlePause = function ()
    {
    };
    
   this.rearrangeDuck = function (oDuck)
    {
        oDuck.getSprite().gotoAndPlay("shuttering"); 
    };
   
    this.init(x, y, iShowCount);
}