const gameCanvas = document.getElementById("game").getContext("2d");

const WIDTH = 1024;
const HEIGHT = 576;

const OFFSET_X = 8;
const OFFSET_Y = 7;

const FRAME = 17; // milliseconds per frame for animations

const SCREEN_TOP = 82;
const SCREEN_BOTTOM = 402;
const SCREEN_LEFT = 300;
const SCREEN_RIGHT = 712;  // 726 without removing the scroll bar

const SCROLL_WIDTH = 14;
const SCROLL_HEIGHT = 50;

const SCROLL_MULTIPLIER = 2; // One pixel of scroll counts for how many of screen code?