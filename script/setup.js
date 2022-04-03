gameCanvas.canvas.width = WIDTH;
gameCanvas.canvas.height = HEIGHT;

Game = {};

Game.state = "menu";

gameCanvas.font = "20px Arial";

let mouseImage = "mouse_pointer";

handleMouseMove = (event) => {
    mouseX = event.clientX - event.path[0].offsetLeft;
    mouseY = event.clientY - event.path[0].offsetTop;
    if(Game.state === "game"){
        gameMouseMove(mouseX, mouseY);
    }
}

const step = () => {
    gameCanvas.clearRect(0, 0, WIDTH, HEIGHT);
    
    if(Game.state === "menu"){
        drawMenu();
    }
    else if(Game.state === "game"){
        drawGame();
    }

    requestAnimationFrame(step);
}

const mouseClick = (event) => {
    let xCoord = event.clientX - gameCanvas.canvas.offsetLeft + OFFSET_X;
    let yCoord = event.clientY - gameCanvas.canvas.offsetTop + OFFSET_Y;
    if (Game.state === "menu") {
        menuMouseClick(xCoord, yCoord);
    } else if (Game.state === "game"){
        gameMouseClick(xCoord, yCoord);
    }
};

const mouseUp = () => {
    if(Game.state === "game"){
        gameMouseUp();
    }
}

gameCanvas.canvas.addEventListener('mousemove', handleMouseMove);
gameCanvas.canvas.addEventListener('mousedown', mouseClick);
gameCanvas.canvas.addEventListener('mouseup', mouseUp);

fadeOut = () => {
    
}

requestAnimationFrame(step);