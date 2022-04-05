goToResults = () => {
    sounds.music_result.play();
}

drawResults = () => {
    gameCanvas.drawImage(sprites.results, 0, 0);
    gameCanvas.drawImage(sprites.results_header, 287, 75);
    gameCanvas.drawImage(sprites.back, 50, 520);

    gameCanvas.font = "24px webkomick";
    
    var bugs_total   = 27;
    var bugs_fixed   = 27 - codeBugs;
    var score_multi_bugs    = 3;  // gets multiplied with bugs_fixed
    
    var final_score_bugs    = score_multi_bugs * bugs_fixed;   
    var final_score_printer = 0
    var final_score_phone   = 0
    var final_score_plant   = 0
    var final_score_coffee  = 0
    
    
    // colors:
    var col_black      = "#000000";
    var col_yellow     = "#fdb069";
    var col_red        = "#8b0340";
    var col_green      = "#9fd598";
    
    var line_y         = 225;
    var line_height    = 22;
    
    var col_1 = 300;
    var col_2 = 550;
    var col_3 = 670;
    
    var l  = "";
    
    gameCanvas.fillStyle = col_black;
    gameCanvas.textAlign = "left"
    
    // bugs fixed
    gameCanvas.fillText("Bugs Fixed", col_1, line_y);
    gameCanvas.fillText(bugs_fixed + "/" + bugs_total, col_2, line_y);
    gameCanvas.fillText(final_score_bugs, col_3, line_y)
    line_y += line_height
    
    // printer
    gameCanvas.fillStyle = col_black;
    gameCanvas.fillText("Printer", col_1, line_y);
    if(interactables[4].jammed) {
      l = "Printing";
      final_score_printer = 16
    }
    else
    {
      l = "Jammed";
    }
    gameCanvas.fillText(l, col_2, line_y);
    gameCanvas.fillText(final_score_printer, col_3, line_y)
    line_y += line_height
    
    // lamp
    gameCanvas.fillStyle = col_black;
    gameCanvas.fillText("Lamp", col_1, line_y);
    if (interactables[6].image === "lamp_lit"){
      l = "Illuminated";
      final_score_lamp = 12;
    }
    else {
      l = "Blown out";
    }
    gameCanvas.fillText(l, col_2, line_y);
    gameCanvas.fillText(final_score_lamp, col_3, line_y)
    line_y += line_height
    
    // phone
    gameCanvas.fillStyle = col_black;
    gameCanvas.fillText("Social Media", col_1, line_y);
    if (interactables[3].image === "phone_cracked"){
      l = "Destroyed";
    }
    if (interactables[3].image === "phone_imminent") {
      l = "Neglected";
      final_score_phone = 5;
    }
    if (interactables[3].image === "phone_on"){
      l = "Unpopular";
      final_score_phone = 15;
    }
    if (interactables[3].image === "phone_on"){
      l = "Unpopular";
      final_score_phone = 20;
    }
    gameCanvas.fillText(l, col_2, line_y);
    gameCanvas.fillText(final_score_phone, col_3, line_y)
    line_y += line_height
    
    // coffee
    gameCanvas.fillStyle = col_black;
    gameCanvas.fillText("Coffee", col_1, line_y);
    if (interactables[1].alive){
      l = "delicious";
      final_score_coffee = 10;
    }
    else {
      l = "disgusting";
      final_score_coffee = 0;
    }
    gameCanvas.fillText(l, col_2, line_y);
    gameCanvas.fillText(final_score_coffee, col_3, line_y)
    line_y += line_height
    

    // plant
    gameCanvas.fillStyle = col_black;
    gameCanvas.fillText("Plant", col_1, line_y);
    if (plantImage === "plant_1"){
      l = "healthy";
      final_score_plant = 10;
    }
    if (plantImage === "plant_2"){
      l = "thirtsy";
      final_score_plant = 5;
    }
    if (plantImage === "plant_3"){
      l = "dead";
      final_score_plant = 0;
    }
    gameCanvas.fillText(l, col_2, line_y);
    gameCanvas.fillText(final_score_plant, col_3, line_y)
    line_y += line_height

    var score_total = final_score_plant + final_score_coffee + final_score_printer + final_score_bugs + final_score_phone + final_score_lamp;
    
    gameCanvas.font = "52px webkomick";
    gameCanvas.textAlign = "center"
    gameCanvas.fillStyle = col_yellow;
    
    line_y += line_height + line_height
    gameCanvas.fillText("Total score: " + score_total, 512, line_y);
     

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