let codeLocation = 0;
let scrollY = 0;
let mouseScroll = false; // Detect whether or not the mouse Y is being tracked for the scroll
let mouseAction = null; // Detect whether or not the mouse is doing something to prevent further changes to cursor
let plantImage = "plant_1";
let mugStatus = "clean";
let spiderIndex = 0;
let lampIndex = 0;
let timeElapsed = 0;
let spiderTimeout = null; //This is where the timer will be stored to interrupt the descent on click;
let plantTimer = null;
let codeFixTimer = null;
let phoneTimer = null;
let lampTimer = null;
let codeBugs = 27;
let clockDisplay = "time0";
let clockTime = 0;
let gameTime = null;
let eventTime = null;

let barPercent = 0;

let interactables = [];

let events = [];

let lampTimes = [100, 2000, 200, 1500, 500, 1000, 1000, 1000, 1500, 1000, 2000, 500]; // Flicker times in milliseconds

// Mouse Location is where the pointer will show, as some actions will cause the pointer to stay still
let mouseLocationX = mouseX;
let mouseLocationY = mouseY;

sounds.typing.loop = true;
sounds.lamp_flicker.loop = true;
sounds.phone_typing.loop = true;
sounds.music_ingame.loop = true;
sounds.music_ingame.volume = 0.5;

