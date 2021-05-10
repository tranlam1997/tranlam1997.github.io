const span_head = document.querySelectorAll("#welcome h1 span");
const span_para = document.querySelectorAll("#welcome p span");
const welcome_h1 = document.querySelector("#welcome h1");
const welcome_p = document.querySelector("#welcome p");
const part_1 = document.querySelector("#part_1");


document.addEventListener("click", function (e) {
    console.log(e.target);
})

window.onload = function () {
    setTimeout(function () {
        for (let i = 0; i < span_head.length; i++) {
            span_head[i].style.animationName = "move_right";
            span_head[i].style.animationDuration = (1 + i / 10) + "s";
            span_head[i].style.animationDelay = "-0.1s";
            span_head[i].style.animationTimingFunction = "ease";
            span_head[i].style.animationIterationCount = "1";
            span_head[i].style.animationFillMode = "forwards";
            span_head[i].style.visibility = "visible";
        }

        setTimeout(function () {
            for (let i = 0; i < span_head.length; i++) {
                span_head[i].style.animationName = "underline";
                span_head[i].style.animationDuration = (1 + i / 10) + "s";
                span_head[i].style.animationTimingFunction = "ease";
                span_head[i].style.animationIterationCount = "1";
                span_head[i].style.animationFillMode = "forwards";
            }
        }, 4200);

        setTimeout(function () {
            welcome_h1.style.textDecoration = "underline";
            for (let i = 0; i < span_head.length; i++) {
                span_head[i].style.animationName = "change_color";
                span_head[i].style.animationDuration = (1 + i /100) + "s";
                span_head[i].style.animationTimingFunction = "linear";
                span_head[i].style.animationIterationCount = "infinite";
                span_head[i].style.animationFillMode = "forwards";
            }

            for (let i = 0; i < span_para.length; i++) {
                span_para[i].style.animationName = "move_down";
                span_para[i].style.animationDuration = (1 + i / 100) + "s";
                span_para[i].style.animationTimingFunction = "linear";
                span_para[i].style.animationIterationCount = "1";
                span_para[i].style.animationFillMode = "forwards";
                span_para[i].style.visibility = "visible";
            }

            setTimeout(function(){
                const hero_link = document.querySelector("#hero-link");
                hero_link.style.display = "flex";
            },2000);

        }, 7000);


        setTimeout(function () {
            part_1.style.animation = "part_1_spin 1s 1s infinite, part_1_appear 1.5s 3s 1  forwards, part_1_move 3s 1  forwards";
            setTimeout(function () {
                part_1.style.animation = "part_1_appear_again 2s 1 forwards";
            }, 3500);
        }, 2500);
        document.body.style.pointerEvents = "visible";
        document.body.style.overflow = "visible";
    }, 2000);
};