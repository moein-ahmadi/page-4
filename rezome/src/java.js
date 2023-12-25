// menu
let myMenuClickEl = document.getElementById("myMenuClick");
const menuClick = (x) => {
  x.classList.toggle("change");
  if (myMenuClickEl.style.display === "block") {
    myMenuClickEl.style.display = "none";
  } else {
    myMenuClickEl.style.display = "block";
  }
};

// menu

// navbar
const headerEl = document.querySelector(".header-nav");
const headerDivEl = document.querySelector(".header-text");

window.addEventListener("scroll", () => {
  if (window.scrollY > headerDivEl.offsetTop - headerEl.offsetHeight - 5) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
});
// navbar
// -----------------------
