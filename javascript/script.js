

window.onload = function() {
    document.getElementById("preload").removeAttribute('id');
}

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

$(document).ready(function () {
    const about = $("#about").position().top;
    const experiences = $("#experiences").position().top;
    const projects = $("#projects").position().top;
    const contact = $("#contact").position().top;
    $(window).scroll(function () {
        const windowPos = $(window).scrollTop();
        if (windowPos < about ) {
            $(".nav1").removeClass("active-section");
            $(".quote-container").fadeIn("1000");
        }
        if (windowPos >= about && windowPos < experiences) {
            $(".nav1").addClass("active-section");
            $(".nav2").removeClass("active-section");
            $(".quote-container").fadeOut("1000");
        }
        if (windowPos >= experiences && windowPos < projects) {
            $(".nav1").removeClass("active-section");
            $(".nav2").addClass("active-section");
            $(".nav3").removeClass("active-section");
        }
        if (windowPos >= projects && windowPos < contact) {
            $(".nav2").removeClass("active-section");
            $(".nav3").addClass("active-section");
            $(".nav4").removeClass("active-section");
        }
        if (windowPos >= contact) {
            $(".nav3").removeClass("active-section");
            $(".nav4").addClass("active-section");
        }
    })
})

function model(element) {
    document.getElementById("modal-image").src = element.src;
    document.getElementById("modal").style.display = "block";
}

document.onmousemove = animateCursor;

function animateCursor() {
    const cursor = document.createElement("div");
    cursor.setAttribute("class","cursor");
}