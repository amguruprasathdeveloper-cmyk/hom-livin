const cursor=document.querySelector(".cursor");
const dot=document.querySelector(".cursor-dot");
const text=document.querySelector(".cursor-text");

let mouseX=0;
let mouseY=0;

let cursorX=0;
let cursorY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

dot.style.left=mouseX+"px";
dot.style.top=mouseY+"px";

});

function animateCursor(){

cursorX+=(mouseX-cursorX)*0.18;
cursorY+=(mouseY-cursorY)*0.18;

cursor.style.left=cursorX+"px";
cursor.style.top=cursorY+"px";

requestAnimationFrame(animateCursor);

}

animateCursor();

/* Buttons */

document.querySelectorAll("button,.btn,.hero-btn").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("book");

cursor.classList.remove("view");

text.innerHTML="BOOK";

});

item.addEventListener("mouseleave",()=>{

cursor.className="cursor";

text.innerHTML="";

});

});

/* Images */

document.querySelectorAll("img").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("view");

cursor.classList.remove("book");

text.innerHTML="VIEW";

});

item.addEventListener("mouseleave",()=>{

cursor.className="cursor";

text.innerHTML="";

});

});