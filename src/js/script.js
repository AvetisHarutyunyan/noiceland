window.addEventListener("DOMContentLoaded", () => {
    const modToggle = document.querySelectorAll(".darkThemeBtn");
    const darkMode = document.body;
    const toggleText = document.querySelector(".darkTheme_text");

    let local = localStorage.getItem("dark");

    modToggle.forEach(item => {

        if (local === "enabled") {
            item.classList.add("toggleActive");
            darkMode.classList.add("darkMode");
            toggleText.textContent = "Light Mode";
        } else {
            item.classList.remove("toggleActive");
            darkMode.classList.remove("darkMode");
            toggleText.textContent = "Dark Mode";
        }

        item.addEventListener("click", () => {
            if (!item.classList.contains("toggleActive")) {
                item.classList.add("toggleActive");
                darkMode.classList.add("darkMode");
                toggleText.textContent = "Light Mode";
            } else {
                item.classList.remove("toggleActive");
                darkMode.classList.remove("darkMode");
                toggleText.textContent = "Dark Mode";
            }

            local = localStorage.getItem("dark");
            if (local === "disabled") {
                item.classList.add("toggleActive");
                darkMode.classList.add("darkMode");
                toggleText.textContent = "Light Mode";

                localStorage.setItem("dark", "enabled");
            } else {
                item.classList.remove("toggleActive");
                darkMode.classList.remove("darkMode");
                toggleText.textContent = "Dark Mode";

                localStorage.setItem("dark", "disabled");
            }

        });
    });

    const nav = document.querySelector(".navside");
    const burger = document.querySelector(".navBurger");

    burger.addEventListener("click", () => {
        if (!burger.classList.contains("close")) {
            burger.classList.add("close");
            nav.classList.add("navActive");
        } else {
            burger.classList.remove("close");
            nav.classList.remove("navActive");
        }
    });

    const years = document.getElementById("CopyrightYear");
    years.textContent = new Date().getFullYear();
});