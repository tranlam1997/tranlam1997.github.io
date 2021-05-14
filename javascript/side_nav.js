const div_side_nav = document.createElement("div");
const div_close = document.createElement("div");
const div_a = document.createElement("div");
const content = ["Home", "News", "About", "Courses", "Learning area", "Contact"];
const bar_logo = document.querySelector("#nav_contraction i");
const main_section = document.querySelector("#main");
const introduction_1_h1 = document.querySelector("#introduction_1 h1");
const introduction_1_p = document.querySelector("#introduction_1 p")
const media_p = document.querySelector("#media p");
const follow_p = document.querySelector(".follow-us > p");
const follow_a = document.querySelectorAll("#media a");
const follow_us = document.querySelector(".follow-us");
const achievement_fas = document.querySelectorAll("#achievement .fas");
const achievement_figcaption = document.querySelectorAll("#achievement figcaption");

const offset = document.querySelector("#offset");


const mask = document.querySelector("#mask");
const image_img = document.querySelector("#image img");
div_close.innerHTML = "<i class='fas fa-times'></i>";
div_close.setAttribute("id", "close_icon");
div_a.setAttribute("id", "div_a");


for (let i = 0; i < content.length; i++) {
    const a_el = document.createElement("a");
    a_el.setAttribute("href", "#");
    a_el.textContent = content[i];
    div_a.appendChild(a_el);
}

div_side_nav.setAttribute("id", "left_side_nav");
body.insertBefore(div_side_nav, butter_section);
div_side_nav.appendChild(div_a);
div_side_nav.appendChild(div_close);


const close_icon = document.querySelector("#close_icon");


function show_side_nav() {
    header_sticker.style.display = "none";
    main_section.style.transition = "margin-left 0.8s";
    main_section.style.marginLeft = "20%";
    mask.style.display = "block";
    div_side_nav.style.width = "20%";
    introduction_1_h1.style.fontSize = "150%";
    introduction_1_p.style.fontSize = "100%";
    media_p.style.fontSize = "1vw";
    follow_p.style.fontSize = "1vw";
    for (let i = 0; i < follow_a.length; i++) {
        follow_a[i].style.fontSize = "1vw";
    }
    follow_us.style.gap = "5%"
    for (let i = 0; i < achievement_fas.length; i++) {
        achievement_fas[i].style.fontSize = "2.5vw";
        achievement_figcaption[i].style.fontSize = "1.2vw";
    }
    offset.style.display = "none";
    close_icon.style.display = "block";
    achievement.style.height = "6vw";
    check_side_nav = true;
}


bar_icon.addEventListener("click", show_side_nav);

document.addEventListener("click", function (e) {
    console.log(e.target);
    if ((e.target !== div_side_nav) && (e.target !== bar_icon) && (e.target !== bar_logo)) {
        div_side_nav.style.width = "0";
        main_section.style.marginLeft = "";
        div_side_nav.style.width = "";
        introduction_1_h1.style.fontSize = "3vw";
        introduction_1_p.style.fontSize = "1.5vw";
        media_p.style.fontSize = "1.2vw";
        follow_p.style.fontSize = "1.2vw";
        for (let i = 0; i < follow_a.length; i++) {
            follow_a[i].style.fontSize = "1.2vw";
        }
        follow_us.style.gap = "15%"
        for (let i = 0; i < achievement_fas.length; i++) {
            achievement_fas[i].style.fontSize = "3.5vw";
            achievement_figcaption[i].style.fontSize = "1.6vw";
        }
        mask.style.display = "none";
        offset.style.display = "block";
        close_icon.style.display = "none";
        achievement.style.height = "8vw";
        check_side_nav = false;
    }
});

close_icon.addEventListener("click", function () {
    close_icon.style.display = "none";
});