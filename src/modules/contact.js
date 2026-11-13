import tawern from "../assets/Tawern.jpeg";
import "../styles/coordinates.css";

export default function loadContact() {
  const contacts = document.createElement("div");
  contacts.classList.add("contactsDiv");

  const howToFindUs = document.createElement("h1");
  howToFindUs.textContent = "How To Find Us";
  howToFindUs.classList.add("contactH1");

  // Card
  const heroCard = document.createElement("div");
  heroCard.classList.add("heroCard");

  const heroImg = document.createElement("img");
  heroImg.src = tawern;
  heroImg.classList.add("heroImg");

  const heroH2 = document.createElement("h2");
  heroH2.classList.add("heroH2");
  heroH2.textContent = "Overworld Coordinates";

  const heroCoordinates = document.createElement("span");
  heroCoordinates.classList.add("heroCoordinates");
  heroCoordinates.textContent = "X: 128, Y: 64, Z: -420";

  const heroP = document.createElement("p");
  heroP.classList.add("heroP");
  heroP.textContent = "Plains Biome, 50 blocks east of the Village Bell";
  heroCard.append(heroImg, heroH2, heroCoordinates, heroP);

  contacts.append(howToFindUs, heroCard);
  return contacts;
}
