import { ponenteTemplate } from "./ponente-card-template.js";

const ponentes = [
  {
    name: "Coriss Ambady",
    role: "UX Specialist",
    image: "/assets/images/ponente1.png",
  },
  {
    name: "Glorius Wretch",
    role: "Frontend Dev",
    image: "/assets/images/ponente2.png",
  },
  {
    name: "Reinhard Von Lore",
    role: "Researcher",
    image: "/assets/images/ponente3.png",
  },
  {
    name: "Selena Trix",
    role: "Team Lead",
    image: "/assets/images/ponente4.png",
  },
];

function renderPonentes() {
  const container = document.getElementById("ponentes-container");
  if (!container) return;

  ponentes.forEach((ponente) => {
    const html = ponenteTemplate
      .replace(/{{name}}/g, ponente.name)
      .replace(/{{role}}/g, ponente.role)
      .replace(/{{image}}/g, ponente.image);

    const div = document.createElement("div");
    div.innerHTML = html;
    container.appendChild(div.firstElementChild);
  });
}

renderPonentes();

//Card de ponentes
// src/data/ponentes.js
// main.js

// const ponentes = [
//   {
//     name: "Coriss Ambady",
//     role: "UX Specialist",
//     image: "/assets/images/ponente1.png",
//   },
//   {
//     name: "Glorius Wretch",
//     role: "Frontend Dev",
//     image: "/assets/images/ponente2.png",
//   },
//   {
//     name: "Reinhard Von Lore",
//     role: "Researcher",
//     image: "/assets/images/ponente3.png",
//   },
//   {
//     name: "Selena Trix",
//     role: "Team Lead",
//     image: "/assets/images/ponente4.png",
//   },
// ];

// async function renderPonentes() {
//   const response = await fetch('./views/blocks/ponente-card.html');
//   const templateText = await response.text();

//   const container = document.getElementById('ponentes-container');
//   container.innerHTML = '';

//   ponentes.forEach((ponente) => {
//     const filled = templateText
//       .replace(/{{name}}/g, ponente.name)
//       .replace(/{{role}}/g, ponente.role)
//       .replace(/{{image}}/g, ponente.image);

//     container.innerHTML += filled;
//   });
// }

// renderPonentes();
