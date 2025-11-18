var EDGE_FRAME = "edge_frame";
var PIN = "pin";
var BUMPER = "bumper";
var SENSOR_BASKET = "sensor_basket";
var RECOVER_BASKET = "recover_basket";
var SENSOR_BONUS = "sensor_bonus";
var BONUS_FRAME = "bonus_frame";


function CTable(oBackGroundContainer, oForeGroundContainer){
    
    var _iWidth;
    var _iHeight;
    
    var _aCbCompleted;
    var _aCbOwner;
    var _aArrowsBonus;
    var _aArrowsRecover;
    
    var _oTable;
    var _oArrowsStart;
    
    
    this._init = function(oBackGroundContainer, oForeGroundContainer){
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        var oSprite = s_oSpriteLibrary.getSprite('bg_cat');
        _iWidth = oSprite.width;
        _iHeight = oSprite.height; 
        
        _oTable = createBitmap(oSprite);
        _oTable.regX = oSprite.width/2;
        _oTable.regY = oSprite.height/2;
        oBackGroundContainer.addChild(_oTable);

        var oSprite = s_oSpriteLibrary.getSprite('holes_mask_ground');
        var oHolesGround = createBitmap(oSprite);
        oHolesGround.x =  - 66;
        oHolesGround.y = CANVAS_HEIGHT/2-68;
        oHolesGround.regX = oSprite.width/2;
        oHolesGround.regY = oSprite.height;
        oBackGroundContainer.addChild(oHolesGround);

        var oSprite = s_oSpriteLibrary.getSprite('holes_mask');
        var oBottomBg = createBitmap(oSprite);
        
        oBottomBg.y = CANVAS_HEIGHT/2;
        oBottomBg.regX = oSprite.width/2;
        oBottomBg.regY = oSprite.height;
        oForeGroundContainer.addChild(oBottomBg);

        ZOOM_TABLE_SIZE = {w: _iWidth*ZOOM, h: _iHeight*ZOOM};

        _oArrowsStart = new CArrowsStart(BALL_STARTPOS_GAME.x -14,BALL_STARTPOS_GAME.y+36,oBackGroundContainer);

        this._buildTable();
    };

    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };

    this._buildTable = function(){
        var aLayers = TileMaps.levelsettings.layers;

        for(var j=0; j<aLayers.length; j++){
            if(aLayers[j].type === "objectgroup"){
                var aObjects = aLayers[j].objects;
                switch(aLayers[j].name){
                    case EDGE_FRAME:{
                            this._addShapes(aObjects, 0);
                            break;
                    }
                    case PIN:{
                            this._buildPins(aObjects);
                            break;
                    }
                    case SENSOR_BONUS:{
                            this._setBonusSensors(aObjects);
                            break;
                    }
                    case BONUS_FRAME:{
                            this._addShapes(aObjects, GENERAL_RESTITUTION/2);
                            break;
                    }
                    case SENSOR_BASKET:{
                            this._setRecoverSensors(aObjects);
                            break;
                    }
                    case RECOVER_BASKET:{
                            this._addShapes(aObjects, GENERAL_RESTITUTION);
                            break;
                    }
                };
            }
        }
    };

    this._addShapes = function(aShapes, iRestitution){
        for(var i=0; i<aShapes.length; i++){
            var aPoints = this.getAdjustedPoints(aShapes[i].x, aShapes[i].y, aShapes[i].polyline);

            for(var j=0; j<aPoints.length-1; j++){

                var oStartPos = {x: aPoints[j].x, y: aPoints[j].y};
                var oEndPos = {x: aPoints[j+1].x, y: aPoints[j+1].y};

                s_oObjectBuilder.addEdge(oStartPos, oEndPos, 0, 1, GENERAL_FRICTION, iRestitution);
            }
        }
    };

    ///////////////////////PIN BUMPER
    this._buildPins = function(oData){
        for(var i=0; i<oData.length; i++){            
            var oGeometry = oData[i];
            var aPoints = s_oTable.getAdjustedPoints(0, 0, [{x:oGeometry.x, y:oGeometry.y}] );
            var iIndex = i;
            this._addPin(oGeometry.width/2, aPoints[0].x + oGeometry.width/2, aPoints[0].y + oGeometry.width/2, iIndex, oData[i].type);
        }
    };
    
    this._addPin = function(iRad, iX, iY, iIndex, szPinType){
        var oSprite = s_oSpriteLibrary.getSprite('pin');
        var iType = 0;
        var iOffset = 10;
        if(szPinType === "nose"){
            oSprite = s_oSpriteLibrary.getSprite('pin_nose');
            iOffset = 0;
            iType = 1;
        }

        var oPin = new CLightIndicator(oSprite, iX, iY, oForeGroundContainer, 0, iOffset);
        oPin.setSpecialType(iType);

        
        var oUserData = {contacttype: CONTACT_BEGIN, callback: this._onPinCollision, params: oPin};
        var oPhysicPin = s_oObjectBuilder.addStaticCircle(iRad, iX, iY, 0, 0, GENERAL_RESTITUTION, oUserData);

    };
    
    this._onPinCollision = function(oPinLit, oContactInfo){
        oPinLit.litAndslowOff(500, 0);
        
        if(oPinLit.getSpecialType() === 1){
            playSound("ball_on_nose", 1, false);
        }else {
            //////CALCULATE VOLUME PIN SOUND, IN ORDER TO REDUCE NOISY EFFECTS
            var vLinearVelocity = s_oTable._findBallBodyFromCollision(oContactInfo).GetLinearVelocity();
            var iSquareLength = Math.pow(vLinearVelocity.x,2) + Math.pow(vLinearVelocity.y,2);

            var iMaxLengthComputable = 40;
            if(iSquareLength>iMaxLengthComputable){
                iSquareLength = iMaxLengthComputable;
            }

            var iVolume = linearFunction(iSquareLength, 0,iMaxLengthComputable,0,1);
            if(iVolume > 0.2){
                playSound("ball_on_pin", iVolume, false);
            }
        }
    };
    
    ///////////////////////BASKET SENSORS
    this._setRecoverSensors = function(oData){
        var aArrowsOffsetPos = new Array(); 
        aArrowsOffsetPos[0] = {x: 1, y: -65};
        aArrowsOffsetPos[1] = {x: 0, y: -110};
        aArrowsOffsetPos[2] = {x: -44, y: -120};
        aArrowsOffsetPos[3] = {x: -40, y: -110};
        
        _aArrowsRecover = new Array();
        
        for(var i=0; i<oData.length; i++){
            var oGeometry = oData[i];
            var aPoints = s_oTable.getAdjustedPoints(0, 0, [{x:oGeometry.x, y:oGeometry.y}] );
            var iIndex = i;

            
            var oUserData = {contacttype: CONTACT_BEGIN, callback: this._onRecoverSensor, params: iIndex};
            var oSensor = s_oObjectBuilder.addButton(8, 8, aPoints[0].x, aPoints[0].y, 0, 0, 0, 0, oUserData);
            oSensor.GetFixtureList().SetSensor(true);
            
            var oSprite = s_oSpriteLibrary.getSprite('arrow_down_'+i);
            var iX = aPoints[0].x + aArrowsOffsetPos[i].x;
            var iY = aPoints[0].y + aArrowsOffsetPos[i].y;
            var oArrow = new CLightIndicator(oSprite, iX, iY, oBackGroundContainer, 0, 0);
            
            _aArrowsRecover.push(oArrow);
        }
    };

    ///////////////////////ENTERING BONUS SENSORS
    this._setBonusSensors = function(oData){
        var aArrowsOffsetPos = new Array(); 
        aArrowsOffsetPos[0] = {x: -70, y: -44};
        aArrowsOffsetPos[1] = {x: 0, y: -60};
        aArrowsOffsetPos[2] = {x: 70, y: -44};
        
        _aArrowsBonus = new Array();
        
        for(var i=0; i<oData.length; i++){
            var oGeometry = oData[i];
            var aPoints = s_oTable.getAdjustedPoints(0, 0, [{x:oGeometry.x, y:oGeometry.y}] );
            var iIndex = i;
            
            var oUserData = {contacttype: CONTACT_BEGIN, callback: this._onBonusSensor, params: iIndex};
            var oSensor = s_oObjectBuilder.addButton(8, 8, aPoints[0].x, aPoints[0].y, 0, 0, 0, 0, oUserData);
            oSensor.GetFixtureList().SetSensor(true);
            
            var oSprite = s_oSpriteLibrary.getSprite('arrow_top_'+i);
            var iX = aPoints[0].x + aArrowsOffsetPos[i].x;
            var iY = aPoints[0].y + aArrowsOffsetPos[i].y;
            var oArrow = new CLightIndicator(oSprite, iX, iY, oBackGroundContainer, 0, 0);
            
            _aArrowsBonus.push(oArrow);
        }
    };

    this._findBallBodyFromCollision = function(oContactInfo){
        var oInfoA = oContactInfo.GetFixtureA().GetUserData();
        var oInfoB = oContactInfo.GetFixtureB().GetUserData();        
        
        if(oInfoA.hasOwnProperty("index")){
            return oContactInfo.GetFixtureA().GetBody();
        }
        if(oInfoB.hasOwnProperty("index")){
            return oContactInfo.GetFixtureB().GetBody();
        }
    };

    this._findBallIndexInCollision = function(oContactInfo){
        var oInfoA = oContactInfo.GetFixtureA().GetUserData();
        var oInfoB = oContactInfo.GetFixtureB().GetUserData();        
        
        var iIndex;
        if(oInfoA.hasOwnProperty("index")){
            iIndex = oInfoA.index;
        }
        if(oInfoB.hasOwnProperty("index")){
            iIndex = oInfoB.index;
        }
        
        return iIndex;
    };

    this._onRecoverSensor = function(iIndex, oContactInfo){
        _aArrowsRecover[iIndex].flashing();
        
        playSound("ball_in_recover", 1, false);
        
        var iBallIndex = s_oTable._findBallIndexInCollision(oContactInfo);
        
        if(_aCbCompleted[ON_SENSOR_BASKET]){
           _aCbCompleted[ON_SENSOR_BASKET].call(_aCbOwner[ON_SENSOR_BASKET], iBallIndex);
       }
    };

    this._onBonusSensor = function(iIndex, oContactInfo){
        _aArrowsBonus[iIndex].flashing();

        playSound("ball_in_bonus", 1, false);

        var iBallIndex = s_oTable._findBallIndexInCollision(oContactInfo);
        
        if(_aCbCompleted[ON_SENSOR_BONUS]){
           _aCbCompleted[ON_SENSOR_BONUS].call(_aCbOwner[ON_SENSOR_BONUS], iBallIndex);
       }
    };

    this.arrowsLaunchAnimation = function(){
        _oArrowsStart.whilePlayingLighting();
    };

    this.arrowsIdleAnimation = function(){
        _oArrowsStart.startLighting();
    };

    this.getTableSize = function(){
        var oSize = {w: _iWidth, h: _iHeight};
        return oSize;
    };

    this.getAdjustedPoints = function(iStartX, iStartY, aPoints){

        var aNewPoints = new Array();
        for(var i=0; i<aPoints.length; i++){
            
            var iTranslationX = _oTable.x - _oTable.regX;
            var iTranslationY = _oTable.y - _oTable.regY;
            
            var iNewX = iTranslationX + iStartX + aPoints[i].x;
            var iNewY = iTranslationY + iStartY + aPoints[i].y;
            
            aNewPoints[i] = {x: iNewX, y: iNewY};
        }
        
        return aNewPoints;
       
    };
    
    s_oTable = this;
    this._init(oBackGroundContainer, oForeGroundContainer);
}


var s_oTable;