// Variables para almacenar los elementos del DOM a modificar
// var hobbitonBox = undefined;
// var hobbitonIcon = undefined;
// var rivendellBox = undefined;
// var rivendellIcon = undefined;
// var moriaBox = undefined;
// var moriaIcon = undefined;
// var isengardBox = undefined;
// var isengardIcon = undefined;
// var rohanBox = undefined;
// var rohanIcon = undefined;
// var minasTirithBox = undefined;
// var minasTirithIcon = undefined;
// var minasMorgulBox = undefined;
// var minasMorgulIcon = undefined;
// var mordorBox = undefined;
// var mordorIcon = undefined;

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

  // Añadir hover

  hobbitonBox.addEventListener("click", function() {
    console.log("hobbiton");
  })
  hobbitonIcon.addEventListener("click", function() {
    console.log("hobbiton");
  })


}
console.log("Funciona?")



