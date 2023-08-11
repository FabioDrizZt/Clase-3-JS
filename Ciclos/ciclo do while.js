// Cuando NO sepa exactamente las veces que voy a repetir depende del operador

let suma = 0;
do {
  let nota = prompt("Ingrese una nota:");
  suma += nota;
  let resp = prompt("Desea seguir ingresando notas ? (S/N)");
} while (resp == "S");
