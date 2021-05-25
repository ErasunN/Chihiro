document.addEventListener("DOMContentLoaded", () => {
    const deadline = 'Wed Dec 29 2021 17:05:00 GMT-0300 (hora estándar de Argentina)';

    window.addEventListener("load", () => {
        setTimeout(() => {
            console.log("Timeout");
            document.querySelector(".loader").classList.add("fadeOut");
            document.querySelector(".home").classList.add("fadeIn");
            //timer(deadline, 'timer');
        }, 3000)
    })

    let remainTime = (deadline) => {
        let now = new Date();
        let remainTime = (new Date(deadline) - now + 1000) / 1000;
        let remainSecond = ('0' + Math.floor(remainTime % 60)).slice(-2);
        let remainMinute = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
        let remainHour = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
        let remainDay = Math.floor(remainTime / (3600 * 24));

        return {
            remainTime,
            remainSecond,
            remainMinute,
            remainHour,
            remainDay
        }
    }

    let timer = (deadline, elem) => {
        let element = document.getElementById(elem);

        console.log("entro");
        setInterval(() => {
            let time = remainTime(deadline);
            element.innerHTML = `${time.remainDay}D - ${time.remainHour}h:${time.remainMinute}m:${time.remainSecond}s`;
            if (time.remainTime <= 1) {
                clearInterval(update);
                element.innerHTML = "Pelicula estrenada!";
            }
        }, 1000);
    }

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
    })
});