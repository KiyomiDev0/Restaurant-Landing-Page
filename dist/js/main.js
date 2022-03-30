let fixedNav = document.querySelector("#header > .container");

window.onscroll = fixedNavFn;

// if the window scrolls more than the height of the info bar make the position of navbar fixed
function fixedNavFn() {
   let wY = window.scrollY;
   if (wY > 48) {
      fixedNav.classList.add("fixedNav")
   } else fixedNav.classList.remove("fixedNav")
}

// customizing the nav menu for small screens
// select menu button
let menuBtn = document.querySelector(".menu-btn");

// select nav ul 
let navUl = document.querySelector("nav ul");

// select the ul layer
let ulLayer = document.querySelector("nav .layer");

// close menu button
let exitMenu = document.querySelector("nav .exit-menu");

menuBtn.addEventListener("click", () => {
   ulLayer.classList.add("show")
   navUl.classList.add("col-ul");
   body.style.overflow = "hidden"
});

exitMenu.addEventListener("click", () => {
   ulLayer.classList.remove("show");
   navUl.classList.remove("col-ul");
   body.style.overflow = "auto"
})