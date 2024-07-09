const currentyear = new Date().getFullYear();
const lastModified =
  new Date(document.lastModified).getUTCDate() +
  "/" +
  (new Date(document.lastModified).getUTCMonth() + 1) +
  "/" +
  new Date(document.lastModified).getUTCFullYear() +
  " " +
  new Date(document.lastModified).getUTCHours() +
  ":" +
  new Date(document.lastModified).getUTCMinutes() +
  ":" +
  new Date(document.lastModified).getUTCSeconds() +
  " UTC";
document.getElementById("currentyear").textContent = currentyear;
document.getElementById("lastModified").textContent =
  "Last modification " + lastModified;

const tempCelsius = 10;
const windSpeedKph = 5;

function calculateWindChill(tempCelsius, windSpeedKph) {
  return (
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windSpeedKph, 0.16) +
    0.3965 * tempCelsius * Math.pow(windSpeedKph, 0.16)
  ).toFixed(2);
}

document.getElementById("windChill").textContent =
  tempCelsius <= 10 && windSpeedKph > 4.8
    ? calculateWindChill(tempCelsius, windSpeedKph) + " °C"
    : "N/A";
