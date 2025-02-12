var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x:dets.x-7,
        y:dets.y-7
    })
})