const menuToggle = document.querySelector("div[class='menu-toggle']");
const menu = document.querySelector("ul[class='menu']");
const bar = document.querySelectorAll("div[class='bar']");
const logo = document.querySelector("img");
const main = document.querySelector("main");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    bar[0].classList.toggle("first");
    bar[1].classList.toggle("middle");
    bar[2].classList.toggle("last");
    logo.classList.toggle("op");
    main.classList.toggle("op")
});