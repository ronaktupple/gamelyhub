//THIS CLASS STORES ALL INFO ABOUT SYMBOLS
function CSymbolsSettings() {
    
    this._init = function() {
        this._initSymbolAnims();
        this._initSymbolsOccurence();
        this._initSymbolsSpritesheets();
    };

    this._initSymbolAnims = function(){
        //NUMBER OF FRAMES FOR EACH SYMBOL ANIMATION
        s_aSymbolsWinAnim = new Array();
        for(var i=0; i<NUM_SYMBOLS; i++){
            var oSprite = s_oSpriteLibrary.getSprite('symbol_'+i+'_anim');
            var iWidth = oSprite.width/5;
            var iHeight = oSprite.height/4;
            var oData = {   
                            framerate: 30,
                            images: [oSprite], 
                            // width, height & registration point of each sprite
                            frames: {width: iWidth, height: iHeight, regX: 0, regY:0}, 
                            animations: {   win:[0,19] }
                       };

            var oSpriteSheet = new createjs.SpriteSheet(oData);
            
            s_aSymbolsWinAnim.push(oSpriteSheet);
        }
    };
    
    this._initSymbolsOccurence = function(){
        s_aRandSymbols = new Array();
        
        var i;
        //OCCURENCE FOR SYMBOL 1
        for(i=0;i<10;i++){
            s_aRandSymbols.push(0);
        }
        
        
        //OCCURENCE FOR SYMBOL 2
        for(i=0;i<10;i++){
            s_aRandSymbols.push(1);
        }
        
        //OCCURENCE FOR SYMBOL 3
        for(i=0;i<10;i++){
            s_aRandSymbols.push(2);
        }
        
    };

    
    this._initSymbolsSpritesheets = function(){
        s_aSymbolData = new Array();
        for(var i=0; i<NUM_SYMBOLS; i++){
            var oSprite = s_oSpriteLibrary.getSprite("symbol_"+i);
            var oData = {   // image to use
                            images: [oSprite], 
                            // width, height & registration point of each sprite
                            frames: {width: SYMBOL_WIDTH, height: SYMBOL_HEIGHT, regX:0, regY:0}, 
                            animations: {  static: [0], blur:[1] }
            };

            s_aSymbolData[i] = new createjs.SpriteSheet(oData);
        };
    };

    this._init();
}

var s_aSymbolData;
var s_aRandSymbols;
var s_aSymbolsWinAnim;
