goToResults = () => {
    sounds.music_results.play();
}

drawResults = () => {
    gameCanvas.drawImage(sprites.results, 0, 0);
    gameCanvas.drawImage(sprites.results_header, 287, 75);
    gameCanvas.drawImage(sprites.back, 50, 520);

    gameCanvas.fillStyle = "#FFFFFF";
    gameCanvas.font = "26px webkomick";

    gameCanvas.fillText("Level up!", 550, 530);

    gameCanvas.drawImage(sprites[mouseImage], mouseX - CURSOR_OFFSET_X, mouseY - CURSOR_OFFSET_Y);
}

resultsMouseClick = (xCoord, yCoord) => {
    if(xCoord >= 50 && xCoord <= 156){
        if(yCoord >= 520 && yCoord <= 555){
            sounds.title_music.pause();
            sounds.title_music.currentTime = 0.0;
            Game.state = "menu";
            goToMenu();
        }
    }
}