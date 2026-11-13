import "./styles/main.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";

console.log("Index.js loaded");

const main = document.querySelector("#content");
main.appendChild(loadHome());

document.querySelector("#nav").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id === "homeBtn") {
    main.innerHTML = "";
    main.appendChild(loadHome());
  }
  else if (e.target.id === "menuBtn") {
    main.innerHTML = "";
    main.appendChild(loadMenu());
  }
  else if(e.target.id === "CordsBtn"){
    main.innerHTML = "";
    main.appendChild(loadContact());
  }
  else return;
});

// main.appendChild(loadMenu());
// main.appendChild(loadContact());


