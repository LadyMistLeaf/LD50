const sounds = {};

sounds.addSound = (name, oggsrc, mp3src) => {
    sounds[name] = document.createElement('audio');
    if(sounds[name].canPlayType('audio/ogg')){
        sounds[name].setAttribute('src', oggsrc);
    }
    // else {
    //     sounds[name].setAttribute('src', mp3src);
    // }
}

sounds.addSound('plant_wilt_1', './assets/sfx/plant_wilt_1.ogg', './assets/sfx/plant_wilt_1.mp3');
sounds.addSound('plant_wilt_2', './assets/sfx/plant_wilt_2.ogg', './assets/sfx/plant_wilt_2.mp3');