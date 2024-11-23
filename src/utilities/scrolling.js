export async function scrollToView(button, section) {
  button.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" });
  });
}
