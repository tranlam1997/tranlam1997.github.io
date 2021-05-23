const test_1 = document.querySelector("#test-level div:first-child div:first-child");
const test_2 = document.querySelector("#test-level div:first-child div:nth-child(2)");
const mediaQuery = window.matchMedia("(max-width: 500px)");
const nav_mobile_icon = document.querySelector("#nav-mobile-icon");


function adjust_device(mediaQuery){
    if(mediaQuery.matches){
        offset.style.display = "none";
        nav_mobile_icon.style.display = "block";
        if(window.pageYOffset > 100){
            test_1.style.animation = "rise-up-1 3s linear 1 forwards";
            test_2.style.animation = "rise-up-2 3s linear 1 forwards";
        }
    } else{
        nav_mobile_icon.style.display = "none";
    if(window.pageYOffset > 1350){
        
        test_1.style.animation = "rise-up-1 3s linear 1 forwards";
        test_2.style.animation = "rise-up-2 3s linear 1 forwards";
    }
}
}
