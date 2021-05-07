let slideIndex2 = 0;
let slides2 = document.querySelectorAll(".mySlides2");
let dot2 = document.querySelectorAll(".dot2");

function showSlides2(n) {
    let i;
    slideIndex2 += n;
    if (slideIndex2 > slides2.length) {
      slideIndex2 = 1;
    }
    if (slideIndex2 < 1) {
      slideIndex2 = slides2.length;
    }
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    for (i = 0; i < dot2.length; i++) {
      dot2[i].className = dot2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dot2[slideIndex2 - 1].className += " active";
  }
  
  function showSlidesAuto2() {
    let i;
    slideIndex2++;
    if (slideIndex2 > slides2.length) {
      slideIndex2 = 1;
    }
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    for (i = 0; i < dot2.length; i++) {
      dot2[i].className = dot2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dot2[slideIndex2 - 1].className += " active";
    setTimeout(showSlidesAuto2, 3000);
  }
  showSlidesAuto2();
  
  for (let i = 0; i < dot2.length; i++) {
    dot2[i].addEventListener("click", function () {
      showSlides2(i + 1 - slideIndex2);
    });
  }