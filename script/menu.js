let mouseX = 0;
let mouseY = 0;

drawMenu = () => {
    gameCanvas.fillStyle = "#FFFFFF";
    gameCanvas.fillRect(0, 0, WIDTH, HEIGHT);

    gameCanvas.fillStyle = "#000000";
    gameCanvas.fillText("Destructive Distractions!", 100, 100);

    gameCanvas.drawImage(sprites[mouseImage], mouseX - CURSOR_OFFSET_X, mouseY - CURSOR_OFFSET_Y);
}

menuMouseClick = (xCoord, yCoord) => {
    startGame();
}