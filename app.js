const myButton = document.querySelector(".connect-btn");
const extraText = document.querySelector(".extra-text");
const showButton = document.querySelector(".show-btn");
const darkToggle = document.querySelector(".toggle");
const container = document.querySelector(".container");
const body = document.body;
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll(".section");
const navlinks = document.querySelectorAll(".nav-links li a")
const sectionAll = document.querySelectorAll(".section");
const linksMenu = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".hamburger");

function handleConnect () {
    myButton.textContent = "Connected ✔";
    myButton.disabled = true;
}

function toggleShowMore() {    
    extraText.classList.toggle("show");
    if(extraText.classList.contains("show")) {
        showButton.textContent = "Show Less";
    }else{
        showButton.textContent = "Show More";
    }
}

function toggleMenu () {
    linksMenu.classList.toggle("open");
    if(linksMenu.classList.contains("open")) {
        menuIcon.textContent = "✕";
    }else {
        menuIcon.textContent = "☰";
    }
}

const sectionsArray = Array.from(sectionAll);
const navLinksArray = Array.from(navlinks);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinksArray.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`.nav-links li a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            } 
        }
    });
}, {
    threshold: 0.6
});

sectionsArray.forEach(section => {
    observer.observe(section);
});

darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");

    sections.forEach(section => {
        section.classList.toggle("dark-mode");
    });
});

myButton.addEventListener("click", handleConnect);
showButton.addEventListener("click", toggleShowMore);
