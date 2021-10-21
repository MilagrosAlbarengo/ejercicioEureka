let clave: string = "";
let cantidadeintentos: number = 1;

while (clave !== "Eureka" && cantidadeintentos < 4) {
  clave = prompt("Ingrese su clave: ");
  if (clave === "Eureka") {
    console.log("Bienvenido");
  } else {
    console.log(" has agotado todos los intentos");
    cantidadeintentos++;
  }
}

//
//for (let contador : number = 1; contador <= n; contador++) {
// probFinal = probFinal * probCara;
// }
