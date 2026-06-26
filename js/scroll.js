const lenis = new Lenis({

    duration: 2.8,

    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

    smoothWheel: true,

    wheelMultiplier: 0.55,

    touchMultiplier: 1.2,

    infinite: false,

    syncTouch: true,

    syncTouchLerp: 0.06,

    lerp: 0.07

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);