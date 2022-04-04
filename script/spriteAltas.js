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
sprites.addImage("spider_death_1", "./assets/images/spider_death_x740_y000_anim_1.png");
sprites.addImage("spider_death_2", "./assets/images/spider_death_x740_y000_anim_2.png");
sprites.addImage("spider_death_3", "./assets/images/spider_death_x740_y000_anim_3.png");
sprites.addImage("spider_death_4", "./assets/images/spider_death_x740_y000_anim_4.png");
sprites.addImage("spider_death_5", "./assets/images/spider_death_x740_y000_anim_5.png");
sprites.addImage("door_open", "./assets/images/door_open_x130_y210.png");
sprites.addImage("door_closed", "./assets/images/door_closed_x130_y210.png");
sprites.addImage("phone_off", "./assets/images/phone_off_x074_y490.png");
sprites.addImage("phone_on", "./assets/images/phone_on_x074_y490.png");
sprites.addImage("phone_imminent", "./assets/images/phone_imminent_x074_y490.png");
sprites.addImage("phone_cracked", "./assets/images/phone_cracked_x074_y490.png");
sprites.addImage("printer_error", "./assets/images/printer-error-x000-y300.png");
sprites.addImage("printer_good", "./assets/images/printer-good-x000-y300.png");
sprites.addImage("cupboard_closed", "./assets/images/cupboard_closed_x000_y350.png");
sprites.addImage("cupboard_open", "./assets/images/cupboard_open_x000_y350.png");
sprites.addImage("lamp_lit", "./assets/images/lamp_lit_x140_y000.png");
sprites.addImage("lamp_dark", "./assets/images/lamp_dark_x140_y000.png");
sprites.addImage("lamp_burnt", "./assets/images/lamp_burnedout_x140_y000.png");
sprites.addImage("scroll", "./assets/images/scroll.png");
sprites.addImage("ghost", "./assets/images/ghost.png");

sprites.addImage("code1", "./assets/images-code/code_DF_001.png");
sprites.addImage("code2e", "./assets/images-code/code_DE_002.png");
sprites.addImage("code2", "./assets/images-code/code_DC_002.png");
sprites.addImage("code3", "./assets/images-code/code_DF_003.png");
sprites.addImage("code4", "./assets/images-code/code_DF_004.png");
