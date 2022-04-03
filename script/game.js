let codeLocation = 0;
let scrollY = 0;
let mouseScroll = false; // Detect whether or not the mouse Y is being tracked for the scroll
let mouseAction = null; // Detect whether or not the mouse is doing something to prevent further changes to cursor
let plantImage = "plant_2";

let interactables = [];

// Mouse Location is where the pointer will show, as some actions will cause the pointer to stay still
let mouseLocationX = mouseX;
let mouseLocationY = mouseY;

drawGame = () => {
    gameCanvas.fillRect(0, 0, WIDTH, HEIGHT);
    Game.data.forEach((codeBlock) => {
        gameCanvas.drawImage(sprites[codeBlock.name], SCREEN_LEFT, codeLocation - scrollY * SCROLL_MULTIPLIER);
        codeLocation += codeBlock.height;
    });
    codeLocation = SCREEN_TOP;
    gameCanvas.drawImage(sprites.scroll, SCREEN_RIGHT, SCREEN_TOP + scrollY);
    gameCanvas.drawImage(sprites.main_bg, 0, 0);

    interactables.forEach((item) => {
        gameCanvas.drawImage(sprites[item.image], item.x, item.y);
    })
    // gameCanvas.drawImage(sprites.watering_can_1, 840, 340);
    gameCanvas.drawImage(sprites[plantImage], 770, 300);
    gameCanvas.drawImage(sprites.mug, 780, 450);

    gameCanvas.drawImage(sprites[mouseImage], mouseLocationX - CURSOR_OFFSET_X, mouseLocationY - CURSOR_OFFSET_Y);
}

gameMouseClick = (xCoord, yCoord) => {
    if(xCoord >= SCREEN_LEFT && xCoord < SCREEN_RIGHT){
        if(yCoord >= SCREEN_TOP && yCoord <= SCREEN_BOTTOM){
            let piece = null;
            let index = 0;
            let startY = SCREEN_TOP - scrollY * SCROLL_MULTIPLIER;
            while(piece === null){
                if(yCoord >= startY && yCoord <= startY + Game.data[index].height){
                    piece = index;
                }
                else {
                    startY += Game.data[index].height;
                    index++;
                }
            }
            console.log("Code block " + piece);
        }
    }
    else if (xCoord >= SCREEN_RIGHT && xCoord <= SCREEN_RIGHT + SCROLL_WIDTH){
        if(yCoord >= SCREEN_TOP + scrollY && yCoord <= SCREEN_TOP + scrollY + SCROLL_HEIGHT){
            console.log("Mouse Scrolling!");
            mouseScroll = true;
        }
    }
    else {
        console.log("clicked outside of screen")
        let selected = null;
        interactables.forEach((element) => {
            if(xCoord >= element.x && xCoord <= element.x + element.height){
                if(yCoord >= element.y && yCoord <= element.y + element.height){
                    selected = element;
                }
            }
        });
        if(selected){
            selected.action();
        }
    }
}

gameMouseUp = () => {
    if(mouseScroll){
        mouseScroll = false;
    }
}

gameMouseMove = (x, y) => {
    if(mouseScroll){
        if(mouseY >= SCREEN_TOP && mouseY <= SCREEN_BOTTOM - SCROLL_HEIGHT){
            scrollY = Math.round(mouseY - SCREEN_TOP);
        }
        else if(mouseY < SCREEN_TOP){
            scrollY = 0;
        }
        else if(mouseY > SCREEN_BOTTOM - SCROLL_HEIGHT){
            scrollY = SCREEN_BOTTOM - SCROLL_HEIGHT - SCREEN_TOP;
        }
    }
    else if (mouseAction){

    }
    else {
        let selected
        interactables.forEach((element) => {
            if(x >= element.x && x <= element.x + element.height){
                if(y >= element.y && y <= element.y + element.height){
                    selected = element;
                }
            }
        });
        if(selected){
            mouseImage = "mouse_hand";
        }
        else {
            mouseImage = "mouse_pointer";
        }
    }
    mouseLocationX = x;
    mouseLocationY = y;
}

createInteractables = () => {
    interactables = [
        {
            image: "watering_can_1",
            x: 840,
            y: 340,
            width: 189,
            height: 151,
            action: function(){
                if(mouseAction === null){
                    if(plantImage === "plant_2"){
                        this.image = "plant_1";
                        mouseImage = "watering_can_2";
                        mouseAction = "watering";
                    }
                }
            }
        }
    ]
}

startGame = () => { //reInitializing all values so replayability is possible
    Game.state = "game";
    // Making a copy of the screen data so the original stays intact for replayability
    Game.data = JSON.parse(JSON.stringify(screenData)); 
    codeLocation = SCREEN_TOP;
    scrollY = 0;
    mouseScroll = false;
    createInteractables();
}
