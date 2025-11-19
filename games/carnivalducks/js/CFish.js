function CFish(oParentContainer, bInverse, oParent)
{
    var _oParentContainer;
    var _oFishContainer;
    var _oFishSprite;
    var _bInverse;
    var _oTextScore;
    var _oTextOutline;
    var _oParent;
    var _iDirection;
    var _oThis = this;
    var _oStick;

    this._init = function (oParentContainer, bInverse, oParent)
    {
        _oParent = oParent;
        _oParentContainer = oParentContainer;
        _oFishContainer = new createjs.Container();
        _oParentContainer.addChild(_oFishContainer);
        var rand = Math.round(randomFloatBetween(0, 2));
        _bInverse = bInverse;
        _oTextScore = new createjs.Text("+1", "42px " + PRIMARY_FONT, "#ff0000");
        _oTextOutline = new createjs.Text("+1", "42px " + PRIMARY_FONT, "#ff0000");
        _oTextOutline.outline = 3;
        _oStick = createBitmap(s_oSpriteLibrary.getSprite("stick"));
        _oFishContainer.addChild(_oStick);
        this.spawn(rand);
    };

    this.spawn = function ()
    {

        var oData = {images: [s_oSpriteLibrary.getSprite("fish")],
            frames: {width: 300, height: 216, regX: 108},
            animations: {idle: [0],
                piece: [8],
                shuttering: [1, 7, "piece", 0.9]
            }
        };
        var oSheet = new createjs.SpriteSheet(oData);
        _oFishSprite = createSprite(oSheet, "idle",108,0,300,216);

        _oFishContainer.addChild(_oFishSprite);


        _iDirection = 1;
        if (_bInverse)
        {
            _oFishSprite.scaleX = -1;
            _iDirection = -1;
        }
        _oFishContainer.y = -120;
        this.updateStickPos();
        _oFishSprite.on("mousedown", this.onClick);
    };
    this.changeType = function ()
    {
        _oFishContainer.removeChild(_oFishSprite);
        this.spawn();
    };
    this.setPos = function (x, y)
    {
        _oFishSprite.x = x;
        _oFishSprite.y = y;
    };
    this.updateStickPos = function ()
    {
        if (!_bInverse)
        {
            _oStick.x = _oFishSprite.x + 20;
        } else
            _oStick.x = _oFishSprite.x - 40;

        _oStick.y = _oFishSprite.y + _oFishSprite.getBounds().height / 2 + 45;


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

        _oTextScore.color = "green";
        _oTextOutline.color = "white";
        _oTextScore.text = "+1";
        _oTextOutline.text = "+1";

        var x = e.stageX / s_iScaleFactor;
        var y = e.stageY / s_iScaleFactor;
        _oTextScore.x = x;

        _oTextScore.y = y;
        _oTextOutline.x = _oTextScore.x;
        _oTextOutline.y = _oTextScore.y;

        s_oStage.addChild(_oTextScore);
        s_oStage.addChild(_oTextOutline);


        var oTween = new createjs.Tween.get(_oTextScore).to({y: y - 30, alpha: 0}, 600).call(_oThis.resetText);
        oTween.ignoreGlobalPause = true;
        var oTweenOutline = new createjs.Tween.get(_oTextOutline).to({y: y - 30, alpha: 0}, 600).call(_oThis.resetText);
        oTweenOutline.ignoreGlobalPause = true;

    };

    this.onClick = function (e)
    {

        if (_oFishSprite.currentAnimation === "idle")
        {

            _oFishSprite.gotoAndPlay("shuttering");
            if (s_oGame !== null && s_oGame !== undefined)
            {
                _oThis.showText(e);

                s_oGame.increaseScore(1);

                playSound("good_shot",1,false);

                s_oGame.increaseTime(DUCK_TIME[0]);
            }
        }
    };


    this.getSprite = function ()
    {
        return _oFishSprite;
    };

    this._init(oParentContainer, bInverse, oParent);
}




