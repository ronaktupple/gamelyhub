function CDuck (oParentContainer, bInverse, oParent)
{
    var _oParentContainer;
    var _oDuckContainer;
    var _oDuckSprite;
    var _iType;
    var _bInverse;
    var _oTextScore;
    var _oTextOutline;
    var _oParent;
    var _iDirection;
    var _oThis = this;
    var _oStick;
    var _aOccurences = [];
    
    this._init = function (oParentContainer, bInverse, oParent)
    {
        _oParent = oParent;
        _oParentContainer = oParentContainer;
        _oDuckContainer = new createjs.Container();
        _oParentContainer.addChild(_oDuckContainer);
        var rand = Math.round(randomFloatBetween(0, 2));
        _bInverse = bInverse;
        _oTextScore = new createjs.Text("+1", "42px "+ PRIMARY_FONT, "#ff0000");
        _oTextOutline = new createjs.Text("+1", "42px "+ PRIMARY_FONT, "#ff0000");
        _oTextOutline.outline = 3;
        _oStick = createBitmap(s_oSpriteLibrary.getSprite("stick"));
        _oDuckContainer.addChild(_oStick);
        this.spawn(rand);
    };
    this.rotate = function (degrees)
    {
        _oDuckContainer.rotation = degrees;
    }
    this.spawn = function (iType)
    {
        _iType = iType;
        var iWidth = 300;
        var iHeight = 216;
        var oData = { images: [s_oSpriteLibrary.getSprite("duck"+iType)],
                      frames: {width:iWidth, height:iHeight,regX:iHeight/2},
                      animations:{ idle: [0],
                                   piece:[8],
                                   shuttering:[1,7, "piece", 0.9]
                                   }
                    };
        var oSheet = new createjs.SpriteSheet(oData);
        //_oDuckSprite = new createjs.Sprite(oSheet, "idle"); 
        _oDuckSprite = createSprite(oSheet, "idle", 30, -82, 130, 120);
        _oDuckContainer.addChild(_oDuckSprite);

       
       _iDirection = 1;
        if (_bInverse)
        {
        _oDuckSprite.scaleX = -1;
        _iDirection = -1;
    }
        _oDuckContainer.y = -120;
        this.updateStickPos();
        _oDuckSprite.on("mousedown", this.onClick);
    };
    this.changeType = function () 
    {
        _aOccurences = [];
        for (var i = 0; i < OCCURENCES.length; i++)
            {
                for (var j = 0; j < OCCURENCES[i]; j++)
                _aOccurences.push(i);
            }
         var rand = Math.round(randomFloatBetween(0, _aOccurences.length-1));
        _oDuckContainer.removeChild(_oDuckSprite);
        this.spawn(_aOccurences[rand]);
    };
    this.setPos = function (x,y)
    {
      _oDuckSprite.x = x;
      _oDuckSprite.y = y;
    };
    this.updateStickPos = function ()
    {
       if (!_bInverse)
       {
        _oStick.x = _oDuckSprite.x + 20;
    }
    else
        _oStick.x = _oDuckSprite.x - 40; 

        _oStick.y = _oDuckSprite.y + _oDuckSprite.getBounds().height/2 + 45;
        

    }
     this.resetText = function ()
    {
        _oTextScore.x = -1000;
        _oTextOutline.x = -1000;
        _oTextScore.y = -1000;
        _oTextOutline.y = -1000;
        _oTextScore.alpha = 1;
        _oTextOutline.alpha = 1;
        s_oStage.removeChild(_oTextScore);
        s_oStage.removeChild(_oTextOutline);

    };
    this.showText = function (e)
    {
        if (DUCK_SCORE[_iType]>0)
        {
            _oTextScore.color = "green";
            _oTextOutline.color = "white";
            _oTextScore.text = "+"+DUCK_SCORE[_iType];
            _oTextOutline.text = "+"+DUCK_SCORE[_iType];

        }
        else
        {
            _oTextScore.color = "red";
            _oTextOutline.color = "white";

        _oTextScore.text = DUCK_SCORE[_iType];
            _oTextOutline.text =DUCK_SCORE[_iType];

            }

        var x = e.stageX / s_iScaleFactor;
        var y = e.stageY / s_iScaleFactor; 
        _oTextScore.x = x;
        
        _oTextScore.y = y;
        _oTextOutline.x = _oTextScore.x ;
        _oTextOutline.y = _oTextScore.y;
        
                s_oStage.addChild(_oTextScore);
        s_oStage.addChild(_oTextOutline);


       var oTween = new createjs.Tween.get(_oTextScore).to({y: y- 30, alpha: 0}, 600).call(_oThis.resetText);
       oTween.ignoreGlobalPause = true;
       var oTweenOutline =  new createjs.Tween.get(_oTextOutline).to({y: y- 30, alpha: 0}, 600).call(_oThis.resetText);
        oTweenOutline.ignoreGlobalPause = true;

};
 
    this.onClick = function (e) 
    {          
        
        if (_oDuckSprite.currentAnimation  === "idle")
        {
        
        _oDuckSprite.gotoAndPlay("shuttering");
       if(DUCK_SCORE[_iType] > 0)
                    playSound("good_shot",1,false);
                else
                    playSound("wrong_shot",1,false);
        if(s_oGame !== null && s_oGame!== undefined)
        {
        _oThis.showText(e);

      s_oGame.increaseScore(DUCK_SCORE[_iType]);
      
      s_oGame.increaseTime(DUCK_TIME[_iType]);
  }
        }
    };
    
   
    this.getSprite = function ()
    {
        return _oDuckSprite;
    };
    
    this._init(oParentContainer, bInverse, oParent);
}

