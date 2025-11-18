function CBallsPool(oParentContainer){
    var _iCurBallSelected;
    
    var _aBallsPool;
    var _aBallsSprites;

    var _oContainer;
    
    this._init = function(oParentContainer){
        _oContainer = new createjs.Container();
        oParentContainer.addChild(_oContainer);
        
        _iCurBallSelected = 0;
        _aBallsPool = new Array();
        for(var i=0; i<BALL_POOL_DIM; i++){
            //var iRandX = 200 + 300*Math.random();
            //var iRandY = 400 + 300*Math.random();
            var iIndex = i;
            //_aBallsPool[i] = s_oObjectBuilder.addBall(BALL_RADIUS, iRandX, iRandY, 0.1,0.7,0,iIndex);
            _aBallsPool[i] = s_oObjectBuilder.addBall(BALL_RADIUS, BALL_STARTPOS_GAME.x, BALL_STARTPOS_GAME.y, 0.1,0.7,0,iIndex);
            _aBallsPool[i].SetActive(false);
            //_aBallsPool[i].GetFixtureList().SetSensor(true);
            //////CONSIDER TO SET SLEEP TRUE IN CObjectBuilder
        }

        _aBallsSprites = new Array();
        var oSprite = s_oSpriteLibrary.getSprite('ball');
        for(var i=0; i<BALL_POOL_DIM; i++){
            var oBallSprite = createBitmap(oSprite);
            oBallSprite.regX = oSprite.width/2;
            oBallSprite.regY = oSprite.height/2;
            _oContainer.addChild(oBallSprite);
            
            _aBallsSprites[i] = oBallSprite;
        }
        
        var oSprite = s_oSpriteLibrary.getSprite('ear_mask');
        var oEarMask = createBitmap(oSprite);
        oEarMask.regX = oSprite.width/2;
        oEarMask.regY = oSprite.height/2;
        oEarMask.x = BALL_STARTPOS_GAME.x+5;
        oEarMask.y = BALL_STARTPOS_GAME.y-2;
        _oContainer.addChild(oEarMask);
        
    };
    
    this.unload = function(){
        oParentContainer.removeChild(_oContainer);
    };
    
    this.resetBall = function(iBallIndex){
        var oBall = _aBallsPool[iBallIndex];//_aBallsPool[iBallIndex];
        ////IN A COLLISION YOU CAN'T USE SetActive BECAUSE PHYSICS IS STILL PROCESSING. 
        ////USE disableBody METHOD OR ALTERNATIVELY, YOU CAN USE A SETTIMEOUT
        _aBallsSprites[iBallIndex].visible = false;
        s_oPhysicsController.disableBody(oBall, BALL_STARTPOS_GAME);
    };
    
    this.setCurBallVisible = function(){
        _aBallsSprites[_iCurBallSelected].visible = true;
        this._updateSprite(_iCurBallSelected)
    };
    
    this.setCurBallInForeground = function(){
        var iCurBall = _iCurBallSelected;
        setTimeout(function(){
            var iIndex = _oContainer.numChildren-1;
            _oContainer.setChildIndex(_aBallsSprites[iCurBall], iIndex);
        },100);
    };
    
    /*
    this._selectNextBall = function(){
        _iCurBallSelected++;
        if(_iCurBallSelected>=_aBallsPool.length){
            _iCurBallSelected = 0;
        }
    };
    */
    this.prepareNextBall = function(){
        this.setNextBall();
        this.setCurBallVisible();
        
        _oContainer.setChildIndex(_aBallsSprites[_iCurBallSelected], 0);
        
        _aBallsSprites[_iCurBallSelected].x = BALL_STARTPOS_GAME.x;
        _aBallsSprites[_iCurBallSelected].y = BALL_STARTPOS_GAME.y+10;
        
        var iNewY =  BALL_STARTPOS_GAME.y;

        createjs.Tween.get(_aBallsSprites[_iCurBallSelected]).to({y: iNewY}, BALL_SPAWN_TIMER);
    };
   
    this.setNextBall = function(){
        var iNextBall = _iCurBallSelected+1;
        
        if(iNextBall>=_aBallsPool.length){
            iNextBall = 0;
        }
        
        if(_aBallsPool[iNextBall].IsActive()){
            //IF THERE ARE NO AVAILABLE (-1), THEN GET JUST THE NEXT NUMBER
            var iAvailableBall = this._findFirstAvailableBall();
            if(iAvailableBall !== -1){
                iNextBall = iAvailableBall;
            }
        };

        _iCurBallSelected = iNextBall;

        //return _aBallsPool[_iCurBallSelected];
    };
    
    this._findFirstAvailableBall = function(){
        for(var i=0; i<BALL_POOL_DIM; i++){
            if(_aBallsPool[i].IsActive() === false){
                return i;
            }
        }
        
        return -1;
    };
    
    this.getCurBall = function(iIndex){
        return _aBallsPool[_iCurBallSelected];
    };
    
    this.getBall = function(iIndex){
        return _aBallsPool[iIndex];
    };
    
    this._isBallExit = function(iIndex){
        return _aBallsPool[iIndex].GetPosition().y > CANVAS_HEIGHT/WORLD_SCALE;
    };
    
    this._updateSprite = function(iIndex){
        _aBallsSprites[iIndex].x = _aBallsPool[iIndex].GetPosition().x*WORLD_SCALE;
        _aBallsSprites[iIndex].y = _aBallsPool[iIndex].GetPosition().y*WORLD_SCALE;
    };
    
    this.update = function(){
        var iCont = 0;
        for(var i=0; i<BALL_POOL_DIM; i++){
            if(_aBallsPool[i].IsActive()){
                iCont++;
                this._updateSprite(i);
                /*
                if(this._isBallExit(i)){

                };*/
                if(this._isBallExit(i)){
                    this.resetBall(i);
                    //trace("ball:"+i+" exit")
                }
            }
        }
        //
    };
    
    this._init(oParentContainer);
}

