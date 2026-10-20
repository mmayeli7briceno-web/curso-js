//Estructuras = OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
  apellidos : "Briceño Anchante",
  nombres : "Mayeli",
  edad : 19,
  skills: ["PHP", "Java", "Javascript", "SQL", "Python"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/


//Desestructurar es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la coleccion
//NOTA: La variables deben coincidir con las claves
const { nombres, skills } = persona

console.log(nombres, skills)
