function CTextButton(iXPos,iYPos,oSprite,szText,szFont,szColor,iFontSize, bStandard, oParentContainer){
    var _iScale = 1;
    
    var _bDisable;
    var _bBlock = false;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    
    var _oButton;
    var _oText;
    var _oTextBack;
    var _oButtonBg;
    
    this._init =function(iXPos,iYPos,oSprite,szText,szFont,szColor,iFontSize, bStandard, oParentContainer){
        _bDisable = false;
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();

        _oButtonBg = createBitmap( oSprite); 
        _oButtonBg.regX = oSprite.width/2;
        _oButtonBg.regY = oSprite.height/2;

        var iStepShadow = Math.ceil(iFontSize/20);

        _oButton = new createjs.Container();
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        //_oButton.regX = oSprite.width/2;
        //_oButton.regY = oSprite.height/2;        
        _oButton.cursor = "pointer";
        
        var iWidth = oSprite.width-44;

        if(!bStandard){
            iWidth = oSprite.width/2-20;
            var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: oSprite.width/2, height: oSprite.height, regX:(oSprite.width/2)/2, regY:oSprite.height/2}, 
                        animations: {state_true:[0],state_false:[1]}
                   };
                   
            var oSpriteSheet = new createjs.SpriteSheet(oData);         
            _oButtonBg = createSprite(oSpriteSheet, "state_false",(oSprite.width/2)/2,oSprite.height/2,oSprite.width/2,oSprite.height);
            
            _oButton.regX = 0;
            _oButton.regY = 0;
            
        }

        _oButton.addChild(_oButtonBg);

        var iX = 0;
        var iY = -4;
        
        var iHeight = oSprite.height-20;
        _oTextBack = new CTLText(_oButton, 
                    iX-iWidth/2+2, iY-iHeight/2+2, iWidth, iHeight, 
                    iFontSize, "center", "#000", szFont, 1,
                    4, 0,
                    szText,
                    true, true, false,
                    false );
        
        _oText = new CTLText(_oButton, 
                    iX-iWidth/2, iY-iHeight/2, iWidth, iHeight, 
                    iFontSize, "center", szColor, szFont, 1,
                    4, 0,
                    szText,
                    true, true, false,
                    false );

        oParentContainer.addChild(_oButton);

        this._initListener();
    };
    
    this.unload = function(){
       _oButton.removeAllEventListeners();
       
       oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this._initListener = function(){
       _oButton.on("mousedown", this.buttonDown);
       _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.buttonRelease = function(){
        if(_bDisable || _bBlock){
            return;
        }
        
        playSound("click",1,false);
        
        _oButton.scaleX = 1*_iScale;
        _oButton.scaleY = 1*_iScale;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_aParams);
        }
    };
    
    this.buttonDown = function(){
        if(_bDisable || _bBlock){
            return;
        }
        
        _oButton.scaleX = 0.9*_iScale;
        _oButton.scaleY = 0.9*_iScale;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],_aParams);
       }
    };
    
    this.setClickable = function(bVal){
        _bDisable = !bVal;
        
        if(!bVal){
            _oButton.cursor = "arrow";
        }
    };
    
    this.desaturate = function(){
        _oButton.cursor = "default";
        if(!bStandard){
            _oButtonBg.gotoAndStop("state_false");
        }
    };
    
    this.enable = function(){
        _bDisable = false;
        _oButton.cursor = "pointer";
        if(!bStandard){
            _oButtonBg.gotoAndStop("state_true");
        }
    };
    
    this.disable = function(){
        _bDisable = true;
        _oButton.cursor = "default";
        if(!bStandard){
            _oButtonBg.gotoAndStop("state_false");
        }
    };
    
    this.toggle = function(){
        _bDisable = !_bDisable;
        
        if(!bStandard){
            if(_bDisable){
                _oButtonBg.gotoAndStop("state_false");
            }else{
                _oButtonBg.gotoAndStop("state_true");
            }
        }
    }
    
    this.removeShadow = function(){
        _oTextBack.setAlpha(0);
    };
    
    this.setTextPosition = function(iX, iY){
        /*
        var iStepShadow = Math.ceil(iFontSize/20);
        
        _oTextBack.x = iX + iStepShadow;
        _oTextBack.y = iY + iStepShadow;
        _oText.x = iX;
        _oText.y = iY;*/
        
    };
    
    this.setTextX = function(iX){
        _oTextBack.setX(iX+2);
        _oText.setX(iX);
    };
    
    this.setTextY = function(iY){
        _oTextBack.setY(iY+2);
        _oText.setY(iY);
    };
    
    this.setText = function(szText){
        //_oText.setFontSize(iFontSize);
        //_oTextBack.setFontSize(iFontSize);
        
        _oText.refreshText( szText );
        _oTextBack.refreshText( szText );
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButton.x = iXPos;
         _oButton.y = iYPos;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
         _oButton.y = iYPos;
    };
    
    this.getButtonImage = function(){
        return _oButtonBg;
    };

    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    this.block = function(bVal){
        _bBlock = bVal;
    };

    this.setScale = function(iVal){
        _iScale = iVal;
        _oButton.scaleX = iVal;
        _oButton.scaleY = iVal;
    };
    
    this.setScaleX = function(iVal){
        _oButtonBg.scaleX = iVal;
    };
    
    this._init(iXPos,iYPos,oSprite,szText,szFont,szColor,iFontSize, bStandard, oParentContainer);
    
    return this;
    
}
