//Cadenas = conjunto de caracteres
//1 solo caracter = CHAR

//Existen 3 formas para crear cadenas js:
const tradicional = "Hola soy un texto"
const simple = 'un gusto conocerte'
const mensaje = `Soy un texto muy especial` // Backticks

const nombre = 'Jhon'
const carrera = 'Programador'

const historia = ` 
Esta es la historia de ${nombre} 
de un progrmador
que solo quería Vibecodear
`

//console.log(historia)

//Propiedades
const longitud = carrera.length //Ttotal de caracteres
//console.log(longitud)

//Esta constante NO es un arreglo
const amigos = "Luis, Miguel, Juan, Jóse, Raul, Ernesto"

//Métodos
console.log('concat:', carrera.concat(nombre)) //concatenar (unir)
console.log('repeat:', carrera.repeat(3)) //repetir
console.log('replace:', carrera.replace('a', '@')) //reemplazar primero
console.log('uppercase:', carrera.toUpperCase()) //mayuscula
console.log('lowercase:', carrera.toLowerCase()) //minuscula
console.log('replace all:', carrera.replaceAll('a', '@')) //reemplazar todos
console.log('split:', amigos.split(',')) //Devuelve un array
console.log('trim:', carrera.trim()) //quita espacioas vacios extremos

//Extraer los 3 primero caracteres 
console.log('3 primeros:', carrera.substring(0, 3)) //0 = index (inicio), 3 = total

//Extraer "grama" de programador
console.log('caracteres internos:', carrera.substring(3, 8))