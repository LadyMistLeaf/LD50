let mouseX = 0;
let mouseY = 0;

goToMenu = () => {
    sounds.title_music.play();
}

drawMenu = () => {
    gameCanvas.drawImage(sprites.title_screen, 0, 0);
    gameCanvas.drawImage(sprites.start, 391, 300);
    gameCanvas.drawImage(sprites.how_to, 391, 360);
    gameCanvas.drawImage(sprites.credits, 391, 420);
    gameCanvas.drawImage(sprites[mouseImage], mouseX - CURSOR_OFFSET_X, mouseY - CURSOR_OFFSET_Y);
}

menuMouseClick = (xCoord, yCoord) => {
    if(xCoord >= 391 && xCoord <= 634){
        if(yCoord >= 300 && yCoord <= 335){
            sounds.title_music.pause();
            sounds.title_music.currentTime = 0.0;
            startGame();
        }
        else if(yCoord >= 360 && yCoord <= 395){
            Game.state = "howTo";
            goToHowTo();
        }
        else if(yCoord >= 420 && yCoord <= 455){
            Game.state = "credits";
        }
    }
}