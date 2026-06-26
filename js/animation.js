window.addEventListener("load",()=>{

gsap.from(".navbar",{

    y:-100,

    opacity:0,

    duration:1.2,

    ease:"power4.out"

});

gsap.from(".hero h1",{

    y:120,

    opacity:0,

    duration:1.5,

    delay:.4,

    ease:"power4.out"

});

gsap.from(".hero p",{

    y:80,

    opacity:0,

    duration:1.3,

    delay:.8,

    ease:"power4.out"

});

gsap.from(".hero-btn",{

    y:50,

    opacity:0,

    duration:1,

    delay:1.2,

    ease:"power4.out"

});

gsap.from(".hero-image",{

    scale:1.25,

    duration:2.5,

    ease:"power2.out"

});

});