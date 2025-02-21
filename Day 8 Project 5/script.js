// gsap.to(".marquee", {
//     x:'-100%',
//     duration:10,
//     delay:1,
//     repeat:-1,
//     ease:"none"
// })
function page1Animation() {
    var tl = gsap.timeline()
    tl.from("nav h1, nav h4, nav button", {
        y:-40,
        delay:1,
        duration:0.5,
        opacity:0,
        stagger:0.15
    })
    tl.from(".content .part1 h1", {
        x:-300,
        opacity:0,
        duration:0.5
    },"-=0.3")
    tl.from(".content .part1 p", {
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl.from(".content .part1 button", {
        opacity:0,
        scale:0.8
    })
    tl.from(".content .part2 img", {
        opacity:0,
        scale:0.8
    },"-=0.7") //delay in timeline, it before its timeline 
    tl.from(".marquee img", {
        y:30,
        duration:0.5,
        opacity:0,
        stagger:0.15
    })
}
function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2" ,
            scroller:"body" ,
            start: "top 60%",
            end:"top 0",
            // scrub: 2,
        }
    })
    tl2.from(".services", {
        y:30,
        opacity:0
    })
    tl2.from("#left1", {
        x:-300,
        duration:1,
        opacity:0
    },"anime") //anime=both animate together
    tl2.from("#right1", {
        x:300,
        duration:1,
        opacity:0
    },"anime")
    tl2.from("#left2", {
        x:-300,
        duration:1,
        opacity:0
    },"anime2")
    tl2.from("#right2", {
        x:300,
        duration:1,
        opacity:0
    },"anime2")
}
page1Animation()
page2Animation()