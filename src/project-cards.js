 
export async function renderProjectCard() {
  const response = await fetch("/src/projects.json");
  const projects = await response.json();

 projects.map((project) => { 
  // Select the container where the project card will be appended
  const projectContainer = document.querySelector(".project-grid-container");

  // Create project card
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  // Create the logo figure
  const logoFigure = document.createElement("figure");
  logoFigure.classList.add("project--image-holder");

  const logoLink = document.createElement("a");
  logoLink.classList.add("project--link");
  logoLink.href = project.liveSite;
  logoLink.target = "_blank";

  const logoImage = document.createElement("img");
  logoImage.classList.add("project--image");
  logoImage.src = project.logo;
  logoImage.alt = project.logoAlt;

  logoLink.appendChild(logoImage);
  logoFigure.appendChild(logoLink);

  // Create text container
  const textContainer = document.createElement("div");
  textContainer.classList.add("project--text");

  // Add title
  const title = document.createElement("h3");
  title.classList.add("project--text--title");
  title.textContent = project.title;
  textContainer.appendChild(title);

  // Add project type
  const type = document.createElement("h4");
  type.classList.add("project--text--type-project");
  type.textContent = project.type;
  textContainer.appendChild(type);

  // Add description container
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("project--text-fixed-height");

  const description = document.createElement("p");
  description.textContent =
    project.description;
  descriptionContainer.appendChild(description);

  // Add build with
  const buildWith = document.createElement("p");
  buildWith.classList.add("project--text-build-with");
  buildWith.textContent = project.buildWith;

  descriptionContainer.appendChild(buildWith);

  textContainer.appendChild(descriptionContainer);

  // Add links
  const linksContainer = document.createElement("div");
  linksContainer.classList.add("project--text--links");

  const githubLink = document.createElement("a");
  githubLink.classList.add("project--text-link", "btn", "btn-black");
  githubLink.href = project.github;
  githubLink.target = "_blank";
  githubLink.textContent = "Github";

  const liveSiteLink = document.createElement("a");
  liveSiteLink.classList.add("project--text-link", "btn", "btn-black");
  liveSiteLink.href = project.liveSite;
  liveSiteLink.target = "_blank";
  liveSiteLink.textContent = "Live site";

  linksContainer.appendChild(githubLink);
  linksContainer.appendChild(liveSiteLink);
  textContainer.appendChild(linksContainer);

  // Create website image
  const websiteFigure = document.createElement("figure");
  websiteFigure.classList.add("project-card--website-image-container");

  const websiteLink = document.createElement("a");
  websiteLink.href = project.liveSite;
  websiteLink.target = "_blank";

  const websiteImage = document.createElement("img");
  websiteImage.classList.add("project-card--website-image");
  websiteImage.src = project.websiteImage;
  websiteImage.alt = "Gamehub e-commerce website";

  websiteLink.appendChild(websiteImage);
  websiteFigure.appendChild(websiteLink);

  // Append all parts to project card
  projectCard.appendChild(logoFigure);
  projectCard.appendChild(textContainer);
  projectCard.appendChild(websiteFigure);

  // Append project card to the container
  projectContainer.appendChild(projectCard);

  return projectContainer; 
}
)
}