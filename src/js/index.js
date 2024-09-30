require('./js_modules/burger.js');
require('./js_modules/accordion.js');
require('./js_modules/mainScroll.js');

import videojs from 'video.js';

const myPlayer = document.querySelector('#vid1')

var player = videojs(myPlayer, {
    "controls": true,
});


player.addClass('vjs-16-9');