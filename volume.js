document.addEventListener("DOMContentLoaded", function () {
    var audioElements = document.querySelectorAll('.audio-item audio');
    var volumeSliders = document.querySelectorAll('.audio-item .volume-slider');
    var playButtons = document.querySelectorAll('.audio-item .play-button');

    audioElements.forEach(function (audio, index) {
        var volumeSlider = volumeSliders[index];
        var playButton = playButtons[index];

        // Update volume and play/pause when slider or button changes
        volumeSlider.addEventListener('input', function () {
            audio.volume = volumeSlider.value / 100;
        });

        playButton.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
                playButton.classList.remove('play-icon');
                playButton.classList.add('stop-icon');
            } else {
                audio.pause();
                audio.currentTime = 0; // Reset audio to the beginning when stopped
                playButton.classList.remove('stop-icon');
                playButton.classList.add('play-icon');
            }
        });
    });
});