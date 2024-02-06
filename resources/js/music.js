let currentPlaying = null;

document.querySelectorAll('.play-pause-button').forEach(function(button) {
    button.addEventListener('click', function() {
        let audioId = 'audio_' + this.dataset.audioId;
        let progressId = this.dataset.progressId;
        playPause(audioId, progressId, this);
    });
});

function playPause(audioId, progressId, button) {
    let audio = document.getElementById(audioId);
    let progress = document.getElementById(progressId);

    if (currentPlaying && currentPlaying !== audio) {
        currentPlaying.pause();
        let currentProgressId = currentPlaying.id.replace('audio_', 'progress_');
        document.getElementById(currentProgressId).value = 0;
        }

    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause';
        currentPlaying = audio;
        //difrent bg
        
    } else {
        audio.pause();
        button.textContent = 'Play';
        currentPlaying = null;
    }

    audio.addEventListener('timeupdate', function() {
        let value = (audio.currentTime / audio.duration) * 100;
        progress.value = value;
    });

    audio.addEventListener('ended', function() {
        progress.value = 0;
        button.textContent = 'Play';
        currentPlaying = null;
    });
}

