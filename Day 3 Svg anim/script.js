var initialPath = `M 40 150 Q 960 150 1880 150`
var finalPath = `M 40 150 Q 960 150 1880 150`
var string = document.querySelector("#string")
var pointer = document.querySelector("#pointer")
document.addEventListener("mousemove", function(details){
    pointer.style.left = details.clientX - 5 + "px";
    pointer.style.top = details.clientY - 5 + "px";
})
string.addEventListener("mousemove", function(details){
    initialPath = `M 40 150 Q ${details.x} ${details.y} 1880 150`
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