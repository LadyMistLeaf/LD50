gameCanvas.canvas.width = WIDTH;
gameCanvas.canvas.height = HEIGHT;

Game = {};

Game.state = "menu";

gameCanvas.font = "20px Arial";

let mouseX = 0;
let mouseY = 0;

handleMouseMove = (event) => {
    mouseX = event.clientX - event.path[0].offsetLeft;
    mouseY = event.clientY - event.path[0].offsetTop;
}

const drawMouse = () => {
    // gameCanvas.drawImage(sprites.targetCursor, mouseX - TARGET_CURSOR_OFFSET, mouseY - TARGET_CURSOR_OFFSET);
}
    
const step = () => {
    gameCanvas.clearRect(0, 0, WIDTH, HEIGHT);
    
    drawMouse();
    if(Game.state === "menu"){
        drawMenu();
    }

    requestAnimationFrame(step);
}

const mouseClick = (event) => {
    let xCoord = event.clientX - gameCanvas.canvas.offsetLeft + OFFSET_X;
    let yCoord = event.clientY - gameCanvas.canvas.offsetTop + OFFSET_Y;
    if (Game.state === "menu") {
        menuMouseClick(xCoord, yCoord);
    }
};

gameCanvas.canvas.addEventListener('mousemove', handleMouseMove);
gameCanvas.canvas.addEventListener('click', mouseClick);

fadeOut = () => {
    
}

requestAnimationFrame(step);