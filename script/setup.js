gameCanvas.canvas.width = WIDTH;
gameCanvas.canvas.height = HEIGHT;

Game = {};

Game.state = "start";

gameCanvas.font = "20px Arial";

let mouseImage = "mouse_pointer";

handleMouseMove = (event) => {
    let rect = gameCanvas.canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
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
    else if(Game.state === "howTo"){
        drawHowTo();
    }
    else if(Game.state === "results"){
        drawResults();
    }
    else if(Game.state === "start"){
        drawStart();
    }
    else if(Game.state === "credits"){
        drawCredits();
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
    } else if (Game.state === "howTo"){
        howToMouseClick(xCoord, yCoord);
    } else if (Game.state === "results"){
        resultsMouseClick(xCoord, yCoord);
    } else if (Game.state === "start"){
        startMouseClick(xCoord, yCoord);
    }else if (Game.state === "credits"){
        creditsMouseClick(xCoord, yCoord);
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

requestAnimationFrame(step);