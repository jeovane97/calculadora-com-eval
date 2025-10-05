const paragrafo=document.querySelector(".paragrafo")
const btnwhite=document.getElementById("white")
const btnblack=document.getElementById("black")
const body=document.querySelector("body")
const main=document.querySelector("main")
const button=document.querySelectorAll(".zero")
const dragon=document.getElementById('dragon')
const video=document.getElementById('vid')
const vid=document.getElementById('vid2')
const vid2=document.getElementById('vid3')
const cap=document.getElementById('cap')
let color=''

function primeiro(value){
  paragrafo.value=paragrafo.value+value
   }

function del(){

paragrafo.value=''
}
function apagar(){
if( paragrafo.value.length > 0){
  paragrafo.value=paragrafo.value.slice(0,-1)
  }
}
function calc(){
  const paragrafo=document.querySelector(".paragrafo").value
document.querySelector(".paragrafo").value= eval(paragrafo)

}
function colors(value){
  color=value
switch (color) {
  case 'black':
     paragrafo.style.backgroundColor='rgb(215 220 216)';
paragrafo.style.transition='2s';
video.style.display='none';
vid.style.display='none';
vid2.style.display='none';
    body.style.transition='2s';
     body.style.backgroundColor=' rgb(0 0 0)';
      main.style.backgroundImage='none';
  main.style.backgroundColor='rgb(11, 56, 1)';
  button.forEach(btn=>{
    btn.style.backgroundColor='rgba(69 188 44)';
    btn.style.transition='2s'
  });


    break;

    case 'white':
  paragrafo.style.backgroundColor='rgb(215 220 216)';
paragrafo.style.transition='2s';
video.style.display='none';
vid.style.display='none';
vid2.style.display='none';
 body.style.backgroundColor='white';
  body.style.transition='2s';
  main.style.backgroundImage='none';
  main.style.backgroundColor='rgb(121 172 250)';
  main.style.transition='2s';
  button.forEach(btn=>{
    btn.style.backgroundColor='rgb(23, 141, 141)';
    btn.style.transition='2s';
  });

   break;
      case 'img':
        video.src="./assets/200004-911902097_small.mp4";
        video.style.display="block"; 
        video.style.transition='2s';
        vid.style.display='none';
        vid2.style.display='none';
         main.style.backgroundImage='none';
        main.style.backgroundColor='transparent';
        main.style.transition='2s';
         button.forEach(btn=>{
    btn.style.backgroundColor='transparent';
    btn.style.transition='2s';
  });
  paragrafo.style.backgroundColor='transparent';
  paragrafo.style.transition='2s';

  

   break;
    case 'vid':
        vid.src="./assets/856882-hd_1920_1080_24fps.mp4";
        vid.style.display="block"; 
        vid.style.transition='2s';
        video.style.display='none';
        vid2.style.display='none';
         main.style.backgroundImage='none';
        main.style.backgroundColor='transparent';
        main.style.transition='2s';
         button.forEach(btn=>{
    btn.style.backgroundColor='transparent';
    btn.style.transition='2s';
  });
  paragrafo.style.backgroundColor='transparent';
  paragrafo.style.transition='2s';

 

   break;
       case 'cap':
  paragrafo.style.backgroundColor='transparent';
paragrafo.style.transition='2s';
video.style.display='none';
vid2.style.display='block';
vid2.src='./assets/3141205-uhd_3840_2160_25fps.mp4';
 body.style.backgroundColor='white';
  body.style.transition='2s';
  main.style.backgroundImage='url(./assets/d7150514dc585f1629238a15c14b550b.jpg)';
  main.style.backgroundSize='cover';
  main.style.backgroundPosition='center';
  main.style.backgroundRepeat='no-repeat';
  main.style.transition='2s';
  button.forEach(btn=>{
    btn.style.backgroundColor='transparent';
    btn.style.transition='2s';
    
  });

   break;

  default:
    break;
}


 
}
