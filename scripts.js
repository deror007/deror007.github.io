
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

// Obfuscate email and add social media links
document.addEventListener("DOMContentLoaded", function() {
    var email = "russell.roeper" + "@" + "gmail.com";
    document.getElementById("email").textContent = email;



    var linkedinUrl = "https://www.linkedin.com/in/russellderoeper/";
    var githubUrl = "https://github.com/deror007";

    document.getElementById("linkedin").innerHTML = 
        '<a href="' + linkedinUrl + '" target="_blank">' +
        '<i class="fa fa-linkedin fa-fw w3-text-white w3-xxlarge w3-margin-right w3-hover-opacity"></i> ' + linkedinUrl +
        '</a>';

    document.getElementById("github").innerHTML = 
        '<a href="' + githubUrl + '" target="_blank">' +
        '<i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-margin-right w3-hover-opacity"></i> ' + githubUrl +
        '</a>';
});
