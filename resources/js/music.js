

const musicPlayer = {
    isPlaying: false,
    progress: 0,
};

const progressBar = document.querySelector('.played');
const playPauseButton = document.getElementById('playAndPause');
const randomButton = document.getElementById('random');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const repeatButton = document.getElementById('repeat');
let progressInterval;

playPauseButton.addEventListener('click', () => {
    musicPlayer.isPlaying = !musicPlayer.isPlaying;
    updatePlayer();
});

randomButton.addEventListener('click', () => {
    
});

previousButton.addEventListener('click', () => {
    // Handle previous logic here
    console.log('Previous clicked');
});

nextButton.addEventListener('click', () => {
    // Handle next logic here
    console.log('Next clicked');
});

repeatButton.addEventListener('click', () => {
    // Handle repeat logic here
    console.log('Repeat clicked');
});

function updatePlayer() {
    if (musicPlayer.isPlaying) {
        playPauseButton.textContent = 'Pause';
        simulateProgress();
    } else {
        playPauseButton.textContent = 'Play';
        clearInterval(progressInterval);
    }
}

function simulateProgress() {
    let currentTime = 0;
    const duration = 100;

    progressInterval = setInterval(() => {
        currentTime++;
        musicPlayer.progress = (currentTime / duration) * 100;
        progressBar.style.width = `${musicPlayer.progress}%`;

        if (currentTime >= duration) {
            musicPlayer.isPlaying = false;
            updatePlayer();
            clearInterval(progressInterval);
        }
    }, 1000);
}