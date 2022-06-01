import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const PLAYER_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(timeToLocalStorage, 1000));

function timeToLocalStorage(data) {
  localStorage.setItem(PLAYER_CURRENT_TIME, data.seconds);
}
setCurrentTime();

function setCurrentTime() {
  const currentTime = localStorage.getItem(PLAYER_CURRENT_TIME);

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
