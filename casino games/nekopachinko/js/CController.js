function CController(iX, iY, oParentContainer){
    var _iCurRotation;
    var _iCurValue;
    var _iStartRotation;
    var _iLimit;
    
    var _vOriginVector;
    
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oContainer;
    var _oController;
    var _oParent;
    
    this._init = function(iX, iY, oParentContainer){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);

        var oSprite = s_oSpriteLibrary.getSprite('controller');
        _oController = createBitmap(oSprite);
        _oController.regX = oSprite.width/2;
        _oController.regY = oSprite.height/2;
        _oContainer.addChild(_oController);
        
        _iStartRotation = 90;
        _iLimit = 80 +_iStartRotation;
        _vOriginVector = new CVector2(0,-1);

        _oContainer.on("mousedown", this._onClick);
        _oContainer.on("pressmove", this._onMove);
        _oContainer.on("pressup", this._onRelease);
        
    };
    
    this.addEventListener= function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this._calculateRotation = function(iX, iY){
        var vNewVector = new CVector2(iX,iY);
        vNewVector.normalize();
        
        var iAngle = angleBetweenVectors(vNewVector, _vOriginVector);
        iAngle = radiansToDegree(iAngle);
        
        if(iX < 0){
            iAngle = -iAngle;
        }
        
        return iAngle;
    };
    
    this._onClick = function(e){
        _iCurRotation = _oParent._calculateRotation(e.localX, e.localY);
    };
    
    this._onMove = function(e){
        var iAngle = _oParent._calculateRotation(e.localX, e.localY);
        
        var iDifferenceAngle = iAngle - _iCurRotation;

        _oController.rotation += iDifferenceAngle;

        if(Math.abs(_oController.rotation) > _iLimit){
            _oController.rotation -= iDifferenceAngle;
        }

        _iCurRotation = _oParent._calculateRotation(e.localX, e.localY);

        var iCurPercent = _oParent.getPercent();

        _iCurValue = iCurPercent/100;

        _oParent.sendData(_iCurValue);

    };
    
    this._onRelease = function(e){
        _oController.rotation = 0;
        _iCurValue = 0;
        
        _oParent.sendData(_iCurValue);
    };
    
    this.getPercent = function(){
        var iPercent = (_oController.rotation + _iLimit)/(2*_iLimit)*100;

        var iValueToStart = (iPercent - 50);
        if(iPercent>=50){
            iPercent = iValueToStart*2;
        }else {
            iPercent = -iValueToStart*2;
        }

        return iPercent;
    };
    
    this.getCurValue = function(){
        return _iCurValue;
    };
    
    this.sendData = function(iValue){      
        if(_aCbCompleted[ON_CONTROLLER]){
            _aCbCompleted[ON_CONTROLLER].call(_aCbOwner[ON_CONTROLLER], iValue);
        }
    };
    
    _oParent = this;
    this._init(iX, iY, oParentContainer);
}

