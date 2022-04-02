const sprites = {};

sprites.addImage = (imageName, imageSrc) => {
    sprites[imageName] = new Image();
    sprites[imageName].src = imageSrc;
}

sprites.addImage("main_bg", "./assets/images/main_bg.png");