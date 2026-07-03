const words = [
    "Frontend Developer",
    "HTML Developer",
    "CSS Enthusiast",
    "JavaScript Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){
        typing.textContent = currentWord.substring(0, letterIndex++);
    }else{
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = isDeleting ? 50 : 120;

    if(!isDeleting && letterIndex === currentWord.length + 1){
        speed = 1800;
        isDeleting = true;
    }

    if(isDeleting && letterIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

particlesJS("particles-js", {

    particles: {

        number: {
            value: 60
        },

        color: {
            value: "#38BDF8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.35
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 1.5
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#38BDF8",
            opacity: 0.2,
            width: 1
        }

    }

});

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});