drawGame = () => {
    gameCanvas.fillStyle = "#000000";
    gameCanvas.fillRect(0, 0, WIDTH, HEIGHT);
    Game.data.forEach((codeBlock) => {
        gameCanvas.drawImage(sprites[codeBlock.name], SCREEN_LEFT, codeLocation - scrollY * SCROLL_MULTIPLIER);
        codeLocation += codeBlock.height;
    });
    codeLocation = SCREEN_TOP;
    gameCanvas.drawImage(sprites.scroll, SCREEN_RIGHT, SCREEN_TOP + scrollY);
    gameCanvas.drawImage(sprites.main_bg, 0, 0);

    gameCanvas.drawImage(sprites[interactables[0].image], interactables[0].x, interactables[0].y);
    gameCanvas.drawImage(sprites[interactables[2].image], interactables[2].x, interactables[2].y);
    gameCanvas.drawImage(sprites[interactables[3].image], interactables[3].x, interactables[3].y);
    gameCanvas.drawImage(sprites[interactables[4].image], interactables[4].x, interactables[4].y);
    gameCanvas.drawImage(sprites[interactables[5].image], interactables[5].x, interactables[5].y);
    gameCanvas.drawImage(sprites[interactables[6].image], interactables[6].x, interactables[6].y);

    gameCanvas.drawImage(sprites[plantImage], 770, 300);
    
    if(mugStatus === "clean"){
        gameCanvas.drawImage(sprites.mug, 780, 450);
    }
    else{
        gameCanvas.drawImage(sprites[mugStatus], 740, 0);
    }
    
    if(interactables[1].alive){
        gameCanvas.drawImage(sprites[interactables[1].image], interactables[1].x, Math.floor(interactables[1].y));
    }

    gameCanvas.drawImage(sprites[mouseImage], mouseLocationX - CURSOR_OFFSET_X, mouseLocationY - CURSOR_OFFSET_Y);

    if(mouseAction === "debugging" || mouseAction === "phone" || mouseAction === "printerFix" || mouseAction === "bulbFix"){
        gameCanvas.fillStyle = "#393C43";
        gameCanvas.fillRect(mouseLocationX + 34, mouseLocationY + 34, 154, 24);
        gameCanvas.fillStyle = "#8B9E42";
        gameCanvas.fillRect(mouseLocationX + 36, mouseLocationY + 36, 150 * barPercent, 20);
    }

    gameCanvas.drawImage(sprites.dots, 315, 024);
    gameCanvas.drawImage(sprites.mins, 315, 024);
    gameCanvas.drawImage(sprites[clockDisplay], 315, 024);
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
            if(!Game.data[piece].fixed){
                fixCode(piece);
            }
        }
    }
    else if (xCoord >= SCREEN_RIGHT && xCoord <= SCREEN_RIGHT + SCROLL_WIDTH){
        if(yCoord >= SCREEN_TOP + scrollY && yCoord <= SCREEN_TOP + scrollY + SCROLL_HEIGHT){
            console.log("Mouse Scrolling!");
            mouseScroll = true;
        }
    }
    else if(mouseAction === "watering"){
        if(xCoord >= 770 && xCoord <= 890){
            if(yCoord >= 225 && yCoord <= 325){
                startWatering();
            }
        }
    }
    else {
        console.log(xCoord, yCoord);
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
    if(mouseAction === "debugging"){
        sounds.typing.pause();
        mouseAction = null;
    }
    if(mouseAction === "phone"){
        sounds.phone_typing.pause();
        mouseAction = null;
    }
    if(mouseAction === "printerFix"){
        sounds.printer_fixing.pause();
        sounds.printer_fixing.currentTime = 0;
        mouseAction = null;
    }
    if(mouseAction === "bulbFix"){
        sounds.bulb_screwing_in.pause();
        sounds.bulb_screwing_in.currentTime = 0;
        mouseAction = null;
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
        if(mouseAction === "wateringPlant"){
            return;
        }
        if(mouseAction === "debugging"){
            return;
        }
        if(mouseAction === "phone"){
            return;
        }
        if(mouseAction === "printerFix"){
            return;
        }
        if(mouseAction === "bulbFix"){
            return;
        }
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
                        this.image = "ghost";
                        mouseImage = "watering_can_2";
                        mouseAction = "watering";
                        sounds.wateringcan_pickup.play();
                    }
                }
            }
        },
        {
            image: "spider_down_1",
            x: 800, 
            y: -500,
            width: 74, 
            height: 475,
            alive: true,
            action: function(){
                if(mouseAction === null){
                    if(mugStatus === "clean"){
                        clearTimeout(spiderTimer);
                        sounds.spider_shoo.play();
                        spiderUp();
                        events.push("spider");
                    }
                }
            }
        },
        {
            image: "door_closed",
            x: 130,
            y: 210,
            width: 72,
            height: 218,
            action: function(){
                if(interactables[2].image === "door_closed"){
                    interactables[2].image = "door_open";
                }
                else {
                    interactables[2].image = "door_closed";
                }
            }
        },
        {
            image: "phone_off",
            x: 74,
            y: 490,
            width: 179,
            height: 86,
            action: function(){
                if(interactables[3].image === "phone_on" || interactables[3].image === "phone_imminent"){
                    mouseAction = "phone";
                    timeElapsed = 0;
                    sounds.phone_typing.play();
                    phoneAction(1500);
                }
            }
        },
        {
            image: "printer_good",
            x: 0,
            y: 300,
            width: 124,
            height: 73,
            jammed: false,
            action: function(){
                if(interactables[4].jammed){
                    if(mouseAction === "paper"){
                        mouseAction = "printerFix";
                        timeElapsed = 0;
                        sounds.printer_fixing.play();
                        printerAction(6000);
                    }
                }
            }
        },
        {
            image: "cupboard_closed",
            x: 0, 
            y: 350,
            width: 160,
            height: 135,
            action: function(){
                if(this.image === "cupboard_closed"){
                    this.image = "cupboard_open";
                }
                else if(mouseAction === null){
                    if(interactables[4].jammed){
                        mouseImage = "mouse_paper";
                        mouseAction = "paper";
                    }
                    else if(interactables[6].flickering){
                        mouseImage = "mouse_bulb";
                        mouseAction = "bulb";
                    }
                }
            }
        },
        {
            image: "lamp_lit",
            x: 140,
            y: 0,
            width: 89,
            height: 173,
            flickering: false,
            action: function(){
                if(interactables[6].flickering){
                    if(mouseAction === "bulb"){
                        mouseAction = "bulbFix";
                        timeElapsed = 0;
                        lampAction(3000);
                        sounds.bulb_screwing_in.play();
                    }
                }
            }
        }
    ]
}

