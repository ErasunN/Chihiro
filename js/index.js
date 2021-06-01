document.addEventListener("DOMContentLoaded", () => {
    const deadline = 'Wed Dec 29 2021 17:05:00 GMT-0300 (hora estándar de Argentina)';

    window.addEventListener("load", () => {
        setTimeout(() => {
            document.querySelector(".loader").classList.add("fadeOut");
            document.querySelector(".home").classList.add("fadeIn");
            document.querySelector("#home").style.display = "block";
        }, 3000);

        //Temporizador / countdown de estreno
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let deadline = "May 28, 2021 00:00:00",
            countDown = new Date(deadline).getTime(),
            x = setInterval(function() {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                if (distance < 0) {
                    countdown = document.getElementById("countdown"),
                        content = document.getElementById("content");

                    countdown.style.display = "none";
                    content.style.display = "flex";

                    clearInterval(x);
                }
            }, 0)
    })

    //Menu tipo hamburguesa
    let menu = document.querySelector(".burguer-btn");
    let navbar = document.querySelector(".myNavbar");
    menu.addEventListener("click", () => {
        navbar.classList.toggle("change")
    });

    //Seccion de eventos scroll
    let titulo = document.querySelector("#img-title");
    window.addEventListener("scroll", () => {
        let value = window.scrollY;
        titulo.style.top = value * 0.2 + 'px';
    })

    ScrollOut({
        targets: 'div, form'
    });

    //Funciones de navegacion de navBar
    let btnHome = document.querySelectorAll(".btn-home");
    let btnChar = document.querySelector("#btn-char");
    let btnAb = document.querySelector("#btn-about");
    let homeSec = document.querySelector("#home");
    let charSec = document.querySelector("#char");
    let abSec = document.querySelector("#about");

    btnHome.forEach(btn => {
        btn.addEventListener("click", (e) => {
            debugger
            e.preventDefault();
            document.querySelector(".loader").classList.remove("fadeOut");
            document.querySelector(".home").classList.remove("fadeIn");
            let id = `${e.target.getAttribute("class")}`;
            let idArr = id.split("-");
            if (idArr.includes(homeSec.id)) {
                document.querySelector(".home").style.display = "none";
                document.querySelector(".loader").style.display = "block";
                document.querySelector(".loader").style.opacity = 1;
                if (charSec.style.display != "none") {
                    charSec.style.display = "none";
                }
                if (abSec.style.display != "none") {
                    abSec.style.display = "none";
                }
                setTimeout(() => {
                    document.querySelector(".loader").classList.add("fadeOut");
                    document.querySelector(".home").classList.add("fadeIn");
                    document.querySelector(".home").style.display = "block";
                    if (navbar.classList.contains("change")) {
                        navbar.classList.remove("change")
                    }
                    homeSec.style.display = "block";
                }, 3000);
            }
        });
    })

    btnChar.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".loader").classList.remove("fadeOut");
        document.querySelector(".home").classList.remove("fadeIn");
        let id = `${e.target.getAttribute("id")}`;
        let idArr = id.split("-");
        if (idArr.includes(charSec.id)) {
            document.querySelector(".home").style.display = "none";
            document.querySelector(".loader").style.display = "block";
            document.querySelector(".loader").style.opacity = 1;
            if (homeSec.style.display != "none") {
                homeSec.style.display = "none";
            }
            if (abSec.style.display != "none") {
                abSec.style.display = "none";
            }
            setTimeout(() => {
                document.querySelector(".loader").classList.add("fadeOut");
                document.querySelector(".home").classList.add("fadeIn");
                document.querySelector(".home").style.display = "block";
                if (navbar.classList.contains("change")) {
                    navbar.classList.remove("change")
                }
                charSec.style.display = "block";
            }, 3000);
        }
    });

    btnAb.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".loader").classList.remove("fadeOut");
        document.querySelector(".home").classList.remove("fadeIn");
        let id = `${e.target.getAttribute("id")}`;
        let idArr = id.split("-");
        if (idArr.includes(abSec.id)) {
            document.querySelector(".home").style.display = "none";
            document.querySelector(".loader").style.display = "block";
            document.querySelector(".loader").style.opacity = 1;
            if (homeSec.style.display != "none") {
                homeSec.style.display = "none";
            }
            if (charSec.style.display != "none") {
                charSec.style.display = "none";
            }
            setTimeout(() => {
                document.querySelector(".loader").classList.add("fadeOut");
                document.querySelector(".home").classList.add("fadeIn");
                document.querySelector(".home").style.display = "block";
                if (navbar.classList.contains("change")) {
                    navbar.classList.remove("change")
                }
                abSec.style.display = "block";
            }, 3000);
        }
    });

});