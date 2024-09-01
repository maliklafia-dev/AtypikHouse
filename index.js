/* navbar responsive config */
hamburgerButton = document.querySelector(".header__nav-toggler");
column61 = document.querySelector(".column61");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  column61.classList.toggle("active");
});

/* hide menu when users click on link */
const links = document.querySelectorAll("link-one15");

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    column61.classList.remove("active");
  });
});

/*Profil popup*/

const profilIcon = document.getElementById("profilIcon");

profilIcon.addEventListener("click", () => {
  const profilContainer = document.getElementById("profilContainer");
  profilContainer.classList.toggle("active");
});

/*Gestion des coockies*/
document.addEventListener("DOMContentLoaded", function () {
  const consentGiven = localStorage.getItem("cookieConsent");
  if (!consentGiven) {
    document.getElementById("cookie-consent-popup").style.display = "block";
  }
});

document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    document.getElementById("cookie-consent-popup").classList.toggle("active");
    // Placez ici le code pour activer les cookies ou services qui nécessitent le consentement
  });

document
  .getElementById("decline-cookies")
  .addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    document.getElementById("cookie-consent-popup").classList.toggle("active");
    // Placez ici le code pour désactiver les cookies ou services qui nécessitent le consentement
  });

if (localStorage.getItem("cookieConsent") === "accepted") {
  // Initialiser Google Analytics ici
}
