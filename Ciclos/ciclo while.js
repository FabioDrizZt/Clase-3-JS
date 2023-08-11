// Cuando NO sepa exactamente las veces que voy a repetir depende de una operación

/* for (let i = 1; i <= 10; i++) {
  console.log("i = ", i);
} */

let i = 0;
while (i <= 10) {
  let n=15;
  i++;
  if (i == 5) {
    continue;
  }
  console.log("i = ", i);
}
let resp = "N";
while (resp == "S") {
  let nota = prompt("Ingrese una nota:");
  suma += nota;
  resp = prompt("Desea seguir ingresando notas ? (S/N)");
}
