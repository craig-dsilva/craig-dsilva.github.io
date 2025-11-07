const toggleNav = () => {
  const nav = document.querySelector("#nav");
  const intro = document.querySelector(".intro");
  if (nav.style.display === "block") {
    nav.style.display = "none";
    intro.style.paddingTop = "25%";
  } else {
    nav.style.display = "block";
    intro.style.paddingTop = "0";
  }
};

const darkMode = () => {
  const black = "#000";
  const white = "#fff";

  const body = document.querySelector("body");
  const a = document.querySelectorAll("a");
  const hamburger = document.querySelector(".hamburger");
  const icon = document.querySelector(".icon");

  const manipulate = (theme) => {
    const themeToggle = document.querySelectorAll(".theme-toggle");

    themeToggle.forEach((el) => {
      el.src =
        theme === "light" ? "assets/dark-mode.svg" : "assets/light-mode.svg";
    });

    body.style.backgroundColor = theme === "dark" ? black : white;
    body.style.color = theme === "dark" ? white : black;

    a.forEach((el) => {
      el.style.color = theme === "dark" ? white : black;
    });

    hamburger.style.backgroundColor = theme === "dark" ? black : white;
    hamburger.style.color = theme === "dark" ? white : black;
    icon.style.backgroundColor = theme === "dark" ? black : white;
  };

  if (body.style.backgroundColor === "rgb(255, 255, 255)") {
    manipulate("dark");
  } else if (body.style.backgroundColor === "rgb(0, 0, 0)") {
    manipulate("light");
  }
};

const year = new Date().getFullYear();
const currentYearEl = document.querySelector("#year");
// const experienceYearsEl = document.querySelector("#experience-years");
currentYearEl.innerText = year;
// experienceYearsEl.innerText = year - 2020;
