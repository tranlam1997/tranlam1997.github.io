
  const div_welcome = document.querySelector("#welcome")
  const back_top = document.querySelector("#back_to_top");
  let heading_1 = document.createElement("h1")
  let para = document.createElement("p");

  let content_h1 = "Foreign Language Center";
  let content_para = "This is the place where you will be aroused and develop your foreign language talent"


  for(let i = 0; i < content_h1.length; i++){
   
    heading_1.innerHTML += "<span>" + content_h1[i] + "</span>" ;
  }

  for(let i = 0; i < content_para.length; i++){
    para.innerHTML += "<span>" + content_para[i] + "</span>" ;
  }

  div_welcome.appendChild(heading_1);
  div_welcome.appendChild(para);




 