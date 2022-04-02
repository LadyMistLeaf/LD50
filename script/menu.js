drawMenu = () => {
    gameCanvas.fillStyle = "#FFFFFF";
    gameCanvas.fillRect(0, 0, WIDTH, HEIGHT);

    gameCanvas.fillStyle = "#000000";
    gameCanvas.fillText("Destructive Distractions!", 100, 100);
}

menuMouseClick = (xCoord, yCoord) => {
    startGame();
}