// Animate background
document.body.addEventListener("mousemove", event => {
    mouseXpercentage = Math.round(event.pageX / window.innerWidth * 100);
    mouseYpercentage = Math.round(event.pageY / window.innerHeight * 100);

    document.body.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #a2d2ff, #B983FF)'
})