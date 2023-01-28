capturarDatos()

function capturarDatos(){
    const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let inputFrig = document.querySelector('#inputFrigorias').value
    if(inputFrig == ""){
        return console.log('No se permiten valores vacios');
    }
    if(!isNaN(inputFrig) == false){
        return console.log('Se debe ingresar solo numeros')
    }
    calcularFrigorias(inputFrig);
    form.reset();
})
}

function calcularFrigorias(frigorias){
    let resultado = Math.floor(frigorias / 0.846 / 220 / 2)
    console.log(resultado + "A")
}