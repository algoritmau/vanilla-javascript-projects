const videoEl = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestampEl = document.getElementById('timestamp');

const toggleVideoStatus = () =>
  videoEl.paused ? videoEl.play() : videoEl.pause();

const updatePlayIcon = () =>
  videoEl.paused
    ? (playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>');

const stopVideo = () => {
  videoEl.currentTime = 0;
  videoEl.pause();
};

const updateProgress = () => {
  progressBar.value = (videoEl.currentTime / videoEl.duration) * 100;

  // Update timestamp
  let minutes = Math.floor(videoEl.currentTime / 60);
  let seconds = Math.floor(videoEl.currentTime % 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  timestampEl.textContent = `${minutes}:${seconds}`;
};

const setVideoProgress = () => {
  videoEl.currentTime = (+progressBar.value * videoEl.duration) / 100;
};

// Event listeners
videoEl.addEventListener('click', toggleVideoStatus);
videoEl.addEventListener('pause', updatePlayIcon);
videoEl.addEventListener('play', updatePlayIcon);
videoEl.addEventListener('timeupdate', updateProgress);

playButton.addEventListener('click', toggleVideoStatus);
stopButton.addEventListener('click', stopVideo);
progressBar.addEventListener('change', setVideoProgress);