selectEvent = () => {
    let rand = Math.floor(Math.random() * events.length);
    switch (events[rand]){
        case "plant":
            plantWilt();
            removeEvent("plant");
            break;
        case "spider":
            spiderDown();
            removeEvent("spider");
            break;
        case "phone":
            phoneBuzz();
            removeEvent("phone");
            break;
        case "lamp":
            lampFlicker();
            sounds.lamp_flicker.play();
            interactables[6].flickering = true;
            removeEvent("lamp");
            break;
        case "printer":
            printerJam();
            removeEvent("printer");
    }
    startEvents();
}

startEvents = () => {
    let rand = (Math.random() * 5000) + 10000; // 10 to 15 secs in milliseconds
    eventTime = setTimeout(selectEvent, rand);
}

startGame = () => { //reInitializing all values so replayability is possible
    Game.state = "game";
    // Making a copy of the screen data so the original stays intact for replayability
    Game.data = JSON.parse(JSON.stringify(screenData[0])); 
    codeLocation = SCREEN_TOP;
    scrollY = 0;
    mouseScroll = false;
    mouseAction = null;
    plantImage = "plant_1";
    mugStatus = "clean";
    spiderIndex = 0;
    lampIndex = 0;
    timeElapsed = 0;
    spiderTimeout = null;
    plantTimer = null;
    codeFixTimer = null;
    phoneTimer = null;
    lampTimer = null;
    codeBugs = 27;
    mouseScroll = false;
    clockDisplay = "time0";
    clockTime = 0;
    events = ["plant", "spider", "phone", "lamp", "printer"];
    sounds.music_ingame.play();
    createInteractables();
    startEvents();
    gameTime = setInterval(clockTimer, 16666);
}

spiderDeath = () => {
    spiderIndex++;
    if(spiderIndex <= 5){
        mugStatus = "spider_death_" + spiderIndex;
        setTimeout(spiderDeath, 150);
    }

}

spiderMoveDown = () => {
    if(spiderIndex < 25){
        interactables[1].y += SPIDER_DOWN_SPEED;
        spiderIndex++;
        spiderTimer = setTimeout(spiderMoveDown, FRAME);
    }
    else {
        spiderIndex = 0;
        if(interactables[1].y < 0){
            spiderTimer = setTimeout(spiderTwitch, 500);
        }
        else {
            setTimeout(() => {
                interactables[1].alive = false;
                interactables[1].y = -500;
                sounds.spider_death.play();
                spiderDeath();
            }, 200);
        }
    }
}

spiderTwitch = () => { 
    if(spiderIndex < 4){
        if(interactables[1].image === "spider_down_1"){
            interactables[1].image = "spider_down_2";
        }
        else {
            interactables[1].image = "spider_down_1"
        }
        spiderIndex++;
        spiderTimer = setTimeout(spiderTwitch, 300);
    }
    else {
        spiderIndex = 0;
        spiderTimer = setTimeout(() => {
            spiderMoveDown();
            sounds.spider_down.play();
        }, 500);
    }
}

spiderDown = () => {
    spiderIndex = 0;
    spiderMoveDown();

}

spiderUp = () => {
    if(interactables[1].y > -500){
        interactables[1].y -= SPIDER_UP_SPEED;
        setTimeout(spiderUp, FRAME);
    }
    else {
        interactables[1].y = -500;
    }
}

plantWilt = () => {
    if(plantImage === "plant_1"){
        plantImage = "plant_2";
        sounds.plant_wilt_1.play();
        plantTimeout = setTimeout(plantWilt, 10000);
    }
    else {
        sounds.plant_wilt_2.play();
        plantImage = "plant_3";
        interactables[0].image = "watering_can_1";
        if(mouseAction === "watering"){
            mouseAction = null;
            mouseImage = "mouse_pointer";
        }
    }
    
}

removeEvent = (removedEvent) => {
    events.forEach((item, index) => {
        if(item === removedEvent){
            events.splice(index, 1);
            console.log(events);
        }
    });
}

startWatering = () => {
    clearTimeout(plantTimeout);
    mouseAction = "wateringPlant";
    sounds.plant_watered.play();
    setTimeout(() => {
        mouseAction = null;
        mouseImage = "mouse_pointer";
        plantImage = "plant_1";
        interactables[0].image = "watering_can_1";
        sounds.wateringcan_returning.play();
    }, 1000);
}

