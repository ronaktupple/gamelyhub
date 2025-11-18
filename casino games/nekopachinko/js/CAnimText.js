function CAnimText (iScore,x,y,oParentContainer, szColor){
    
    var _oScoreHit;

    this._init = function(iScore,x,y,oParentContainer,szColor){
        _oScoreHit = new createjs.Text("0"," 30px "+PRIMARY_FONT, szColor);
        _oScoreHit.textAlign="center";
	_oScoreHit.textBaseline = "middle";
        
        _oScoreHit.text = iScore;
        _oScoreHit.x=x;
        _oScoreHit.y=y;
        _oScoreHit.alpha = 0;
        oParentContainer.addChild(_oScoreHit);
    };
	
    this.moveUp = function(){
        var oParent = this;
        
        var iNewY = _oScoreHit.y-50;
        createjs.Tween.get(_oScoreHit).to({y:iNewY}, 800, createjs.Ease.sineIn).call(function(){oParent.unload();});
        createjs.Tween.get(_oScoreHit).to({alpha:1}, 400, createjs.Ease.cubicOut).to({alpha:0}, 400, createjs.Ease.cubicIn);
    };

    this.moveUpAndFlash = function(){
        var oParent = this;
        
        _oScoreHit.alpha = 1;
        var iNewY = _oScoreHit.y-16;
        createjs.Tween.get(_oScoreHit).to({alpha:0}, 200).to({alpha:1}, 200).to({alpha:0}, 200).to({alpha:1}, 200).
                                        to({alpha:0}, 200).to({alpha:1}, 200).to({alpha:0}, 200).to({alpha:1}, 200);
        
        createjs.Tween.get(_oScoreHit).to({y:iNewY}, 800, createjs.Ease.sineIn).wait(2000).call(function(){oParent.unload();});
    };

    this.unload = function(){
        oParentContainer.removeChild(_oScoreHit);
    };
	
    this._init(iScore,x,y,oParentContainer,szColor);
    
}