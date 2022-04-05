drawStart = () => {
    gameCanvas.drawImage(sprites.pixeleaf, 0, 0);
    gameCanvas.drawImage(sprites[mouseImage], mouseX - CURSOR_OFFSET_X, mouseY - CURSOR_OFFSET_Y);
}

startMouseClick = (xCoord, yCoord) => {
    Game.state = "menu";
    goToMenu();
}