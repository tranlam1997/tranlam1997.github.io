const input_area = document.querySelector("#search_bar input[name='search']");
const search = document.querySelector("#search_bar button[name='submit']");
const reset = document.querySelector("#search_bar button[name='reset']");

input_area.addEventListener("input",function(){
    if(input_area.value !== ""){
    reset.style.display = "block";
    reset.style.borderTop = ".3vw solid #1E90FF";
    reset.style.borderBottom = ".3vw solid #1E90FF";
    
    }else{
        reset.style.display = "none";
    }
});

reset.addEventListener("click",function(){
    input_area.value = "";
    reset.style.display = "none"
});

input_area.addEventListener("focus",function(){
    search.style.borderRight = ".3vw solid #1E90FF";
    search.style.borderTop = ".3vw solid #1E90FF";
    search.style.borderBottom = ".3vw solid #1E90FF";
    reset.style.borderTop = ".3vw solid #1E90FF";
    reset.style.borderBottom = ".3vw solid #1E90FF";
});

input_area.addEventListener("focusout",function(){
    search.style.borderRight = "";
    search.style.borderTop = "";
    search.style.borderBottom = "";
    reset.style.borderTop = "";
    reset.style.borderBottom = "";
});




