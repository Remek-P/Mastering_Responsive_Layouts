
const header = document.getElementById("header");
let menuType;

const menu = () => {
  header.insertAdjacentHTML("beforeend", `
<nav class="nav">
    <a href=""><img class="logo" src="./img/logo.svg" alt="logo"/></a>
    <ul class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
      <li class="nav__item"><a href="#" class="nav__link">About</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
    </ul>
    <ul class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Sign In</a></li>
      <li class="nav__item"><a href="#" class="nav__link nav__link--button">Sign Up</a></li>
    </ul>
  </nav>
`)
};

const hamburger = () => {
  header.insertAdjacentHTML("beforeend", `
<nav class="nav-ham">
    <a href=""><img class="" src="./img/logo.svg" alt="logo"/></a>
        <ul class="">
          <li class=""><a href="#" class="">Home</a></li>
          <li class=""><a href="#" class="">About</a></li>
          <li class=""><a href="#" class="">Contact</a></li>
          <li class=""><a href="#" class="">Sign In</a></li>
          <li class=""><a href="#" class="nav__link nav-ham__link--button">Sign Up</a></li>
        </ul>
  </nav>
`)
};

let checkWidth = () => {
  return window.innerWidth
}

const displayMenu = () => {

  if (checkWidth() >= 850 && menuType === undefined) {
    menu();
    menuType = "menu"
  } else if (checkWidth() < 850 && menuType === undefined) {
    hamburger();
    menuType = "hamburger"
  } else if (checkWidth() < 850 && menuType === "menu") {
    document.querySelector(".nav").remove();
    hamburger();
    menuType = "hamburger"
  } else if (checkWidth() >= 850 && menuType === "hamburger") {
    document.querySelector(".nav-ham").remove();
    menu();
    menuType = "menu"
  } else {
    return
  }
  console.log(window.innerWidth)
};

displayMenu();
window.onresize = displayMenu;

