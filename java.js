/* const hola = () =>{
    document.getElementById("foto").style.display = "flex"
}
let boton = document.getElementById('imghola')
boton.addEventListener("click", hola)

let boton = document.getElementById('imghola')
boton.addEventListener("mousemove", hola)

    
const mostraralert = () =>{
    document.getElementById("foto").style.display = "none"
}
let aceptar = document.getElementById("btnaceptar")
aceptar.addEventListener("click", mostraralert) */
// Función para mostrar el alert
const hola = () => {
    document.getElementById("foto").style.display = "flex"
}

// Función para cerrar el alert
const cerrarAlert = () => {
    document.getElementById("foto").style.display = "none"
}

// Botón "hola" abre el alert
let boton = document.getElementById('puto')          // ← era 'imghola', debe ser 'puto'
boton.addEventListener("click", hola)

// Click en la imagen también lo abre (si lo querés mantener)
let imagen = document.getElementById('imghola')      // ← variable con distinto nombre
imagen.addEventListener("mousemove", hola)

// Botón aceptar cierra el alert
let aceptar = document.getElementById("btnaceptar")
aceptar.addEventListener("click", cerrarAlert)