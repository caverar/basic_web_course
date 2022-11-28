// Objeto con los datos de cada lugar del mapa

data = {
  "hobbiton": {
    "text": "La Comarca (The Shire en inglés) es el nombre que recibe la región de la Tierra Media en la que viven los Hobbits, una raza emparentada con los Hombres que se asentó en esta zona a mediados de la Tercera Edad. Es un extenso país habitado por gente simpática, con buenos caminos, una posada o dos, y aquí y allá un enano o un granjero que trabajaba en paz.",
    "image": "./images/hobbiton.webp"
  },
  "rivendell": {
    "text": "Rivendel «Valle Profundo de la Hendedura» fue un refugio élfico en un valle escarpado y recóndito situado en el Ángulo. Llamado Imladris en sindarin y Karningul en oestron." +
    " Fundado en 1697 de la Segunda Edad por Elrond, que huía de la destrucción de Eregion con los supervivientes de los Gwaith-i-Mírdain; la mayoría de los Elfos de Rivendel eran Eldar, incluyendo a los grandes señores Gildor y Glorfindel.",
    "image": "./images/rivendell.webp"
  },
  "moria": {
    "text": "Moria «Pozo Oscuro» es el nombre que reciben las más grandes minas construidas por los Enanos en la Tierra Media, situadas más al sur en las Montañas Nubladas. Conocida también como Khazad-dûm (mansión de los enanos), la Mina del Enano, fue durante mucho tiempo el símbolo del poderío del pueblo Enano, siendo un gran centro de comercio y minería a pesar de encontrarse algo alejada de otras minas enanas. Fue el más antiguo y famoso de los reinos de los enanos. Sin embargo, la prosperidad terminó cuando los Enanos excavaron demasiado hondo en busca de mithril, y despertaron a un antiguo Balrog que se encontraba en letargo en lo más profundo de la tierra. Los Enanos abandonaron entonces Khazad-dûm, y las minas se convirtieron en un lugar de oscuridad y miedo.",
    "image": "./images/moria.jpg"
  },
  "isengard": {
    "text": "Isengard, también conocida como Angrenost «Fortaleza de Hierro», fue una fortaleza situada en el extremo sur de las Montañas Nubladas." +
    " Fue una fortaleza de Gondor durante la Tercera Edad, en ella se encontraba una de las Palantiri. Allí habitó el mago Saruman durante los últimos años de la Tercera Edad, y fue en Isengard donde creó un gran ejército para intentar apoderarse del Anillo Único y dominar la Tierra Media.",
    "image": "./images/isengard.webp"
  },
  "rohan": {
    "text": "Rohan es un reino fundado por los Hombres del Norte, los Eorlingas, que ocupa las grandes llanuras cubiertas de pastos situadas al norte de las Montañas Blancas y al este de las Montañas Nubladas. Sus habitantes descienden de los hombres de Éothéod, y se caracterizan por ser amantes de los caballos y por ser los principales aliados del reino de Gondor. Tiene especial concurrencia en los acontecimientos de El Señor de los Anillos, pues los Rohirrim constituyen uno de los principales bandos que luchan contra Sauron.",
    "image": "./images/rohan.webp"
  },
  "minas-tirith": {
    "text": "Aqui se encuetra la ciudad de Minas Tirth, para mas información consulte las demás pestañas de la pagina.",
    "image": "./images/minas-tirith.jpg"
  },
  "minas-morgul": {
    "text": "En un principio fue llamada Minas Ithil, ciudad fundada por Isildur en el 3320 de la Segunda Edad, sobre una estribación de las Montañas de la Sombra, la ciudad fue gobernada por Isildur y se convirtió en capital de la región. Después sería tomada por Sauron, pero volvió a manos de los hombres tras la Batalla de la Última Alianza. Sin embargo, una peste dejó despoblada la ciudad en el año 1636 de la Tercera Edad.",
    "image": "./images/minas-morgul.jpg"
  },
  "mordor": {
    "text": "Mordor es un país situado al sureste de la Tierra Media, que tuvo gran importancia durante la Guerra del Anillo por ser el lugar donde Sauron, el Señor Oscuro, decidió edificar su fortaleza de Barad-dûr para intentar atacar y dominar a todos los pueblos de la Tierra Media. Se trata de una región desolada, rodeada de montañas con un interior desértico sin vegetación.",
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

  // Variables con los elementos del DOM
  let descriptionBox = document.getElementById("description-box");
  let descriptionText = descriptionBox.childNodes[2];
  let descriptionImage = document.getElementById("description-image");


  // Función genérica para mostrar la descripción e imagen de cada lugar, recibe como parámetro el ID del lugar y retorna
  // la función que se ejecutará al hacer click en el lugar, esto es necesario ya que el evento click recibe una función como parámetro
  function clicEvent(locationID){
    return function(){
      if(boxState == locationID) {
        descriptionBox.style.display = "none";                // Ocultar la caja de descripción
        window.location.href = "#interactive-map";            // Mover el scroll hasta el mapa interactivo
        boxState = "hidden";                                  // Modificar la variable que contiene el estado de la caja de descripción
      }else{
        descriptionText.nodeValue = data[locationID]["text"]; // Cambiar el texto de la caja de descripción
        descriptionImage.src = data[locationID]["image"];     // Cambiar la imagen de la caja de descripción
        descriptionBox.style.display = "block";               // Mostrar la caja de descripción
        window.location.href = "#description-box";            // Mover el scroll hasta la caja de descripción
        boxState = locationID;                                // Modificar la variable que contiene el estado de la caja de descripción
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
