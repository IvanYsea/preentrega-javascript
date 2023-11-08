// alert("necesita estar registrado")

// let nombre = prompt("INGRESE SU NOMBRE")
// let apellido = prompt("INGRESE SU APELLIDO")
// let edad = parseInt(prompt("ingrese su edad"))

// if (nombre != "" && apellido != " " && edad >= 18) {
//     alert(`Gracias por su registro ${nombre} ${apellido}, ahora puede navegar`)
// } else {
//     alert("Debe ser mayor de edad para registrarse")
// }


const form = document.querySelector("form")
const nombre = document.querySelector(".input-field")
const contraseña = document.querySelector(".input-fielda")

form.addEventListener("submit", registro)

function registro (e) {
    e.preventDefault()
    console.log(`nombre: ${nombre.value}`)
    console.log(`contraseña: ${contraseña.value}`)
}




const carrito = [
    {id:1, nombre: "Placa de video RTX2060", precio: 1000 },
    {id:2, nombre: "Monitor 144hz", precio: 2000 },
    {id:3, nombre: "Teclado Red dragon", precio: 3000 },
    {id:4, nombre: "Mouse Logitech", precio: 4000 },
    {id:5, nombre: "MemoriaRam 8ghz", precio: 5000 }
]


let carro = {
    total: 0,
    entries: [

    ]
}



localStorage.setItem("Usuario", JSON.stringify(carro) )

// const carroLocal = localStorage.getItem("Usuario")

// const carroObj = JSON.parse(carroLocal)

// console.log(carroObj)


const add = (id) => {
    
    const found = carrito.find(obj=>obj.id===id)
    carro.entries.push(found)
    let precios = carro.entries.map(obj => obj.precio)
    carro.total = precios.reduce(
        (accum, suma) => accum + suma,
        0,
    );
console.log(carro)
localStorage.setItem("Usuario", JSON.stringify(carro) )
}

const producto1 = document.querySelector(".producto-1").addEventListener("click", ()=>add(1) )
const producto2 = document.querySelector(".producto-2").addEventListener("click", ()=>add(2) )
const producto3 = document.querySelector(".producto-3").addEventListener("click", ()=>add(3) )
const producto4 = document.querySelector(".producto-4").addEventListener("click", ()=>add(4) )
// const producto5 = document.querySelector(".producto-5").addEventListener("click", ()=>add(5) )




// let total = carrito.reduce((accum, p) => {
//     return accum + p.precio
// }, 0)

// console.log()

const direccion = document.querySelector(".direccion")

const nuevaCard = document.createElement(`div`)

nuevaCard.className += "card direccion"

nuevaCard.style.width = "18rem"

nuevaCard.innerHTML = (`<div class="card-body">
    <h5 class="card-title">MemoriaRam 8ghz</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's
        content.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
</div>`)

direccion.insertBefore(nuevaCard, direccion[1])


// const carrito2 = ["Placa de video RTX2060", "Monitor 144hz", "Teclado RedDragon", "Mouse Logitech"]

// carrito2.push("MemoriaRam 8ghz")

// console.log()











