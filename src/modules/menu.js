import createMenuItem from "./createMenuItem.js";
import "../styles/menuItem.css";

const menuItems = [
  {
    name: "Smoked Ribeye Steak",
    price: 3,
    description: "Prime mooshroom cut slow-cooked in a blast smoker.",
    statusEffect: "Restores 8 hunger points and maximum saturation.",
  },
  {
    name: "Golden Carrot Tartare",
    price: 5,
    description:
      "Crisp farm-grown carrots infused with pure 24-karat gold nuggets.",
    statusEffect: "Night vision sold separately.",
  },
  {
    name: "Suspicious Mushroom Stew",
    price: 2,
    description: "Foraged red and brown mushrooms from the Dark Oak Forest.",
    statusEffect: "Ask your villager waiter for today's mystery status effect.",
  },
  {
    name: "Baked Potato Supreme",
    price: 2,
    description:
      "Harvested from village farms, furnace-baked, and topped with fresh milk bucket cream.",
    statusEffect: "Restores 5 hunger points with warm comfort.",
  },
  {
    name: "Chorus Fruit Sorbet",
    price: 4,
    description: "Chilled End-dimension delicacy.",
    statusEffect:
      "Warning: may cause involuntary teleportation up to 8 blocks away.",
  },
  {
    name: "Sweet Berry Honey Mead",
    price: 2,
    description: "Taiga berries fermented in a bee-nest honey glaze.",
    statusEffect: "Clears hunger and boosts morale.",
  },
];

const menu = document.createElement("div");
let generated = false;

export default function loadMenu() {
  let item;
  if (generated) return menu;
  menuItems.forEach((item) => {
    item = createMenuItem(
      item.name,
      item.price,
      item.description,
      item.statusEffect,
    );
    menu.append(item);
  });
  generated = true;
  return menu;
}
