//Crea una función que reciba el ID del planeta, haga uso del 
//API Dragon Ball
//y retorne una lista de personajes (name - race - affiliation). 
//Ejemplo: 1
//Piccolo - Namekian - Z Fighter
//Ginyu - Frieza Race - Army of Frieza
//Dende - Namekian - Z Fighter
//...
//PASO 1: Función asíncrona (tiempos distintos/diferidos) - Latencia (ESPERAR...)
//PASO 1: Función asíncrona
async function obtenerPersonajesPorPlaneta(id) {
  
  //PASO 2: URL dinámica apuntando a planetas
  const API_URL = `https://dragonball-api.com{id}`

  //PASO 3: Control de errores
  try{

    //PASO 4: Realizar la petición
    const respuesta = await fetch(API_URL)

    //PASO 5: ¿EXISTE UNA RESPUESTA?
    if (!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`)
    }

    //PASO 6: Recibir datos del planeta
    const datos = await respuesta.json()

    //PASO 7: Obtener los personajes de ese planeta
    const personajes = datos.characters
    
    //Recorrer e imprimir en el formato exacto: (name - race - affiliation)
    personajes.forEach(personaje => {
      console.log(`${personaje.name} - ${personaje.race} - ${personaje.affiliation}`)
    });

  }catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }

} 

//TEST
obtenerPersonajesPorPlaneta(1)