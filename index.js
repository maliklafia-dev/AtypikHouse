/* navbar responsive config */
hamburgerButton = document.querySelector(".header__nav-toggler");
column61 = document.querySelector(".column61");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  column61.classList.toggle("active");
});

/* hide menu when users click on link */
const links = document.querySelectorAll("link-one15");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    column61.classList.remove("active");
  });
});
