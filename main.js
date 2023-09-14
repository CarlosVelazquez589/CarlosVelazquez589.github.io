
document.addEventListener("DOMContentLoaded", function () {
    const comprarButtons = document.querySelectorAll(".comprar-btn");
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");
    const vaciarCarritoButton = document.getElementById("vaciar-carrito");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

    const librosJSON = [
        { "titulo": "Harry Potter y la reliquias de la muerte", "precio": 2500.00 },
        { "titulo": "En la mente de un genio infantil libro", "precio": 1500.00 },
        { "titulo": "Alicia en el pais de las maravillas", "precio": 2000.00 },
        { "titulo": "El Agrio", "precio": 3000.00 },
        { "titulo": "El misterio del cuarto amarillo", "precio": 1500.00 },
        { "titulo": "Martin Fierro", "precio": 500.00 }
        
    ];

    comprarButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            const libro = librosJSON[index];
            carrito.push(libro);
            actualizarCarrito();
            guardarEnLocalStorage(); 
        });
    });

    vaciarCarritoButton.addEventListener("click", function () {
        carrito = [];
        actualizarCarrito();
        guardarEnLocalStorage(); 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se a canselado la compra',
            showConfirmButton: false,
            timer: 1500
          })
    });

    function actualizarCarrito() {
        carritoLista.innerHTML = "";
        let total = 0;

        carrito.forEach(function (item) {
            const li = document.createElement("li");
            li.innerText = `${item.titulo} - $${item.precio.toFixed(2)}`;
            carritoLista.appendChild(li);
            total += item.precio;
        });

        carritoTotal.innerText = `$${total.toFixed(2)}`;
    }

    function guardarEnLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito)); 
    }

    
    actualizarCarrito();
});
