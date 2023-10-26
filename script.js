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

const year = new Date().getFullYear();
const currentYearEl = document.querySelector("#year");
const experienceYearsEl = document.querySelector("#experience-years")
currentYearEl.innerText = year;
experienceYearsEl.innerText = year - 2020;