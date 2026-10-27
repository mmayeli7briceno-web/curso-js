//Se requiere tengan las clave:
//2 cadena
//2 numerico (entero, decimal)
//1 null
//1 logica(false/true)
//1 array (cadena)
//1 array (objetos)
//1 objeto (array)

const pelicula = {
  titulo: "Titanic",
  sinopsis: "El transatlántico se hunde tras chocar contra un iceberg",
  presupuesto: 748600000,
  recaudacion: 8474152000,
  paisBetado: null,
  reEstreno: false,
  diseñadores: ["Alexander Carlisle",  "Thomas Andrews"],
  elenco: [
    {actor: "Leonardo DiCaprio", personaje: "Jack Dawson", rol: "portagonista"},
    {actor: "Kate Winslet", personaje: "Rose DeWitt Bukater", rol: "portagonista"},
    {actor: "Billy Zane", personaje: "Caledon Hockley", rol: "antagonista"}
  ],
  especificaciones_tecnicas: {
    motores:
    ["Alternativos de vapor de triple expansión", "Turbina Parsons de baja presion"]
  }
}

//Cual es el ultimo diseñador?
console.log(pelicula.diseñadores[pelicula.diseñadores - 1])

//Cual es el personaje del primer actor
console.log(pelicula.elenco[0].actor)

//Cual es el rol del ultimo actor de la lista
console.log(pelicula.elenco[pelicula.elenco.length -1].rol)

//mostrar todos los motres de las especificaciones_tecnicas
const motores = pelicula.especificaciones_tecnicas.motores
motores.forEach(serie => {
  console.log(motores)
});