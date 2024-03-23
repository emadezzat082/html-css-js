let bars = document.getElementById("menu");
console.log(bars);
let menu = document.querySelector(".navlinks");
let closeMenu = document.querySelector(".fa-xmark");
let submit = document.querySelector("#submit");
console.log(menu);
console.log(closeMenu);
function show() {
  menu.style.visibility = "visible";

  menu.style.transitionDuration = "1s";
}
function closeMenuF() {
  menu.style.visibility = "hidden";
  menu.style.transitionDuration = "0.5s";
}
submit.addEventListener("click", function (event) {
  event.preventDefault();
});
