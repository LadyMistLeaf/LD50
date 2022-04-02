startGame = () => {
    Game.state = "game";
}

drawGame = () => {
    gameCanvas.fillRect(0, 0, WIDTH, HEIGHT);
    gameCanvas.drawImage(sprites.main_bg, 0, 0);
}