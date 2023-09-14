
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-contacto");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const nombre = nombreInput.value;
        const email = emailInput.value;
        const mensaje = mensajeInput.value;

        
        Swal.fire({
            title: 'Desea guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            denyButtonText: `No Enviar`,
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire('Enviado!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('No se a enviado ningun archivo', '', 'error')
            }
          })
    });
});