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
  const body = document.querySelector("body");
  const a = document.querySelectorAll("a");
  const hamburger = document.querySelector(".hamburger");
  const icon = document.querySelector(".icon");

  body.style.backgroundColor = "#000";
  body.style.color = "#fff";

  a.forEach((el) => {
    el.style.color = "#fff";
  });

  hamburger.style.backgroundColor = "#000";
  hamburger.style.color = "#fff";
  icon.style.backgroundColor = "#000";
};

const year = new Date().getFullYear();
const currentYearEl = document.querySelector("#year");
// const experienceYearsEl = document.querySelector("#experience-years");
currentYearEl.innerText = year;
// experienceYearsEl.innerText = year - 2020;
