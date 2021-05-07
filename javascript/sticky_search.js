 const search_section = document.querySelector("button[name='submit_sticker']");
 const input_element = document.querySelector("#search_bar_sticker input");
 const search_icon = document.querySelector("#header_sticker .fa-search");
 const bar_icon = document.querySelector("#nav_contraction");



 search_section.onclick = function () {
     if (input_element.style.display === "none") {
         input_element.style.display = "block";
         input_element.style.animation = "emerge 1s 1 forwards";
         search_section.style.transition = "transform 1s";
         search_section.style.transform = "translateX(25vw)";
         bar_icon.style.transition = "transform 0.8s";
         bar_icon.style.transform = "translateX(30vw)";
         search_icon.style.color = "#0b8793";
         search_section.style.backgroundColor = "white";
         setTimeout(function () {
             search_section.setAttribute("type", "submit");
         }, 100);
     }
 }

 document.addEventListener("click", function (e) {
     if ((e.target !== input_element) && (e.target !== search_section) && (e.target !== search_icon)) {
         setTimeout(function () {
             input_element.style.display = "none";
         }, 800);
         input_element.style.animation = "disappear 1s 1 forwards";
         input_element.value = "";
         search_section.style.transform = "";
         bar_icon.style.transform = "";
         search_icon.style.color = "white";

         search_section.style.backgroundColor = "transparent";
         search_section.setAttribute("type", "button");
     }
 });


 