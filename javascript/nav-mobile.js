
const search_mobile_button = document.querySelector(".search-mobile button");
const search_mobile_input = document.querySelector(".search-mobile input");
const close_nav_mobile = document.querySelector(".close-nav-mobile");
const nav_mobile = document.querySelector("#nav-mobile");
const sub_mobi = document.querySelector(".sub-mobi");
const sub_menu_mobi = document.querySelector(".sub-menu-mobi");
const triangle_down = document.querySelector(" span.triangle-down");
const triangle_up = document.querySelector(" span.triangle-up");

search_mobile_button.addEventListener("click", function () {
    search_mobile_input.style.display = "inline-block";
    search_mobile_input.style.width = "100%";
    search_mobile_button.style.display = "none";
});


close_nav_mobile.addEventListener("click", function () {
    nav_mobile.style.display = "none";
    nav_mobile_icon.style.display = "block";
    search_mobile_button.style.display = "block";
    search_mobile_input.style.display = "none";
    sub_menu_mobi.style.display = "none";
    triangle_down.style.display = "inline";
    triangle_up.style.display = "none";
});

nav_mobile_icon.addEventListener("click", function () {
    nav_mobile.style.display = "block";
    nav_mobile_icon.style.display = "none";
});

sub_mobi.addEventListener("click", function () {
    if (sub_menu_mobi.style.display === "none") {
        sub_menu_mobi.style.display = "block";
        triangle_down.style.display = "none";
        triangle_up.style.display = "inline";
    } else {
        sub_menu_mobi.style.display = "none";
        triangle_down.style.display = "inline";
        triangle_up.style.display = "none";
    }
});