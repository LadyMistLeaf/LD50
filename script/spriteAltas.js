const sprites = {};

sprites.addImage = (imageName, imageSrc) => {
    sprites[imageName] = new Image();
    sprites[imageName].src = imageSrc;
}

sprites.addImage("main_bg", "./assets/images/main_bg.png");
sprites.addImage("mouse_hand", "./assets/images/mouse_hand.png");
sprites.addImage("mouse_pointer", "./assets/images/mouse_pointer.png");
sprites.addImage("plant_1", "./assets/images/plant-1.png");
sprites.addImage("plant_2", "./assets/images/plant-2.png");
sprites.addImage("plant_3", "./assets/images/plant-3.png");
sprites.addImage("watering_can_1", "./assets/images/watering_can_1.png");
sprites.addImage("watering_can_2", "./assets/images/watering_can_2.png");
sprites.addImage("mug", "./assets/images/mug-x780-y450-1.png");
sprites.addImage("spider_down_1", "./assets/images/spider_down_x800_yANY_anim_1.png");
sprites.addImage("spider_down_2", "./assets/images/spider_down_x800_yANY_anim_2.png");
sprites.addImage("scroll", "./assets/images/scroll.png");

// Temp images
sprites.addImage("blurb1", "./assets/images/blurb1.png");
sprites.addImage("blurb2", "./assets/images/blurb2.png");
