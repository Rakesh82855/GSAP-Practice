function breakTheText () {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent //take h1 text

    var spilitted = h1Text.split("") //h1 ko toda
    var halfValue = spilitted.length/2

    var clutter = ""
    spilitted.forEach(function(elem,idx) { //idx=index of every element
        if(idx<halfValue) {
            clutter = clutter + `<span class="a">${elem}</span>` //har letter ko span me lae
        }else {
            clutter = clutter + `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter //spitted text ko h1 me dala
}
breakTheText()
gsap.from("h1 .a", {
    y:70,
    duration:0.8,
    delay:0.5,
    stagger:0.2,
    opacity:0    
})
gsap.from("h1 .b", {
    y:70,
    duration:0.8,
    delay:0.5,
    stagger:-0.2,
    opacity:0    
})