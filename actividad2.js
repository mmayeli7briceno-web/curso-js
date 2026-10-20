//Crear un objeto que almacene datos de una mascota
//desestructurar utilizando un minimo de 4 variables
//mostrar en consola
const mascota = {
  nombre: "tom",
  especie: "perro",
  raza: "Pitbull",
  edad: 4,
  color: "marron",

}

const { nombre, raza, edad, color } = mascota

console.log(nombre, raza, edad, color)