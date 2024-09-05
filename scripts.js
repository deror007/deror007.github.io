
// Typewriter effect code 
var i = 0;
var txt = "Hello, I'm Russell de Roeper.";
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
    document.querySelector("#typewriter span").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#typewriter span").innerHTML = ""; // Clear initial text
    typeWriter();
});

// Collapsible Portfolio interaction code
var coll = document.getElementsByClassName("collapsible");
    var j;
    
    for (j = 0; j < coll.length; j++) {
    coll[j].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
