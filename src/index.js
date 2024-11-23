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