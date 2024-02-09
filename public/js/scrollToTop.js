let mybutton = document.getElementById("scrollToTop");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}