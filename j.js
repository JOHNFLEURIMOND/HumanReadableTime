function humanReadable(seconds) {
let sec = 0,
    min = 0,
    hour = 0;

  sec = seconds % 60;
  min = Math.floor(seconds / 60) % 60;
  hour = Math.floor(seconds / 3600);

  return padNum(hour) + ':' + padNum(min) + ':' + padNum(sec);
}

let padNum = (num) => {
  if (num < 10) {
    return '0' + num;
  }
  return String(num);
};

