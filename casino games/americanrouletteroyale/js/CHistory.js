function CHistory(iX,iY,oParentContainer){
    var _aHistoryRows;
    var _oContainer;
    var _oParentContainer;
    
    this._init = function(iX,iY){
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oParentContainer.addChild(_oContainer);
        
        var oSpriteBg = s_oSpriteLibrary.getSprite("history_bg");
        var oBg = createBitmap(oSpriteBg);
        _oContainer.addChild(oBg);
        
        var oTitle = new CTLText(_oContainer, 
                    2, 5, oSpriteBg.width-9, 12, 
                    12, "center", "#fff", FONT1, 1,
                    0, 0,
                    TEXT_HISTORY,
                    true, true, false,
                    false );

        
        this._initNumExtracted();
    };
    
    this._initNumExtracted = function(){
        _aHistoryRows = new Array();
        
        var iXPos = 5;
        var iYPos = 24;
        for(var i=0;i<ROW_HISTORY;i++){
            var oRow = new CHistoryRow(iXPos,iYPos,_oContainer);
            _aHistoryRows[i] = oRow;
            iYPos += 22;
        }
    };
    
    this.setPosition = function(iX,iY){
        _oContainer.x = iX;
        _oContainer.y = iY;
    };
    
    this.showBlack = function(iIndex,iNumber){
        _aHistoryRows[iIndex].showBlack(iNumber);
    };
    
    this.showRed = function(iIndex,iNumber){
        _aHistoryRows[iIndex].showRed(iNumber);
    };
    
    this.showGreen = function(iIndex,iNumber){
        _aHistoryRows[iIndex].showGreen(iNumber);
    };
    
    
    _oParentContainer = oParentContainer;
    this._init(iX,iY);
}