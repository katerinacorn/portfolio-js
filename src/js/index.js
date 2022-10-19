const homeSection = document.getElementById("home");
const projectsSection = document.getElementById("projects");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");

const navLink = document.getElementById("projects-btn");
const navLinks = document.querySelectorAll("#nav-btn");
console.log(navLinks)

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

const normalizeSectionName = sectionName => sectionName.toLowerCase().split("#").join("");

for (const button of navLinks) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionName = normalizeSectionName(button.innerHTML);
        const section = document.getElementById(sectionName);
        const sectionTitle = document.getElementsByClassName(`${sectionName}__title`)
        console.log(`Button ${sectionName} clicked, section is ${section}`)
        console.log(section)

        section.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
        console.log(headerHeight)
    });

}

window.addEventListener("scroll", (event) => {
    let scrollDistance = window.scrollY;

    const sections = document.querySelectorAll(".section");
    sections.forEach((element, index) => {
        if (element.offsetTop - header.clientHeight <= scrollDistance) {
            navLinks.forEach((element) => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            })
            const listItems = document.querySelectorAll(".navigation__list li");

            listItems[index].querySelector("button").classList.add("active");
        }
    });

});