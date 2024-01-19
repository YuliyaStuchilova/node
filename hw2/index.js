function conversionToMinutes(hours, minutes) {
  const result = hours * 60 + minutes;
  console.log(`${hours} ч. ${minutes} мин. = ${result} мин.`);
}

function conversionToHours(minutes) {
  const hour = Math.trunc(minutes / 60);
  const minute = minutes % 60;
  console.log(`${minutes} мин. = ${hour} ч. ${minute} мин.`);
}

function conversionToSeconds(hours, minutes, seconds) {
  const result = hours * 3600 + minutes * 60 + seconds;
  console.log(`${hours} ч. ${minutes} мин. ${seconds} сек. = ${result} сек.`);
}

function conversionToHoursFromSeconds(seconds) {
  const hour = Math.trunc(seconds / 3600);
  const minute = Math.trunc((seconds % 3600) / 60);
  const second = (seconds % 3600) % 60;
  console.log(`${seconds} сек. = ${hour} ч. ${minute} мин. ${second} сек.`);
}

module.exports = {
  conversionToMinutes,
  conversionToHours,
  conversionToSeconds,
  conversionToHoursFromSeconds,
};
