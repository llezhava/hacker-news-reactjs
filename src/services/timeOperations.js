export function getMsDifference(ms) {
  let currentDate = new Date().getTime();
  let newDate = new Date(ms);
  let compare = currentDate - newDate;
  return compare;
}

export function getTimeDifference(ms) {
  let minutes = Math.floor(ms / 1000 / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  if (minutes < 60) return `${minutes} minutes ago`;
  else if (hours < 24) return `${hours} hours ago`;
  else return `${days} days ago`;
}

export function timesAgo(unix) {
  let ms = unix * 1000;
  let msDifference = getMsDifference(ms);
  let timeDifference = getTimeDifference(msDifference);
  return timeDifference;
}
