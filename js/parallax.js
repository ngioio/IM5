window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    console.log("Scrolled: " + scrolled);  // Log the scroll position

    document.getElementById("moonbackground").style.transform =
        "translateY(" + -scrolled * 0.6 + "px)";  // Increase from 0.3 to 0.6
    document.getElementById("bergeoben").style.transform =
        "translateY(" + -scrolled * 0.4 + "px)";  // Increase from 0.2 to 0.4
    document.getElementById("bergemittel").style.transform =
        "translateY(" + -scrolled * 0.3 + "px)";  // Increase from 0.1 to 0.2
    document.getElementById("spiegelungboden").style.transform =
        "translateY(" + -scrolled * 0.2 + "px)";  // Increase from 0.05 to 0.1
    document.getElementById("wassertropf").style.transform =
        "translateY(" + -scrolled * 0.04 + "px)";  // Increase from 0.02 to 0.04
});



// Funktion, um nach oben zu scrollen
function scrollToTop() {
    document.body.scrollTop = 0; // Für Safari
    document.documentElement.scrollTop = 0; // Für andere Browser
}

// Funktion, um den Button anzuzeigen/auszublenden basierend auf dem Scrollen
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Wenn der Benutzer 20px oder mehr nach unten scrollt, zeige den Button an, sonst verstecke ihn
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}



