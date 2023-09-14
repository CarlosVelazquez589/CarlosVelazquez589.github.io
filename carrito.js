
document.addEventListener("DOMContentLoaded", function () {
    const carritoLista = document.getElementById("carrito-lista");
    const carritoTotal = document.getElementById("carrito-total");
    const vaciarCarritoButton = document.getElementById("vaciar-carrito");
    const realizarCompraButton = document.getElementById("realizar-compra"); 
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

 
    realizarCompraButton.addEventListener("click", function () {
        Swal.fire({
            
            title: '¿Realmente deseas realizar la compra?',
            text: 'Se enviará tu pedido para su procesamiento.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, Realizar Compra',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
               
                 Swal.fire('Compra Realizada', 'Tu pedido ha sido procesado con éxito.', 'success');
               
                
            }
        });
    });

  
});