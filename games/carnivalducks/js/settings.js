var CANVAS_WIDTH = 1136;
var CANVAS_HEIGHT = 832;

var EDGEBOARD_X = 70;
var EDGEBOARD_Y = 160;
var FPS = 30;
var FPS_TIME = 1000 / FPS;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "walibi";
var SCORE_ITEM_NAME = "duck carnival score";
var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_HELP = 1;
var STATE_GAME = 3;
var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END = 5;
var OCCURENCES = [20,20,20,10,10,10];
var RAILS_SPEEDS = [4, -7 , 5];
var SPEED_INCREMENT_MAX = 1;
var DUCK_SCORE = [1, 1, 1, -1, -1, -1];
var DUCK_TIME = [100, 100, 100, -100, -100, -100];
var GAME_TIME = 60; //How Many seconds each game should long?
var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
var SOUNDTRACK_VOLUME_IN_GAME  = 0.4;
