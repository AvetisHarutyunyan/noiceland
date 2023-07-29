"use strict";

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".header__section");
    const navPosition = document.querySelector(".navside");
    const toUpArrow = document.getElementById("toTopBtn");
    
    navbar.classList.toggle("navHeight", window.scrollY > 60);
    navPosition.classList.toggle("navHeight", window.scrollY > 60);
    toUpArrow.classList.toggle("toUpBtnActive", window.scrollY > 600);
});