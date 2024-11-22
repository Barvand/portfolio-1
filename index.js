const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function setupHamburgerMenu() {
  try {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active-menu");
      navMenu.classList.toggle("active-menu");
    });

    document.querySelectorAll(".nav-item").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active-menu");
        navMenu.classList.remove("active-menu");
      })
    );
  } catch (error) {
    console.error("Error in hamburgerMenu:", error);
  }
}

const navProjects = document.querySelector(".nav-projects");
const navAboutMe = document.querySelector(".nav-about-me");
const buttonHero = document.querySelector(".btn"); 
const sectionWork = document.getElementById("projects");
const sectionAboutMe = document.getElementById("about-me");



async function scrollToView(button, section) {
    button.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" });
    })
}

 scrollToView(buttonHero, sectionWork);
 scrollToView(navProjects, sectionWork)
 scrollToView(navAboutMe, sectionAboutMe);

setupHamburgerMenu();

