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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Apia Samoa Temple",
    location: "Apia, Pesega, Samoa",
    dedicated: "5, August, 1983",
    area: 8100,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x450/apia-samoa-temple-lds-495972-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Greater Accra, Ghana",
    dedicated: "2004, January, 1",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg",
  },
  {
    templeName: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/800x500/albuquerque-temple-lds-137883-wallpaper.jpg",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const filter = urlParams.get("filter");
let filteredTemples = [];
switch (filter) {
  case "old":
    filteredTemples = temples.filter((temple) => {
      return temple.dedicated.split(",")[0] < 1900;
    });
    break;
  case "new":
    filteredTemples = temples.filter((temple) => {
      return temple.dedicated.split(",")[0] > 2000;
    });
    break;
  case "large":
    filteredTemples = temples.filter((temple) => {
      return temple.area > 90000;
    });
    break;
  case "small":
    filteredTemples = temples.filter((temple) => {
      return temple.area < 10000;
    });
    break;
  default:
    filteredTemples = temples;
}

document.getElementById("temples").innerHTML = "";
for (let i = 0; i < filteredTemples.length; i++) {
  let temple = filteredTemples[i];
  let templeCard = document.createElement("figure");
  templeCard.classList.add("temple-card");
  templeCard.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} square feet</p>
    `;
  document.getElementById("temples").appendChild(templeCard);
}
