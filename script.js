function updateDigitalClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock();