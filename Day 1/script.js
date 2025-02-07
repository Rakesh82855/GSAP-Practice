gsap.to("#box1", {
    x: 810,
    duration: 2,
    delay: 2,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5
})
gsap.from("#box2", {
    x: 1620,
    duration: 1,
    delay: 1,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,//reapeat(-1) matlab infinite time chalega
    yoyo:true //it works like real yoyo
})
gsap.from("h1", {
    y:20,
    opacity:0,
    duration:2,
    delay:1,
    stagger:1 //multiple chij(h1 tags) ek ek kar chalegi, minus(-1) krke chije ulti chalti h
})
var tl = gsap.timeline()
tl.from("h2", {
    y:-20,
    opacity:-1,
    duration:1,
    delay:0.5
})
tl.from("h4", {
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from("h1", {
    y:20,
    scale:0.5,
    duration:2,
    opacity:0,
})