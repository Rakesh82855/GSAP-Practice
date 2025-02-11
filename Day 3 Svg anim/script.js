var initialPath = `M 20 100 Q 675 100 1340 100`
var finalPath = `M 20 100 Q 675 100 1340 100`
var string = document.querySelector("#string")
var pointer = document.querySelector("#pointer")
window.addEventListener("mousemove", function(details){
    pointer.style.left = details.clientX;
    pointer.style.top = details.clientY;
})
string.addEventListener("mousemove", function(details){
    initialPath = `M 20 100 Q ${details.x} ${details.y+10} 1340 100`
    //attr , ease
    gsap.to("svg path", {
        attr:{d:initialPath},
        duration:0.3,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})