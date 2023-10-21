alert("necesita estar registrado")

let nombre = prompt("INGRESE SU NOMBRE")
let apellido = prompt("INGRESE SU APELLIDO")
let edad = parseInt(prompt("ingrese su edad"))

if (nombre != "" && apellido != " " && edad >= 18) {
    alert(`Gracias por su registro ${nombre} ${apellido}, ahora puede navegar`)
} else {
    alert("Debe ser mayor de edad para registrarse")
}



const carrito = [
    { nombre: "Placa de video RTX2060", precio: 1000 },
    { nombre: "Monitor 144hz", precio: 2000 },
    { nombre: "Teclado Red dragon", precio: 3000 },
    { nombre: "Mouse Logitech", precio: 4000 }
]

let total = carrito.reduce((accum, p) => {
    return accum + p.precio
}, 0)

console.log(total)

const direccion = document.querySelector(".direccion")

const nuevaCard = document.createElement(`div`)

nuevaCard.innerHTML= (`<div class="card-body">
    <h5 class="card-title">MemoriaRam 8ghz</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's
        content.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
</div>`)

direccion.insertBefore(nuevaCard, direccion[1])


const carrito2 = ["Placa de video RTX2060", "Monitor 144hz", "Teclado RedDragon", "Mouse Logitech"]

carrito2.push("MemoriaRam 8ghz")

console.log(carrito2)











