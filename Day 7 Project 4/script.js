function marqueeAnimation() {
    window.addEventListener("wheel", function(dets) {
        //give scrolling details(if scroll top to bottom give positive value, if scroll bottom to top give negative value)
        if (dets.deltaY>0) {
            //Move text to left
            gsap.to(".marque", {
                transform:"translateX(-200%)",
                duration:10,
                repeat:-1,
                ease:"none"
            })
            //Rotate image to left
            gsap.to(".marque img", {
                rotate:180
            })
        }else {
            //Move text to right
            gsap.to(".marque", {
                transform:"translateX(0%)",
                duration:10,
                repeat:-1,
                ease:"none"
            })
            //Rotate image to right
            gsap.to(".marque img", {
                rotate:0
            })
        }
    })
}
marqueeAnimation()