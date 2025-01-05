const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector("#hamburger");

/***********************TOGGLE BUTTON *********************** */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

/***********************SHOW SCROLL UP *********************** */

/***********************CHANGE BACKGROUND HEADER *********************** */

/***********************SWIPER *********************** */

/***********************SCROLL SECTIONS ACTIVE LINK *********************** */

/***********************SCROLL REVEAL ANIMATION *********************** */
