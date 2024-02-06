



document.addEventListener('DOMContentLoaded', function() {
    let currentPlaying = null;

    const playPauseButtons = document.querySelectorAll('.play-pause-button');
    playPauseButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const audioId = `audio_${button.dataset.audioId}`;
            const progressId = button.dataset.progressId;
            playPause(audioId, progressId, button);
        });
    });

    function playPause(audioId, progressId, button) {
    const audio = document.getElementById(audioId);
    const progress = document.getElementById(progressId);

    if (currentPlaying && currentPlaying !== audio) {
        stopAudio(currentPlaying, button, progress);
    }

    if (audio.paused) {
        startAudio(audio, button, progress);
    } else {
        stopAudio(audio, button, progress);
    }
}

    function startAudio(audio, button, progress) {
        audio.play();
        button.textContent = 'Pause';
        button.style.backgroundColor = 'rgba(204,101,000,1)'; 
        currentPlaying = audio;

        audio.addEventListener('timeupdate', updateProgress.bind(null, audio, progress));
        audio.addEventListener('ended', stopAudio.bind(null, audio, button, progress));
    }

    function stopAudio(audio, button, progress) {
    audio.pause();
    button.textContent = 'Play';
    button.style.backgroundColor = ''; 
    if (progress) progress.value = 0;
    currentPlaying = null;

    const nextButton = button.nextElementSibling;
    if (nextButton) {
        const nextAudioId = `audio_${nextButton.dataset.audioId}`;
        const nextProgressId = nextButton.dataset.progressId;
        playPause(nextAudioId, nextProgressId, nextButton);
    }
}
        //errore nella console
        function updateProgress(audio, progress) {
            if (progress) {
                const value = (audio.currentTime / audio.duration) * 100;
                progress.value = value;
            }
        }
});


/* function playPause(audioId, progressId, button) {
    const audio = document.getElementById(audioId);
    const progress = document.getElementById(progressId);

    if (currentPlaying && currentPlaying !== audio) {
        stopAudio(currentPlaying, button, progress);
    }

    if (audio.paused) {
        startAudio(audio, button, progress);
    } else {
        stopAudio(audio, button, progress);
    }
}

function stopAudio(audio, button, progress) {
    audio.pause();
    button.textContent = 'Play';
    button.style.backgroundColor = ''; 
    if (progress) progress.value = 0;
    currentPlaying = null;

    const nextButton = button.nextElementSibling;
    if (nextButton) {
        const nextAudioId = `audio_${nextButton.dataset.audioId}`;
        const nextProgressId = nextButton.dataset.progressId;
        playPause(nextAudioId, nextProgressId, nextButton);
    }
} */


