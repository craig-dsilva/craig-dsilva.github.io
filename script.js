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
