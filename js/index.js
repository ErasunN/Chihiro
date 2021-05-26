document.addEventListener("DOMContentLoaded", () => {
    const deadline = 'Wed Dec 29 2021 17:05:00 GMT-0300 (hora estándar de Argentina)';

    window.addEventListener("load", () => {
        setTimeout(() => {
            document.querySelector(".loader").classList.add("fadeOut");
            document.querySelector(".home").classList.add("fadeIn");
        }, 3000);

        //Temporizador / countdown de estreno
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let deadline = "Jun 28, 2021 00:00:00",
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
                    content.style.display = "block";

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
        targets: 'div'
    });
});