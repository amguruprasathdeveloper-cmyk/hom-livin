const hero = document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.clientX)/60;

    let y = (window.innerHeight/2 - e.clientY)/60;

    hero.style.transform =
    `scale(1.08) translate(${x}px,${y}px)`;

});
const room=document.getElementById("room3d");

if(room){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

room.style.transform=`
rotateY(${x}deg)
rotateX(${-y}deg)
scale(1.05)
`;

});

}const bookBtns = document.querySelectorAll(".btn");

bookBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector("#contact").scrollIntoView({

            behavior: "smooth"

        });

    });

});
