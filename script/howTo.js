goToHowTo = () => {
}

drawHowTo = () => {
    gameCanvas.drawImage(sprites.how_to_play, 0, 0);
    gameCanvas.drawImage(sprites.back, 50, 520);
    gameCanvas.drawImage(sprites[mouseImage], mouseX - CURSOR_OFFSET_X, mouseY - CURSOR_OFFSET_Y);
}

howToMouseClick = (xCoord, yCoord) => {
    if(xCoord >= 50 && xCoord <= 156){
        if(yCoord >= 520 && yCoord <= 555){
            Game.state = "menu";
            goToMenu();
        }
    }
}