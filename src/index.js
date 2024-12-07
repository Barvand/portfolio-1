import { renderProjectCard } from "./project-cards.js";
import { setupHamburgerMenu } from "./hamburgerMenu.js"
import { scrollToView} from "./utilities/scrolling.js"


const navProjects = document.querySelector(".nav-projects");
const navAboutMe = document.querySelector(".nav-about-me");
const buttonHero = document.querySelector(".btn"); 
const sectionWork = document.getElementById("projects");
const sectionAboutMe = document.getElementById("about-me");

// proper scrolling into view.
 scrollToView(buttonHero, sectionWork);
 scrollToView(navProjects, sectionWork)
 scrollToView(navAboutMe, sectionAboutMe);


// set's up the hamburger menu
setupHamburgerMenu();

// renders project cards
renderProjectCard();


// Initialize the Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    rootMargin: "0px", // Adjust to detect earlier/later
    threshold: 0.01, // Trigger when 10% of the element is visible
  }
);

// Select all elements to observe
const sections = document.querySelectorAll(".fade-in-section");

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});