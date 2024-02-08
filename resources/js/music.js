document.addEventListener('DOMContentLoaded', function () {
    let currentPlaying = false;

    const playPauseButtons = document.querySelectorAll('.play-pause-button');
    playPauseButtons.forEach(button => {
        button.addEventListener('click', () => {
            
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
        button.innerHTML = '<svg width="8" height="13" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="3" height="16" rx="1" fill="#e4cdc0"/><rect width="3" height="16" rx="1" fill="#e4cdc0"/></svg>';
        button.style.backgroundColor = 'rgba(204,101,000,1)';
        currentPlaying = audio;
    
        audio.addEventListener('timeupdate', updateProgress.bind(false, audio, progress));
        audio.addEventListener('ended', stopAudio.bind(false, audio, button, progress));
    }

    function stopAudio(audio, button, progress) {
        audio.pause();
        button.innerHTML = '<svg width="14" height="15" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.499999 16.6018 0.499999 15.0622L0.5 2.93782C0.5 1.39822 2.16667 0.43597 3.5 1.20577L14 7.26795Z" fill="#e4cdc0"/></svg>';
        button.style.backgroundColor = '';
        if (progress) progress.value = 0;
        currentPlaying = false;

        const nextButton = button.nextElementSibling;
        if (nextButton) {
            const nextAudioId = `audio_${nextButton.dataset.audioId}`;
            const nextProgressId = nextButton.dataset.progressId;
            playPause(nextAudioId, nextProgressId, nextButton);
        }
    }

    //progress bar

    function updateProgress(audio, progress) {
        if (progress) {
            const value = (audio.currentTime / audio.duration) * 100;
            progress.querySelector('.progress-bar-fill').style.width = value + '%';
        }
    }
});