// /**
//  * Import dependencies from node_modules
//  * see commented examples below
//  */
// import moment from 'moment';
// import L from 'leaflet';

// // import 'some-node-module';
// // import SomeModule from 'some-node-module';

// /**
//  * Write any other JavaScript below
//  */

// +( function() {
//   const university = "UOC";
//   console.log(`Hello, ${university}!`);
//   //console.log(moment().format('YYYY-MM-DD'));
// } )();

const data = [
  {
    title: "Ciudades circulares",
    description:
      "Exploraremos cómo las ciudades están adoptando modelos sostenibles, reutilización de recursos y estrategias urbanas circulares.",
    icon: "fas fa-city",
    link: "#",
    cta: "Ver más",
  },
  {
    title: "Moda circular",
    description:
      "Se abordarán prácticas en diseño, producción y consumo textil que reducen el impacto ambiental del sector de la moda.",
    icon: "fas fa-tshirt",
    link: "#",
    cta: "Ver más",
  },
  {
    title: "Tecnología circular",
    description:
      "Análisis de la gestión de residuos electrónicos, ecodiseño y tecnología aplicada a la optimización de recursos.",
    icon: "fas fa-microchip",
    link: "#",
    cta: "Ver más",
  },
];

function renderCards() {
  const container = document.getElementById("cards-container");
  const template = document.querySelector('div[data-component="card"]');

  if (!template || !container) return;

  data.forEach((card) => {
    const html = template.innerHTML
      .replace(/{{\s*title\s*}}/g, card.title)
      .replace(/{{\s*description\s*}}/g, card.description)
      .replace(/{{\s*icon\s*}}/g, card.icon)
      .replace(/{{\s*link\s*}}/g, card.link)
      .replace(/{{\s*cta\s*}}/g, card.cta);

    const temp = document.createElement("div");
    temp.innerHTML = html;
    container.appendChild(temp.firstElementChild);
  });
}

renderCards();
