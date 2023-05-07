const formulario = document.querySelector('#formulario')

//evento
formulario.addEventListener("submit", validarFormulario);


//funcion validar el formulario al dar submit
function validarFormulario(e) {
    e.preventDefault();

    //ver los valores de los inputs
    const usuario = document.querySelector("#usuario").value
    const password = document.querySelector("#password").value

     // Lógica para validacion en JavaScript
    if (usuario == '' || password == "") {
        mostrarAlerta('Complete los campos', 'error');
    } else {
        if (password == '12345' && usuario == 'Johan') {
            mostrarAlerta('cargando...', 'exito');
            setTimeout(() => {
                window.location.href = "./paginaInicio.html"
            }, 2000);
            return
        }
        mostrarAlerta('Datos incorrectos', 'error');
    }
}

//Mostrar la alerta cuando agregamos datos incorrectos o vacíos
function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`
    alerta.textContent = mensaje

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2000)
}