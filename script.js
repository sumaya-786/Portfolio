/*=========================================
Typing Animation
=========================================*/

const typingElement = document.getElementById("typing");

const words = [
    "MERN Stack Developer",
    "AI/ML Enthusiast",
    "Computer Vision Researcher",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);

}

typeEffect();


/*=========================================
Back To Top Button
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
Scroll Reveal Animation
=========================================*/

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

const sections = document.querySelectorAll("section");

sections.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});


/*=========================================
Sticky Navbar Shadow
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(0,0,0,0.75)";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

}
else{

header.style.background="rgba(0,0,0,.25)";
header.style.boxShadow="none";

}

});


/*=========================================
Mobile Menu
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});


/*=========================================
Close Menu After Clicking Link
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});


/*=========================================
Active Navigation Link
=========================================*/

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================================
Project Card Hover Effect
=========================================*/

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(0,198,255,.18),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});


/*=========================================
Console Message
=========================================*/

console.log(
"%cWelcome to Sumaya's Portfolio 🚀",
"color:#00c6ff;font-size:18px;font-weight:bold;"
);