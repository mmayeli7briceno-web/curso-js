//Almacenar un texto en una variable y luego mostrarlo en orden inverso en una consola
//Ejemplo: "senati" -> "itanes"
const textoOriginal = "SENATI"
const longitud = textoOriginal.length

let resultado="";

for (let i = longitud -1; i >= 0; i--){
   resultado += textoOriginal.substring(i, i + 1)
}

//console.log(resultado)



//Crear una variable donde almacene una direccion de correo electronico
//varificar si el correo es válido cuando tiene un solo @
//Ejemplo: 
// jhon@gmail.com [correcto]
// luis@gmail@.com [incorrecto]
// mariagmail.com [incorrecto]
const correo = "jhon@gmail.com"
const total = 0

for (let i = 0; i < correo.length; i++){
  
}