var reasons= [ " Mrs.Pooja goyal","Devna goyal","Samvit goyal"];
var images= ["WhatsApp Image 2021-06-08 at 8.02.42 PM.jpeg","WhatsApp Image 2021-06-08 at 7.52.12 PM.jpeg","WhatsApp Image 2021-06-08 at 7.58.37 PM.jpeg"];
var i = 0;
function Change1(){
document.getElementById("p1").innerHTML=  reasons[i];
  document.getElementById("Img1").src= images[i];
i++;}