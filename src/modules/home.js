import "../styles/home.css";

export default function loadHome() {
  const home = document.createElement("div");

  // Hero Section
  const heroHeader = document.createElement("h1");
  heroHeader.textContent = "Refill Your Hunger Bar";

  const welcome = document.createElement("p");
  welcome.textContent =
    "Tired of punching trees on an empty stomach? Pull up an oak stair at The Crafting Table, the Overworld's finest tavern. Every dish is furnace-smelted with birch logs and served fresh from our blast smoker—guaranteed zero rotten flesh and full saturation.";

  const heroSection = document.createElement("div");
  heroSection.append(heroHeader, welcome);
  heroSection.classList.add("heroSection");

  // Hours Card
  const hoursCard = document.createElement("div");
  const hoursCardHeading = document.createElement("h1");
  hoursCardHeading.textContent = "Tavern Hours Card:";
  const hoursCardText = document.createElement("p");
  hoursCardText.textContent =
    "Dawn to Dusk: Open for miners, builders, and redstone engineers";
  const hoursCardTextNight = document.createElement("p");
  hoursCardTextNight.textContent =
    "Midnight (Phantom Hours): Iron doors barred & Iron Golems on patrol";

  hoursCard.append(hoursCardHeading, hoursCardText, hoursCardTextNight);
  hoursCard.classList.add("hoursCard");

  // Adding all together
  home.append(heroSection, hoursCard);

  return home;
}
