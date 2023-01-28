capturarDatos()

function capturarDatos(){
    const form = document.querySelector('#form');
    const cajaInput = document.querySelector('.cajaInput');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let inputFrig = document.querySelector('#inputFrigorias').value
    if(inputFrig == ""){
        return mostrarAlerta('No se permiten valores vacios', cajaInput);
    }
    if(!isNaN(inputFrig) == false){
        form.reset();
        return mostrarAlerta('Se debe ingresar solo numeros', cajaInput)
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
    mensaje.textContent = 'El consumo de corriente es agual a ' + result+ 'A';
    mensaje.classList.add('mensaje');

    let cajaMens = document.createElement('div');
    cajaMens.className ='cajaMens py-3';
    cajaMens.appendChild(mensaje)
    referencia.appendChild(cajaMens);
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
        alert.remove()
    }
    borrarAlerta(referencia)
}

function borrarAlerta(referencia){
    setTimeout(function(){
        let alert = referencia.querySelector('.alert');
        if(alert){
            alert.remove()
        }
    }, 3000)
}