let frutas = [
  { nombre: "pera", origen: "ecuador", precio: "$1" },
  { nombre: "manzana", origen: "brasil", precio: "$2" },
  { nombre: "uva", origen: "paraguay", precio: "$5" },
];

// indices :     0         1        2
let miArray = ["pera", "manzana", "uva"];
miArray[1] = "banana";

miArray[80] = "anana";
console.log(0, miArray[0]);
console.log(1, miArray[1]);
console.log(2, miArray[2]);
console.log(3, miArray[3]);
console.log(4, miArray[4]);
console.log(5, miArray[5]);
console.log(79, miArray[79]);
console.log(80, miArray[80]);
console.log("longitud del array: ", miArray.length);

const fruta = {
  nombre: "Juan",
  pelis: [512, 652, 951],
};

let frase = "Pedro pica piedras en una mina";
console.log("longitud de la frase", frase.length);

let personas = ["pedro", "juan", "maria"];
let notas = [7.5, 8.6, 4.45];
let notasPersonas = [
  [7.5, 8.6, 4.45],
  ["pedro", "juan", "maria"],
];
