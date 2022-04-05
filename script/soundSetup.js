const sounds = {};

sounds.addSound = (name, oggsrc, mp3src) => {
    sounds[name] = document.createElement('audio');
    if(sounds[name].canPlayType('audio/ogg')){
        sounds[name].setAttribute('src', oggsrc);
    }
    else {
        sounds[name].setAttribute('src', mp3src);
    }
}

sounds.addSound('title_music', './assets/music/music_title.ogg', './assets/music/music_title.mp3');
sounds.addSound('music_ingame', "./assets/music/music_ingame_loop.ogg", './assets/music/music_ingame_loop.mp3');
sounds.addSound('music_result', './assets/music/music_results.ogg', './assets/music/music_results.mp3')
sounds.addSound('music_jingle', './assets/music/music_pixeleaf_jingle.ogg', './assets/music/music_pixeleaf_jingle.mp3')

sounds.addSound('plant_wilt_1', './assets/sfx/plant_wilt_1.ogg', './assets/sfx/plant_wilt_1.mp3');
sounds.addSound('plant_wilt_2', './assets/sfx/plant_wilt_2.ogg', './assets/sfx/plant_wilt_2.mp3');
sounds.addSound('wateringcan_pickup', './assets/sfx/wateringcan_pickup.ogg', './assets/sfx/wateringcan_pickup.mp3');
sounds.addSound('wateringcan_returning', './assets/sfx/wateringcan_returning.ogg', './assets/sfx/wateringcan_returning.mp3');
sounds.addSound('plant_watered', './assets/sfx/plant_watered.ogg', './assets/sfx/plant_watered.mp3');
sounds.addSound('typing', './assets/sfx/typing_loop.ogg', './assets/sfx/typing_loop.mp3');
sounds.addSound('phone_notification', './assets/sfx/phone_notification.ogg', './assets/sfx/phone_notification.mp3');
sounds.addSound('phone_urgent', './assets/sfx/phone_urgent.ogg', './assets/sfx/phone_urgent.mp3');
sounds.addSound('phone_broken', './assets/sfx/phone_broken.ogg', './assets/sfx/phone_broken.mp3');
sounds.addSound('phone_typing', './assets/sfx/phoney_typing_loop.ogg', "./assets/sfx/phoney_typing_loop.mp3");
sounds.addSound('lamp_flicker', './assets/sfx/lamp_flicker_loop.ogg', './assets/sfx/lamp_flicker_loop.mp3');
sounds.addSound('lamp_pops', './assets/sfx/lamp_pops.ogg', './assets/sfx/lamp_pops.mp3');
sounds.addSound('printer_fixing', './assets/sfx/printer_fixing.ogg', './assets/sfx/printer_fixing.mp3');
sounds.addSound('printer_malfunction', './assets/sfx/printer_malfunction.ogg', './assets/sfx/printer_malfunction.mp3');
sounds.addSound('bulb_screwing_in', './assets/sfx/bulb_screwing_in.ogg', './assets/sfx/bulb_screwing_in.mp3');
sounds.addSound('spider_down', './assets/sfx/spider_down.ogg', './assets/sfx/spider_down.mp3');
sounds.addSound('spider_shoo', './assets/sfx/spider_shoo.ogg', './assets/sfx/spider_shoo.mp3');
sounds.addSound('spider_death', './assets/sfx/spider_death.ogg','./assets/sfx/spider_death.mp3');

