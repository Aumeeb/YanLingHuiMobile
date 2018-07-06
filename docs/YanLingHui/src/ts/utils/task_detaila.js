let input = document.getElementById("input12");
let img = document.getElementsByTagName("img")[0];
input.onchange=()=>{
    let ifles = document.getElementsByTagName("input")[0].files[0];;
    let src = getObjectURL(ifles);
    img.src = src;
    img.onload=function(){
        this.style.display="block";
    }
}

function getObjectURL(file) { 
    var url = null; 
    if (window.createObjectURL != undefined) { // basic 
     url = window.createObjectURL(file); 
    } else if (window.URL != undefined) { // mozilla(firefox) 
     url = window.URL.createObjectURL(file); 
    } else if (window.webkitURL != undefined) { // webkit or chrome 
     url = window.webkitURL.createObjectURL(file); 
    } 
    return url; 
   } 