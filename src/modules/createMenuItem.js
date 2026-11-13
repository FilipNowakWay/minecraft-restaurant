import emerald from "../assets/Emerald.png";

export default function createMenuItem(name, price, text, statusEffect) {
  const itemCard = document.createElement("div");
  const itemHeading = document.createElement("h1");
  itemHeading.textContent = name;

  // Price
  const itemPriceDiv = document.createElement("div");
  itemPriceDiv.classList.add("itemPrice");
  const itemPriceText = document.createElement("h2");
  itemPriceText.textContent = price;
  const itemPriceImg = document.createElement("img");
  itemPriceImg.src = emerald;
  itemPriceImg.classList.add("emeraldImg");
  itemPriceDiv.append(itemPriceText, itemPriceImg);

  // Text
  const itemTextDiv = document.createElement("div");
  const itemText = document.createElement("p");
  itemText.textContent = text;
  const itemStatusEffect = document.createElement("p");
  itemStatusEffect.textContent = statusEffect;
  itemTextDiv.append(itemText, itemStatusEffect);
  itemTextDiv.classList.add("itemText");

  // Connecting All
  itemCard.append(itemHeading, itemPriceDiv, itemTextDiv);
  itemCard.classList.add("itemCard");
  return itemCard;
}
