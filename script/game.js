startGame = () => {
    Game.state = "game";
}

drawGame = () => {
    gameCanvas.fillRect(0, 0, WIDTH, HEIGHT);
    gameCanvas.drawImage(sprites.main_bg, 0, 0);
}

gameMouseClick = (xCoord, yCoord) => {
    if(xCoord >= SCREEN_LEFT && xCoord <= SCREEN_RIGHT){
        if(yCoord >= SCREEN_TOP && yCoord <= SCREEN_BOTTOM){
            console.log("Screen Clicked!");
        }
    }
}