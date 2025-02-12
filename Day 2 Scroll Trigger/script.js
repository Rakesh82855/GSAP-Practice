gsap.from("#page1 #box", {
    scale:0,
    delay:1,
    duration:2,
    rotation:360
})
//Scroll Trigger
//marker start
gsap.from("#page2 h1", {
    opacity:0,
    x:500,
    duration:2,    
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }        
})
gsap.from("#page2 h2", {
    opacity:0,
    x:-500,
    duration:2,    
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }        
})
//scrub
gsap.from("#page3 #box", {
    scale:0,
    opacity:0,
    duration:1,
    rotation:720,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2        
    }
})
//pin
gsap.to("#page4 h1", {
    transform:"translateX(-163%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true       
    }
})