function CArrowsStart(iX, iY, oParentContainer){
    var _iArrowsCounter;
  
    var _aArrows;
  
    var _oContainer;
    var _oParent;
    
    this._init = function(iX, iY, oParentContainer){
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);
        
        _iArrowsCounter = 0;
        _aArrows = new Array();
        
        var oPos = {x: 0, y: 0};
        
        var oSprite = s_oSpriteLibrary.getSprite('arrow_start');
        var oArrow = new CLightIndicator(oSprite, oPos.x+4, oPos.y, _oContainer,0,0);
        //oArrow.rotate(5);
        _aArrows.unshift(oArrow);
        
        var oSprite = s_oSpriteLibrary.getSprite('arrow_start');
        var oArrow = new CLightIndicator(oSprite, oPos.x - 5, oPos.y + 30, _oContainer,0,0);
        oArrow.rotate(-10);
        _aArrows.unshift(oArrow);
        
        var oSprite = s_oSpriteLibrary.getSprite('arrow_start');
        var oArrow = new CLightIndicator(oSprite, oPos.x - 12, oPos.y + 60, _oContainer,0,0);
        oArrow.rotate(-16);
        _aArrows.unshift(oArrow);
        
        var oSprite = s_oSpriteLibrary.getSprite('arrow_start');
        var oArrow = new CLightIndicator(oSprite, oPos.x - 14, oPos.y + 90, _oContainer,0,0);
        oArrow.rotate(-22);
        _aArrows.unshift(oArrow);
        

        this.startLighting();
    };
    
    this.startLighting = function(){
        _iArrowsCounter = 0;
        for(var i=0; i<_aArrows.length; i++){
            _aArrows[i].slowHighlight(600, i*300, this.endLighting);
        }
    };
    
    this.whilePlayingLighting = function(){
        _iArrowsCounter = 0;
        for(var i=0; i<_aArrows.length; i++){
            _aArrows[i].slowHighlight(300, i*50, this.endLighting2);
        }
    };
    
    this.endLighting2 = function(){
        _iArrowsCounter++;
        if(_iArrowsCounter >= _aArrows.length){
            _oParent.whilePlayingLighting();
        }
    };
    
    this.endLighting = function(){
        _iArrowsCounter++;
        if(_iArrowsCounter >= _aArrows.length){
            _oParent.startLighting();
        }
    };
    
    this.stopAnimLighting = function(){
        for(var i=0; i<_aArrows.length; i++){
            _aArrows[i].slowOff(1000, 0);
        }
    };
    
    
    
    _oParent = this;
    this._init(iX, iY, oParentContainer);
};


