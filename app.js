capturarDatos()

function capturarDatos(){
    const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let inputFrig = document.querySelector('#inputFrigorias').value
    if(inputFrig == ""){
        return mostrarAlerta('No se permiten valores vacios', e.target);
    }
    if(!isNaN(inputFrig) == false){
        return mostrarAlerta('Se debe ingresar solo numeros', e.target)
    }
    calcularFrigorias(inputFrig, e.target);
    form.reset();
})
}

function calcularFrigorias(frigorias, referencia){
    let resultado = Math.floor(frigorias / 0.846 / 220 / 2)
    mostrarMensaje(resultado, referencia);
}

function mostrarMensaje(result, referencia){
    let mensaje = document.createElement('P');
    mensaje.textContent = result;
    mensaje.classList.add('mensaje');
    referencia.appendChild(mensaje)
}

function mostrarAlerta(mensaje, referencia){
    limpiarAlert(referencia)
    let alert = document.createElement('P');
    alert.textContent = mensaje;
    alert.classList.add('alert');
    referencia.appendChild(alert);
}

function limpiarAlert(referencia){
    let alert = referencia.querySelector('.alert');
    if(alert){
        alert.remove();
    }
    setTimeout(function(){
        alert.remove();
    },2000)
}