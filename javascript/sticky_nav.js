function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


const header_logo = document.querySelector("#header_logo");
const nav_cont = document.createElement("div");
const butter_section = document.querySelector("#butter");
const body = document.querySelector("body");
nav_cont.setAttribute("id", "nav_contraction");
nav_cont.innerHTML = "<i class='fas fa-bars'></i>";
const nav_bar = document.querySelector("#nav_bar");
const header = document.querySelector("header");
const header_sticker = document.createElement("div");
header_sticker.setAttribute("id", "header_sticker");
const image_div = document.createElement("div");
image_div.setAttribute("id", "image_sticker");
const image = document.createElement("img");
image.setAttribute("src", "images/icon.png");
image_div.appendChild(image);
const form = document.createElement("form");
const achievement = document.querySelector("#achievement");
const main_header = document.querySelector("#main_header");
const achievement_figure = document.querySelectorAll("#achievement figure");
const achievement_figure_1 = document.querySelector("#achievement figure.years_teaching");
const achievement_figure_2 = document.querySelector("#achievement figure.graduate");
const achievement_figure_3 = document.querySelector("#achievement figure.rank");
const achievement_span = document.querySelectorAll("#achievement span")
setAttributes(form, {
  "action": "https://www.google.com/",
  "method": "get",
  "id": "search_bar_sticker"
});
const input = document.createElement("input");
const ul = document.createElement("ul");
setAttributes(input, {
  "type": "search",
  "name": "search_sticker",
  "placeholder": "Search for document....",
  "autocomplete": "off",
  "style": "display: none;"
});
let check = false;
let check_side_nav = false;
let li = new Array(2);
let a = new Array(2);
let button = new Array(2);
let i_el = new Array(2);


for (let i = 0; i < 2; i++) {
  li[i] = document.createElement("li");
  a[i] = document.createElement("a")
  button[i] = document.createElement("button");
  i_el[i] = document.createElement("i");
  if (i === 0) {
    setAttributes(a[i], {
      "href": "login/login.html",
      "class": "login_sticker",
      "data-tooltip": "Log in"
    });
    setAttributes(button[i], {
      "type": "button",
      "name": "submit_sticker"
    })
    setAttributes(i_el[i], {
      "class": "fas fa-search",
      "style": "font-size: 1.5vw;display:block; padding:0; width:max-content; margin:auto;"
    });
    a[i].innerHTML = "<i class='fas fa-sign-in-alt'></i>";
    form.appendChild(input);
  } else {
    setAttributes(a[i], {
      "href": "signup/signup.html",
      "class": "signup_sticker",
      "data-tooltip": "Sign up"
    });
    setAttributes(button[i], {
      "type": "button",
      "name": "reset_sticker"
    });
    i_el[i].setAttribute("class", "fas fa-times");
    a[i].innerHTML = "<i class='fas fa-user-plus'></i>";
  }
  button[i].appendChild(i_el[i]);
  form.appendChild(button[i]);
  li[i].appendChild(a[i]);
  ul.appendChild(li[i]);
}

header_sticker.appendChild(image_div);
header_sticker.appendChild(form);
header_sticker.appendChild(ul);
body.insertBefore(header_sticker, butter_section);
header_sticker.insertBefore(nav_cont, form);

const search_section1 = document.querySelector("button[name='submit_sticker']");
const input_element1 = document.querySelector("#search_bar_sticker input");
const search_icon1 = document.querySelector("#header_sticker .fa-search");
const bar_icon1 = document.querySelector("#nav_contraction");


search_section1.addEventListener("click", function () {
  check = true;
});




function Sticker() {
  let logo = header_logo.offsetHeight + nav_bar.offsetHeight;
  if (window.pageYOffset > 500) {
    back_top.style.display = "block";
  } else {
    back_top.style.display = "none";
  }
  if (window.pageYOffset >= logo && check_side_nav === false) {
    header_logo.style.display = "none";
    if (!mediaQuery.matches) {
      header_sticker.style.display = "flex";
    }
    header_sticker.style.position = "sticky"
    header_sticker.style.top = "0";
    header_sticker.style.left = "0";
    achievement.style.height = "8vw";
    achievement.style.padding = "2%";
    achievement.style.opacity = "1";
    setTimeout(function () {
      for (let i = 0; i < achievement_figure.length; i++) {
        achievement_figure[i].style.visibility = "visible";
      }
      achievement_figure_1.style.animationName = "ach_fig_move_right";
      achievement_figure_1.style.animationDuration = "1s";
      achievement_figure_1.style.animationTimingFunction = "linear";
      achievement_figure_1.style.animationIterationCount = "1";
      achievement_figure_1.style.animationFillMode = "forwards";
      achievement_figure_2.style.animationName = "ach_fig_move_top";
      achievement_figure_2.style.animationDuration = "2s";
      achievement_figure_2.style.animationTimingFunction = "linear";
      achievement_figure_2.style.animationIterationCount = "1";
      achievement_figure_2.style.animationFillMode = "forwards";
      achievement_figure_3.style.animationName = "ach_fig_move_left";
      achievement_figure_3.style.animationDuration = "3s";
      achievement_figure_3.style.animationTimingFunction = "linear";
      achievement_figure_3.style.animationIterationCount = "1";
      achievement_figure_3.style.animationFillMode = "forwards";
      setTimeout(function () {
        for (let j = 0; j < achievement_span.length; j++) {
          achievement_span[j].style.animation = "glow 1s ease infinite alternate"
        }
      }, 3500);
    }, 1500)
  }
  if (window.pageYOffset === 0) {
    header_sticker.style.display = "none";
    header_logo.style.display = "flex";
    main_section.style.marginLeft = "";
    div_side_nav.style.width = "0";
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
    hero_link_a[0].style.fontSize = "1.2vw";
    hero_link_a[1].style.fontSize = "1.2vw";
    check_side_nav = false;
    if (check) {
      input_element1.style.display = "none";
      input_element1.style.animationName = "";
      search_section1.style.transition = "";
      search_section1.style.transform = "";
      bar_icon1.style.transition = "";
      bar_icon1.style.transform = "";
      search_icon1.style.color = "white";
      search_section1.style.backgroundColor = "transparent";
      search_section1.setAttribute("type", "button");
      input_element1.value = "";
      check = false;
    }
  }
}

window.onscroll = function () {
  Sticker();
  adjust_device(mediaQuery);
  mediaQuery.addEventListener("change", adjust_device);
};