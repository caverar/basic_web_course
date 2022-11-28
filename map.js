// Variables para almacenar los elementos del DOM a modificar
let hobbitonBox = undefined;
let hobbitonIcon = undefined;
let rivendellBox = undefined;
let rivendellIcon = undefined;
let moriaBox = undefined;
let moriaIcon = undefined;
let isengardBox = undefined;
let isengardIcon = undefined;
let rohanBox = undefined;
let rohanIcon = undefined;
let minasTirithBox = undefined;
let minasTirithIcon = undefined;
let minasMorgulBox = undefined;
let minasMorgulIcon = undefined;
let mordorBox = undefined;
let mordorIcon = undefined;

// Objeto con los datos de cada lugar del mapa

data = {
  "hobbiton": {
    "text": "Hola Hobbiton",
    "image": "./images/hobbiton.webp"
  },
  "rivendell": {
    "text": "Hola Rivendell",
    "image": "./images/rivendell.webp"
  },
  "moria": {
    "text": "Hola Moria",
    "image": "./images/moria.jpg"
  },
  "isengard": {
    "text": "Hola Isengard",
    "image": "./images/isengard.webp"
  },
  "rohan": {
    "text": "Hola Rohan",
    "image": "./images/rohan.webp"
  },
  "minas-tirith": {
    "text": "Hola Minas Tirith",
    "image": "./images/minas-tirith.jpg"
  },
  "minas-morgul": {
    "text": "Hola Minas Morgul",
    "image": "./images/minas-morgul.jpg"
  },
  "mordor": {
    "text": "Hola Mordor",
    "image": "./images/mordor.webp"
  }
}

// Estado de la caja de descripción
boxState = "hidden"

// Es necesario cargar los elementos que están dentro del svg en el DOM, al cargar la página
// para poder manipularlos desde el javascript y aplicarlos estilos, pues la otra alternativa
// implica y copiar todo el código svg directamente en el html, lo cual no es recomendable.

window.onload = function() {
	// Obtener el elemento svg del DOM
  let a = document.getElementById("interactive-map")
	let svgDoc = a.contentDocument;

  // Cargar los elementos del svg
  let hobbitonBox = svgDoc.getElementById("hobbiton");
  let hobbitonIcon = svgDoc.getElementById("hobbiton-icon");
  let rivendellBox = svgDoc.getElementById("rivendell");
  let rivendellIcon = svgDoc.getElementById("rivendell-icon");
  let moriaBox = svgDoc.getElementById("moria");
  let moriaIcon = svgDoc.getElementById("moria-icon");
  let isengardBox = svgDoc.getElementById("isengard");
  let isengardIcon = svgDoc.getElementById("isengard-icon");
  let rohanBox = svgDoc.getElementById("rohan");
  let rohanIcon = svgDoc.getElementById("rohan-icon");
  let minasTirithBox = svgDoc.getElementById("minas-tirith");
  let minasTirithIcon = svgDoc.getElementById("minas-tirith-icon");
  let minasMorgulBox = svgDoc.getElementById("minas-morgul");
  let minasMorgulIcon = svgDoc.getElementById("minas-morgul-icon");
  let mordorBox = svgDoc.getElementById("mordor");
  let mordorIcon = svgDoc.getElementById("mordor-icon");

  // Aplicar estilos a los elementos del svg (debido a que no se pueden aplicar desde el css)

  // Pointer para mostrar el cursor al pasar por encima de los iconos
  hobbitonBox.style.cursor = "pointer";
  hobbitonIcon.style.cursor = "pointer";
  rivendellBox.style.cursor = "pointer";
  rivendellIcon.style.cursor = "pointer";
  moriaBox.style.cursor = "pointer";
  moriaIcon.style.cursor = "pointer";
  isengardBox.style.cursor = "pointer";
  isengardIcon.style.cursor = "pointer";
  rohanBox.style.cursor = "pointer";
  rohanIcon.style.cursor = "pointer";
  minasTirithBox.style.cursor = "pointer";
  minasTirithIcon.style.cursor = "pointer";
  minasMorgulBox.style.cursor = "pointer";
  minasMorgulIcon.style.cursor = "pointer";
  mordorBox.style.cursor = "pointer";
  mordorIcon.style.cursor = "pointer";

  // Hovers para los iconos
  // hobbitonBox.addEventListener("mouseover", function() {
  //   hobbitonIcon.style.width = "100px";
  // });
  // hobbitonBox.addEventListener("mouseout", function() {
  //   hobbitonIcon.style.width = "30px";
  // });


  let descriptionBox = document.getElementById("description-box");
  let descriptionImage = document.getElementById("description-image");


  // Función genérica para mostrar la descripción e imagen de cada lugar, recibe como parámetro el ID del lugar y retorna
  // la función que se ejecutará al hacer click en el lugar, esto es necesario ya que el evento click recibe una función como parámetro

  function clicEvent(locationID){
    return function(){
      if(boxState == locationID) {
        descriptionBox.style.display = "none";              // Ocultar la caja de descripción
        window.location.href = "#interactive-map";          // Mover el scroll hasta el mapa interactivo
        boxState = "hidden";                                // Modificar la variable que contiene el estado de la caja de descripción
      }else{
        // descriptionBox.innerText = data[locationID]["text"];
        descriptionImage.src = data[locationID]["image"];   // Cambiar la imagen de la caja de descripción
        descriptionBox.style.display = "block";             // Mostrar la caja de descripción
        window.location.href = "#description-box";          // Mover el scroll hasta la caja de descripción
        boxState = locationID;                              // Modificar la variable que contiene el estado de la caja de descripción
      }
    }
  }

  // Asignar la función genérica a cada uno de los marcadores del mapa. Se asigna tanto para el icono com para el fondo del marcador, 
  // para que se pueda hacer click en cualquier parte del marcador y se muestre la descripción

  hobbitonBox.addEventListener("click", clicEvent("hobbiton"));
  hobbitonIcon.addEventListener("click", clicEvent("hobbiton"));
  rivendellBox.addEventListener("click", clicEvent("rivendell"));
  rivendellIcon.addEventListener("click", clicEvent("rivendell"));
  moriaBox.addEventListener("click", clicEvent("moria"));
  moriaIcon.addEventListener("click", clicEvent("moria"));
  isengardBox.addEventListener("click", clicEvent("isengard"));
  isengardIcon.addEventListener("click", clicEvent("isengard"));
  rohanBox.addEventListener("click", clicEvent("rohan"));
  rohanIcon.addEventListener("click", clicEvent("rohan"));
  minasTirithBox.addEventListener("click", clicEvent("minas-tirith"));
  minasTirithIcon.addEventListener("click", clicEvent("minas-tirith"));
  minasMorgulBox.addEventListener("click", clicEvent("minas-morgul"));
  minasMorgulIcon.addEventListener("click", clicEvent("minas-morgul"));
  mordorBox.addEventListener("click", clicEvent("mordor"));
  mordorIcon.addEventListener("click", clicEvent("mordor"));






}

console.log("Funciona?");

