//PASO 1: Función asíncrona (tiempos distintos/diferidos) - Latencia (ESPERAR...)
async function obtenerPersonaje(id) {
  
//PASO 2: URL(endpoint)
const API_URL = 'https://dragonball-api.com/api/characters/16'

//PASO 3: APP es propensa a errores....
  try{

    //PASO 4: Realizar la petición
    const respuesta = await fetch(API_URL)

    //PASO 5: ¿EXISTE UNA RESPUESTA?
    if (!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`) //¡Stop!
    }

    //PASO 6: Si llegamos hasta aqui, entonces hemos recibido los datos (JSON)
    //JSON (cadena) > OBJECT JS
    const datos = await respuesta.json()

    //PASO 7: MOSTRAR TODO EL JSON
    //console.log(datos)

    //Mostrar solo el nombre de las transformaciones
    const transformaciones = datos.transformations
    transformaciones.forEach(transformacion => {
      console.log(transformacion.name)
    });

  }catch(e){
    console.error(`Nose pudo concretar la operación: ${e}`)
  }

} 

//TEST
obtenerPersonaje(2)