//THIS CLASS MANAGES THE REEL COLUMN (WITH 3 SYMBOLS)
function CReelColumn(iIndex,iXPos,iYPos,iDelay,aSymbols,oAttachSymbols,oAttachWinFrames){
    var _bUpdate;
    var _bReadyToStop;
    var _bContainsFinalSymbols;
    var _iIndex;
    var _iCol;
    var _iDelay;
    var _iContDelay;
    var _iCurState;
    var _iCurIndexWithFrame;
    var _iCntFrames;
    var _iMaxFrames;
    var _iStartY;
    var _iCurStartY;
    var _iFinalY;
    var _aCbCompleted;
    var _aCbOwner;
    var _aSymbols;
    var _aSymbolValues;
    var _aSymbolHighlightAndFrame;
    var _oWinFrame = null;
    var _oSymbolHighlight;
    var _oContainer;
    var _oAttachSymbols;
    var _oAttachWinFrames;
    
    //INITIALIZE THE SYMBOL SPRITES AND WIN FRAMES
    this._init = function(iIndex,iXPos,iYPos,iDelay,aSymbols,oAttachSymbols,oAttachWinFrames){
        _bUpdate = false;
        _bReadyToStop = false;
        _bContainsFinalSymbols = false;
        _iContDelay = 0;
        _iIndex = iIndex;
        _iDelay = iDelay;
        _iCurIndexWithFrame = -1;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        if(_iIndex < NUM_REELS){
            _iCol = _iIndex;
        }else{
            _iCol = _iIndex - NUM_REELS;
        }
        
        _iCntFrames = 0;
        _iMaxFrames = MAX_FRAMES_REEL_EASE;
        _iCurState = REEL_STATE_START;
        _iCurStartY = _iStartY = iYPos;
        _iFinalY = _iCurStartY + ( (SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS) * NUM_ROWS);

        _oAttachSymbols = oAttachSymbols;
        _oAttachWinFrames = oAttachWinFrames;
        this.initContainer(iXPos,iYPos,aSymbols);
        
        _aSymbolHighlightAndFrame = new Array();
    };
    
    this.initContainer = function(iXPos,iYPos,aSymbols){
        
        _oContainer = new createjs.Container();
        _oContainer.x = iXPos;
        _oContainer.y = iYPos;
        
        
        
        var iX = 0;
        var iY = 0;
        _aSymbols = new Array();
        _aSymbolValues = new Array();

        for(var i=0;i<NUM_ROWS;i++){
            var iSymbol = aSymbols[i];

            var oSymbolData = new createjs.Sprite(s_aSymbolData[aSymbols[i]]);
            oSymbolData.x = iX;
            oSymbolData.y = iY; 
            _oContainer.addChild(oSymbolData);
            _aSymbols[i] = oSymbolData;
            _aSymbolValues[i] = iSymbol;

            iY += SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS;
        }

        _oAttachSymbols.addChild(_oContainer);
    };
    
    this.unload = function(){
        _oAttachSymbols.removeChild(_oContainer);
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.setMask = function(oMask){
        _oContainer.mask = oMask;
    };
    
    this.showDark = function(bVal){
        
    };
    
    //RESET SYMBOLS
    this.activate = function(){
        _iCurStartY = _oContainer.y;
        _iFinalY = _iCurStartY + ((SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS) * NUM_ROWS);
        
        _bUpdate = true;
    };
    
    //SET THE SYMBOL VALUE FOR EACH SPRITE IN REEL
    this.setSymbol = function(aSymbols){
        //SHOW BLUR EFFCT
        _oContainer.removeAllChildren();

        var iX = 0;
        var iY = 0;
        
        //console.log("sym:"+aSymbols)
        
        for(var i=0;i<aSymbols.length;i++){
            var oSymbolData = new createjs.Sprite(s_aSymbolData[aSymbols[i]]);
            oSymbolData.x = iX;
            oSymbolData.y = iY;
            oSymbolData.gotoAndStop("static");
            oSymbolData.scaleX =  oSymbolData.scaleY = SCALE_SYMBOL;
            
            _oContainer.addChild(oSymbolData);

            _aSymbols[i] = oSymbolData;
            _aSymbolValues[i] = aSymbols[i];
            
            if(_iCurState === REEL_STATE_MOVING){
                _aSymbols[i].gotoAndStop("blur");
            }
            
            iY += SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS;
        }
    };
    
    this.refreshPos = function(iXPos,iYPos){
        _iCntFrames = 0;
        _iMaxFrames = MAX_FRAMES_REEL_EASE;
        _iStartY = _iCurStartY = iYPos;
        _iFinalY = _iCurStartY + ( (SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS) * NUM_ROWS);

        _oContainer.x = iXPos;
        _oContainer.y = iYPos;

        var iX = 0;
        var iY = 0;
        for(var i=0;i<aSymbols.length;i++){
            _aSymbols[i].x = iX;
            _aSymbols[i].y = iY;
            _aSymbols[i].scaleX = _aSymbols[i].scaleY = SCALE_SYMBOL;
            
            iY += SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS;
        }

        if(_oWinFrame !== null){
            
            _oWinFrame.x = _oContainer.x + _aSymbols[_iCurIndexWithFrame].x - (SCALE_SYMBOL);
            _oWinFrame.y = _oContainer.y + _aSymbols[_iCurIndexWithFrame].y - (SCALE_SYMBOL)/* + OFFSET_BLUR_Y*/;
            _oWinFrame.scaleX = _oWinFrame.scaleY = SCALE_SYMBOL;
            
            _oSymbolHighlight.x = _oContainer.x + _aSymbols[_iCurIndexWithFrame].x;
            _oSymbolHighlight.y = _oContainer.y + _aSymbols[_iCurIndexWithFrame].y;
            _oSymbolHighlight.scaleX = _oSymbolHighlight.scaleY = SCALE_SYMBOL;
        }
        
        for(var i=0; i<_aSymbolHighlightAndFrame.length; i++){
            _aSymbolHighlightAndFrame[i].highlight.x = _oContainer.x + _aSymbols[_aSymbolHighlightAndFrame[i].index].x;
            _aSymbolHighlightAndFrame[i].highlight.y = _oContainer.y + _aSymbols[_aSymbolHighlightAndFrame[i].index].y;
            
            _aSymbolHighlightAndFrame[i].winframe.x = _oContainer.x + _aSymbols[_aSymbolHighlightAndFrame[i].index].x - (SCALE_SYMBOL);
            _aSymbolHighlightAndFrame[i].winframe.y = _oContainer.y + _aSymbols[_aSymbolHighlightAndFrame[i].index].y - (SCALE_SYMBOL);            
        }
        
    };
    
    //CALLED WHEN PLAYER CLICK STOP BUTTON DURING SPIN
    this.forceStop = function(aSymbols,iYPos){
        if(aSymbols !== null){
            this.setSymbol(aSymbols);
        }
        
        for(var i=0; i<_aSymbols.length; i++){
            _aSymbols[i].gotoAndStop("static");
        };
        
        _oContainer.y = iYPos;
        _bUpdate = false;
        _iCntFrames = 0;
        _iMaxFrames = MAX_FRAMES_REEL_EASE;
        _iCurState = REEL_STATE_START;
        _iContDelay = 0;
        _bReadyToStop = false;
        _bContainsFinalSymbols = false;
    };
    
    //HIGHLIGHT SYMBOL WHEN IS INVOLVED IN WINNING COMBO
    this.highlightSymbol = function(iIndex){
        _oSymbolHighlight = new createjs.Sprite(s_aSymbolData[_aSymbolValues[iIndex]]);
        _oSymbolHighlight.gotoAndStop("highlight");
        _oSymbolHighlight.x = _oContainer.x + _aSymbols[iIndex].x;
        _oSymbolHighlight.y = _oContainer.y + _aSymbols[iIndex].y;
        _oSymbolHighlight.scaleX = _oSymbolHighlight.scaleY = SCALE_SYMBOL;
        _oAttachWinFrames.addChild(_oSymbolHighlight);

        _oWinFrame = new createjs.Bitmap(s_oSpriteLibrary.getSprite("frame_win"));
        _oWinFrame.x = _oContainer.x + _aSymbols[iIndex].x - (SCALE_SYMBOL);
        _oWinFrame.y = _oContainer.y + _aSymbols[iIndex].y - (SCALE_SYMBOL)/* + OFFSET_BLUR_Y*/;

        _oWinFrame.scaleX = _oWinFrame.scaleY = SCALE_SYMBOL;
        _oAttachWinFrames.addChild(_oWinFrame);
        
        _iCurIndexWithFrame = iIndex;
        
        _aSymbolHighlightAndFrame.push({highlight: _oSymbolHighlight, winframe: _oWinFrame, index: _iCurIndexWithFrame});
    };
    
    this.removeHighlight = function(){
        for(var i=0; i<_aSymbolHighlightAndFrame.length; i++){
            _oAttachWinFrames.removeChild(_aSymbolHighlightAndFrame[i].highlight);
            _oAttachWinFrames.removeChild(_aSymbolHighlightAndFrame[i].winframe);
        }
        _aSymbolHighlightAndFrame = new Array();
    };
    
    this.showSymbol = function(iRow){
        _aSymbols[iRow].visible = true;
        if(_oWinFrame !== null){
            _oAttachWinFrames.removeChild(_oWinFrame);
            _oWinFrame = null;
            _oAttachWinFrames.removeChild(_oSymbolHighlight);
            _oSymbolHighlight = null;
            _iCurIndexWithFrame = -1;
        }
        _aSymbolHighlightAndFrame = new Array();
    };
    
    this.hideSymbol = function(iRow){        
        _aSymbols[iRow].visible = false;
    };
    
    //RESET Y POSITION OF THE REEL
    this.restart = function(aSymbols,bReadyToStop) {
        _oContainer.y = _iCurStartY = REEL_START_Y;

        _iFinalY = _iCurStartY + ((SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS) * NUM_ROWS);

        //console.trace("rest:"+aSymbols);

        this.setSymbol(aSymbols);

        _bReadyToStop = bReadyToStop;
        if (_bReadyToStop) {
            _iCntFrames = 0;
            _iMaxFrames = MAX_FRAMES_REEL_EASE;
            _iCurState = REEL_STATE_STOP;

            _bContainsFinalSymbols = true; 
            
            //REMOVE BLUR EFFECT
            for(var i=0; i< _aSymbols.length; i++){
               _aSymbols[i].gotoAndStop("static");
            } 
        }
    };
    
	//SET FLAG STOP TO TRUE
    this.setReadyToStop = function() {
        _iCntFrames = 0;
        _iMaxFrames = MAX_FRAMES_REEL_EASE;
        _iCurState = REEL_STATE_STOP;               
    };
    
    this.isReadyToStop = function(){
        return _bReadyToStop;
    };
    
    this.getValue = function(iRow){
        return _aSymbolValues[iRow];
    };
    
    this.getY = function(){
        return _oContainer.y;
    };
    
    this.isCurrentlyVisible = function(){
        return (_oContainer.y >= _iFinalY )?false:true;
    };
    
    this.getPosBottomCenter = function(iRow){
        var iX = _oContainer.x + (SYMBOL_WIDTH/2);
        var iY = _iStartY + (SYMBOL_HEIGHT * (iRow+1));
        return {x:iX,y:iY};
    };
    
    this.getPosBottomLeft = function(iRow){
        var iX = _oContainer.x;
        var iY = _iStartY + (SYMBOL_HEIGHT * (iRow+1));
        return {x:iX,y:iY};
    };
    
    this.getPosUpLeft = function(iRow){
        var iX = _oContainer.x;
        var iY = _oContainer.y + (SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS) * iRow;
        return {x:iX,y:iY};
    };
    
    this.getPosUpCenter = function(iRow){
        var iX = _oContainer.x + (SYMBOL_WIDTH/2);
        var iY = _iStartY + (SYMBOL_HEIGHT * iRow);
        return {x:iX,y:iY};
    };
    
    this.getPosCenterLeft = function(iRow){
        var iX = _oContainer.x;
        var iY = _iStartY + (SYMBOL_HEIGHT * iRow) + (SYMBOL_HEIGHT/2);
        return {x:iX,y:iY};
    };
    
    this.getPosCenter = function(iRow){
        var iX = _oContainer.x + (SYMBOL_WIDTH/2);
        var iY = _iStartY + (SYMBOL_HEIGHT * iRow) + (SYMBOL_HEIGHT/2);
        return {x:iX,y:iY};
    };
    
	//UPDATE FUNCTION WHEN REEL STARTS
    this._updateStart = function(){ 
        _iCntFrames++;   
        var iNewMaxFrames = _iMaxFrames*4;
        if ( _iCntFrames > iNewMaxFrames ){
            _iCntFrames = 0;
            _iCurState++;
            _iCurStartY = _oContainer.y;
            _iFinalY = _iCurStartY + ((SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS) * NUM_ROWS);
            for(var i=0; i< _aSymbols.length; i++){
                _aSymbols[i].gotoAndStop("blur");
            }
        }
        
        var fLerpY = s_oTweenController.easeInBack( _iCntFrames, 0 ,1, iNewMaxFrames);

        var iValue = s_oTweenController.tweenValue( _iCurStartY, _iFinalY, fLerpY);
        _oContainer.y = iValue;

    };
    
	//UPDATE FUNCTION WHEN REEL IS MOVING
    this._updateMoving = function(){
        _iCntFrames++;
        if ( _iCntFrames > _iMaxFrames ){
            _iCntFrames = 0;
            _iCurStartY = _oContainer.y;
            
            _iFinalY = _iCurStartY + ( (SYMBOL_HEIGHT + SPACE_HEIGHT_BETWEEN_SYMBOLS)* NUM_ROWS);

        }
        
        var fLerpY = s_oTweenController.easeLinear( _iCntFrames, 0 ,1, _iMaxFrames);
        var iValue = s_oTweenController.tweenValue( _iCurStartY, _iFinalY, fLerpY);
        _oContainer.y = iValue;
    };
    
	//UPDATE FUNCTION WHEN REEL IS STOPPING
    this._updateStopping = function(){
        _iCntFrames++;
        
        if ( _iCntFrames > _iMaxFrames ){
            _bUpdate = false;
            _iCntFrames = 0;
            _iMaxFrames = MAX_FRAMES_REEL_EASE;
            _iCurState = REEL_STATE_START;
            _iContDelay = 0;
            _bReadyToStop = false;

            if(_bContainsFinalSymbols){
                _bContainsFinalSymbols = false;
                _oContainer.y = REEL_OFFSET_Y;

            }else{
                for(var i=0; i< _aSymbols.length; i++){
                    _aSymbols[i].gotoAndStop("static");
                 } 
            }

            if(_aCbCompleted[ON_REEL_STOP]){
                _aCbCompleted[ON_REEL_STOP].call(_aCbOwner[ON_REEL_STOP], "");
            }
            
        }else{
            _bReadyToStop = true;

            var fLerpY = s_oTweenController.easeOutBack( _iCntFrames, 0 ,1, _iMaxFrames);
            var iValue = s_oTweenController.tweenValue( _iCurStartY, _iFinalY, fLerpY);
            _oContainer.y = iValue;
        }
        
    };

    this.update = function() {
        if (_bUpdate === false) {
            return;
        }
        
        _iContDelay++;

	if (_iContDelay > _iDelay) {
            
            if(_bReadyToStop === false && (_oContainer.y > REEL_ARRIVAL_Y )){
                if(_aCbCompleted[ON_REEL_ARRIVED]){
                    _aCbCompleted[ON_REEL_ARRIVED].call(_aCbOwner[ON_REEL_ARRIVED], _iIndex, _iCol);
                }
            }
            
            switch(_iCurState) {
                case REEL_STATE_START: {
                    this._updateStart();
                    break;
                }
                case REEL_STATE_MOVING: {
                    this._updateMoving();
                    break;
                }
                case REEL_STATE_STOP: {
                    this._updateStopping();
                    break;
                }
            }
        }
    };
    
    this._init(iIndex,iXPos,iYPos,iDelay,aSymbols,oAttachSymbols,oAttachWinFrames);
    
}