const btnTgl = document.querySelector("#c-button-tgl");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.querySelector(".c-site-nav");
const mobileNavMenu = document.querySelector(".mobile_nav_menu");
// const bar = document.querySelector(".bar");
const hamburger_tp = document.querySelector(".top");
const hamburger_md = document.querySelector(".middle");
const hamburger_bt = document.querySelector(".bottom");


btnTgl.addEventListener("click", (event) => {
     mobileNavMenu.classList.toggle("open_state");
     //siteHeader.classList.toggle("fixed-menu");
     siteNav.classList.toggle("open-menu");
     hamburger_tp.classList.toggle("top_open");
     hamburger_md.classList.toggle("middle_open");
     hamburger_bt.classList.toggle("bottom_open");
});
