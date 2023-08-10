let frase = "Hola mundo!";
           //0123456789
console.log(frase.indexOf("o"))
console.log(frase.lastIndexOf("o"))
console.log(frase.lastIndexOf("c"))// devuelve -1 si no encuentra el valor

let notas = [7.5, 8.6, 4.45];
console.log(notas.indexOf(9)) // devuelve -1 si no encuentra el valor
console.log(notas.indexOf(7.5))
console.log(notas.includes(7.5))// devuelve true si encuentra el valor
console.log(notas.includes(9)) // devuelve false si no encuentra el valor
