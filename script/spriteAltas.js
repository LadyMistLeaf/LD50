const sprites = {};

sprites.addImage = (imageName, imageSrc) => {
    sprites[imageName] = new Image();
    sprites[imageName].src = imageSrc;
}

sprites.addImage("main_bg", "./assets/images/main_bg.png");


// Temp images
sprites.addImage("blurb1", "./assets/images/blurb1.png");
sprites.addImage("blurb2", "./assets/images/blurb2.png");
sprites.addImage("scroll", "./assets/images/scroll.png");