fixCode = (piece) => {
    sounds.typing.play();
    mouseAction = "debugging";
    let time = Game.data[piece].time;
    timeElapsed = 0;
    barPercent = 0;
    fixingCode(time, piece);
}

fixingCode = (time, piece) => {
    if(mouseAction === "debugging"){
        timeElapsed += 17;
        if(timeElapsed < time){
            barPercent = timeElapsed / time;
            codeFixTimer = setTimeout(() => {
                fixingCode(time, piece);
            }, FRAME);
        }
        else {
            Game.data[piece].name = Game.data[piece].correct;
            Game.data[piece].fixed = true;
            mouseAction = null;
            codeBugs--;
            sounds.typing.pause();
        }
    }
}

phoneBuzz = () => {
    switch(interactables[3].image){
        case "phone_off": 
            interactables[3].image = "phone_on";
            sounds.phone_notification.play();
            phoneTimer = setTimeout(phoneBuzz, 6000);
            break;
        case "phone_on":
            interactables[3].image = "phone_imminent";
            sounds.phone_urgent.play();
            phoneTimer = setTimeout(phoneBuzz, 6000);
            break;
        case "phone_imminent":
            sounds.phone_broken.play();
            interactables[3].image = "phone_cracked";
            break;
    }
}

phoneAction = (time) => {
    if(mouseAction === "phone"){
        timeElapsed += 17;
        if(timeElapsed < time){
            barPercent = timeElapsed / time;
            codeFixTimer = setTimeout(() => {
                phoneAction(time);
            }, FRAME);
        }
        else {
            clearTimeout(phoneTimer);
            interactables[3].image = "phone_off";
            events.push("phone");
            mouseAction = null;
            sounds.phone_typing.pause();
        }
    }
}

lampFlicker = () => {
    if(lampIndex < lampTimes.length){
        if(interactables[6].image === "lamp_lit"){
            interactables[6].image = "lamp_dark";
            lampIndex++;
            lampTimer = setTimeout(lampFlicker, lampTimes[lampIndex - 1]);
        }
        else {
            interactables[6].image = "lamp_lit";
            lampIndex++;
            lampTimer = setTimeout(lampFlicker, lampTimes[lampIndex - 1]);
        }
    }
    else {
        sounds.lamp_flicker.pause();
        if(mouseAction === "bulb" || mouseAction === "bulbFix"){
            mouseAction = null;
            mouseImage = "mouse_pointer";
        }
        interactables[6].image = "lamp_burnt";
        interactables[6].flickering = false;
        sounds.lamp_pops.play();
    }
}

stopFlickering = () => {
    clearTimeout(lampTimer);
    interactables[6].image = "lamp_lit";
    sounds.lamp_flicker.pause();
    interactables[6].flickering = false;
}

printerJam = () => {
    interactables[4].jammed = true;
    interactables[4].image = "printer_error";
    sounds.printer_malfunction.play();
}

printerAction = (time) => {
    if(mouseAction === "printerFix"){
        timeElapsed += 17;
        if(timeElapsed < time){
            barPercent = timeElapsed / time;
            codeFixTimer = setTimeout(() => {
                printerAction(time);
            }, FRAME);
        }
        else {
            events.push("printer");
            mouseAction = null;
            mouseImage = "mouse_pointer";
            interactables[4].image = "printer_good";
            interactables[4].jammed = false;
        }
    }
}

lampAction = (time) => {
    if(mouseAction === "bulbFix"){
        timeElapsed += 17;
        if(timeElapsed < time){
            barPercent = timeElapsed / time;
            codeFixTimer = setTimeout(() => {
                lampAction(time);
            }, FRAME);
        }
        else {
            stopFlickering();
            mouseAction = null;
            mouseImage = "mouse_pointer";
        }
    }
}

clockTimer = () => {
    clockTime++;
    if(clockTime > 8){
        clearTimeout(gameTime);
        clearTimeout(eventTime);
        sounds.music_ingame.pause();
        goToResults();
        Game.state = "results";
    }
    else {
        clockDisplay = "time" + clockTime;
    }
}