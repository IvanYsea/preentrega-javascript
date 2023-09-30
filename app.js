alert("necesita estar registrado")

let nombre = prompt("INGRESE SU NOMBRE")
let apellido = prompt("INGRESE SU APELLIDO")
let edad = parseInt(prompt("ingrese su edad"))

if (nombre != "" && apellido != " " && edad >= 18) {
    alert(`Gracias por su registro ${nombre} ${apellido}, ahora puede seleccionar la pelicula`)
} else {
    alert("Debe ser mayor de edad para registrarse")
}


const valor = 500
let pelicula = prompt(`elija su pelicula con un numero:
 1: Titanic
 2: Troya
 3: Red Social
 4: Avengers
 `)

switch (pelicula) {
    case "1":
        console.log(`vas a ver Titanic, el precio por entrada es de ${valor}`)
        break
    case "2":
        console.log(`vas a ver Troya, el precio por entrada es de ${valor}`)
        break
    case "3":
        console.log(`vas a ver Red Social, el precio por entrada es de ${valor}`)
        break
    case "4":
        alert(`vas a ver Avengers, el precio por entrada es ${valor}`)
    default:
        console.log("actualmente no estan disponible esta opcion")
        break;
}


let cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas"))
let precio = cantidadEntradas

while (cantidadEntradas == precio) {
    let resultado = cantidadEntradas * valor
    alert("su valor es " + resultado)
    cantidadEntradas++
}






