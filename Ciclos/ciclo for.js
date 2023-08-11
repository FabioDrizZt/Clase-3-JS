// Cuando se exactamente las veces que voy a repetir

console.log("mostramos una cuenta regresiva desde 10");
for (let i = 10; i > 0; i--) {
  if (i == 5) {
    break;
  }
  console.log("indice: " + i); //console.log(`indice: ${i}`);
}

console.log("mostramos todos los valores pares entre 2 y 10");
for (let i = 2; i <= 10; i += 2) {
  console.log("indice: " + i); //console.log(`indice: ${i}`);
}

console.log("mostramos todos los valores pares entre 1 y 10");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("indice: " + i);
  } //console.log(`indice: ${i}`);
}

console.log("mostramos todos los valores impares entre 1 y 10");
for (let i = 1; i <= 10; i += 2) {
  console.log("indice: " + i); //console.log(`indice: ${i}`);
}

console.log("mostramos todos los valores del array");
let array = ["pera", "manzana", "uva"];
for (let i = 0; i < array.length; i++) {
  console.log("indice: " + i + " " + array[i]);
}
