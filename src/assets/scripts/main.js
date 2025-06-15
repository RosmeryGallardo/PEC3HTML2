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
    title: "Moda circular",
    description: "Prácticas en diseño, producción y consumo textil que reducen el impacto ambiental del sector moda.",
    icon: "fas fa-tshirt",
    link: "#",
    cta: "Ver más"
  },
  {
    title: "Upcycling creativo",
    description: "Transforma ropa usada en nuevas piezas originales y sostenibles.",
    icon: "fas fa-recycle",
    link: "#",
    cta: "Descubrir"
  },
  {
    title: "Materiales ecológicos",
    description: "Descubre tejidos innovadores con bajo impacto ambiental.",
    icon: "fas fa-leaf",
    link: "#",
    cta: "Explorar"
  }
];

function renderCards() {
  const container = document.getElementById("cards-container");
  const template = document.querySelector('template[data-component="card"]');

  if (!template || !container) return;

  data.forEach(card => {
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
