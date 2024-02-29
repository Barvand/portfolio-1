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

setupHamburgerMenu();

console.log("hello");
