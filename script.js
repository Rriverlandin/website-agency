/* ============================
   MACAR STUDIO
   script.js
============================ */

// Mobile Menu

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {

    navToggle.addEventListener("click", () => {

        nav.classList.toggle("open");
        navToggle.classList.toggle("open");

    });

}

// Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("in");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => observer.observe(el));
const previews = document.querySelectorAll(".preview");
const tabs = document.querySelectorAll(".device-tabs button");

let currentPreview = 0;

function showPreview(index){

    previews.forEach(preview=>{

        preview.classList.remove("active");

    });

    tabs.forEach(tab=>{

        tab.classList.remove("active");

    });

    previews[index].classList.add("active");
    tabs[index].classList.add("active");

}

tabs.forEach((tab,index)=>{

    tab.addEventListener("click",()=>{

        currentPreview=index;
        showPreview(currentPreview);

    });

});

setInterval(()=>{

    currentPreview++;

    if(currentPreview>=previews.length){

        currentPreview=0;

    }

    showPreview(currentPreview);

},4000);
const filterButtons=document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});
const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! We'll contact you soon.");

form.reset();

});

}
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow="none";

}

});