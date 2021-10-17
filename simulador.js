/*Race Park es un proyecto de parque de diversiones orientado a la familia, donde destacan pistas de karting para todas las edades y la primera pista de sky sintética y ecológica del país, entre otras atracciones.

El objetivo del presente simulador será ofrecer la compra de entradas online, discriminando por tipo de pase (bronce, plata, oro), grupo familiar, cupón de descuento.

PRECIO BRONCE=$1000 x persona
PRECIO PLATA=$1500 x persona
PRECIO ORO=$2000 x persona

DESCUENTO GRUPO FAMILIAR (3 o más personas) = $500 sobre el total de la compra

*/

let total = 0;
let ticket = 0;
let invitados = 0;
let precio = 0;
let cuponDescuento;
let descuento = 0;

function seleccionarTicket() {
  let ticket = prompt(
    "Elige tu tipo de pase: bronce, plata u oro",
    "Oro"
  ).toUpperCase();
  let invitados = parseInt(
    prompt("Selecciona la cantidad de tickets que deseas")
  );
  let precio = 0;

  switch (ticket) {
    case "BRONCE":
      precio = 1000;
      break;
    case "PLATA":
      precio = 1500;
      break;
    case "ORO":
      precio = 2000;
      break;
  }
  total = precio * invitados;
  alert("El subtotal es" + " " + total + " " + "ARS");
}

function agregarCupon() {
  cuponDescuento = prompt(
    "¿Querés agregar un cupón de descuento?",
    "Si"
  ).toUpperCase();
  if (cuponDescuento == "SI" && cuponDescuento != "") {
    descuento = total - total * 0.2;
    alert("El subtotal de tu compra es" + " " + descuento);

    return descuento;
  } else {
    alert("No ha agregado descuentos a su pase");
  }
}

function calcularIva() {
  if (cuponDescuento == "SI") {
    total = descuento + descuento * 0.21;
    alert("El precio final de tu compra es" + " " + total);

    return total;
  } else {
    total = total + total * 0.21;
    alert("El precio final es:" + " " + total);

    return total;
  }
}

alert("¡Bienvenido a Race Park!");

seleccionarTicket();
agregarCupon();
calcularIva();
