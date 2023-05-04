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
<nav class="nav nav-ham">
  <a href=""><img class="ham-logo" src="./img/logo.svg" alt="logo"/></a>
  <input id="checkbox" class="nav-ham__input" type="checkbox" />
  <label class="nav-ham--label" for="checkbox"></label>
  <ul class="nav__list nav-ham__list">
      <li class="nav__item"><a href="#" class="nav__link nav-ham__link">Home</a></li>
      <li class="nav__item"><a href="#" class="nav__link nav-ham__link">About</a></li>
      <li class="nav__item"><a href="#" class="nav__link nav-ham__link">Contact</a></li>
      <li class="nav__item"><a href="#" class="nav__link nav-ham__link">Sign In</a></li>
      <li class="nav__item"><a href="#" class="nav__link nav__link--button">Sign Up</a></li>
   </ul>
</nav>
`)
};

let checkWidth = () => {
  return window.innerWidth
}

const displayMenu = () => {
  const windowBreakpoint = 850

  if (checkWidth() >= windowBreakpoint && menuType === undefined) {
    menu();
    menuType = "menu"
  } else if (checkWidth() < windowBreakpoint && menuType === undefined) {
    hamburger();
    menuType = "hamburger"
  } else if (checkWidth() < windowBreakpoint && menuType === "menu") {
    document.querySelector(".nav").remove();
    hamburger();
    menuType = "hamburger"
  } else if (checkWidth() >= windowBreakpoint && menuType === "hamburger") {
    document.querySelector(".nav-ham").remove();
    menu();
    menuType = "menu"
  } else {
    return
  }
};

displayMenu();
// check if user resized window or switched landscape/portrait view
window.onresize = displayMenu;

