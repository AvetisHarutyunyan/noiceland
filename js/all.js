"use strict";window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".darkThemeBtn"),t=document.body,o=document.querySelector(".darkTheme_text");e.forEach((function(e){var s=localStorage.getItem("dark");"enabled"===s?(e.classList.add("toggleActive"),t.classList.add("darkMode"),o.textContent="Light Mode"):(e.classList.remove("toggleActive"),t.classList.remove("darkMode"),o.textContent="Dark Mode"),e.addEventListener("click",(function(){e.classList.contains("toggleActive")?(e.classList.remove("toggleActive"),t.classList.remove("darkMode"),o.textContent="Dark Mode",localStorage.setItem("dark","disabled")):(e.classList.add("toggleActive"),t.classList.add("darkMode"),o.textContent="Light Mode",localStorage.setItem("dark","enabled")),s=localStorage.getItem("dark")}))}));var s=document.querySelector(".navside"),a=document.querySelector(".navBurger");a.addEventListener("click",(function(){a.classList.contains("close")?(a.classList.remove("close"),s.classList.remove("navActive")):(a.classList.add("close"),s.classList.add("navActive"))})),document.getElementById("CopyrightYear").textContent=(new Date).getFullYear()})),window.addEventListener("scroll",(function(){var e=document.querySelector(".header__section"),t=document.querySelector(".navside"),o=document.getElementById("toTopBtn");e.classList.toggle("navHeight",window.scrollY>60),t.classList.toggle("navHeight",window.scrollY>60),o.classList.toggle("toUpBtnActive",window.scrollY>600)}));
//# sourceMappingURL=all.js.map
