import { comprarProducto } from "./carrito.js"

const userlogin = document.getElementById("userlogin")
const divProductos = document.getElementById("productos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))
let usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"))

document.addEventListener("DOMContentLoaded", () => {
     if(usuarioLogeado === null){
      const a = document.createElement("a")
      a.href = "./html/usuarios.html"
      a.innerHTML = "Login"
      userLogin.appendChild(a)
    }else{
      const p = document.createElement("p")
      const close = document.createElement("button")
  
      p.innerHTML = `Bienvenido ${usuarioLogeado.user}`
      close.id = "cerrar__sesion"
      close.innerHTML = "cerrar sesion"
      close.addEventListener("click", () => {
        alert(`Gracias por comprar en nuestra tienda ${usuarioLogeado.user}. Usuario deslogeado`)
  
        sessionStorage.removeItem("usuario")
        location.reload()
      })
      userLogin.appendChild(p)
      userLogin.appendChild(close)
    }
      generarCardsProductos(productosDisponibles)
  })

export const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";
    productos.forEach((producto) => {

    const { imagen, nombre, categoria, precio, id } = producto
        let card = document.createElement("div");
        card.className = "producto";
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${imagen}" alt="Card image cap">
        <div class="card-body">
        <p class="card-title">${nombre}</p>
        <p class="card-text">Categoria: ${categoria}</p>
        <p class="card-text">Precio: <b>$${precio}</b></p>
        <button id="btn${id}" class="btn btn-primary">Comprar</button>
        </div>
        </div>`;
  
      divProductos.appendChild(card);

      const btnComprar = document.getElementById(`btn${id}`)
      btnComprar.addEventListener("click", () => comprarProducto(id))
    });
};