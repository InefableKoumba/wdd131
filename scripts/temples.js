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

const toggeleButtons = document.querySelectorAll(".toggle-menu");

toggeleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("mobile-menu-container").classList.toggle("hide");
  });
});
