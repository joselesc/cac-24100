// if/else
// switch
// ciclos:
// for/white/do-while
// arrays

function esMayorEdad(edad) { 
    if(edad >= 18) {
       return true;
    }else {
        return false;
    }
}
function determinar() {
    const edad = Number(document.getElementById('edad').value);
    //edad es NaN
    //o
    //edad es valor numerico
    
    //guards: si la edad es vacio no continuo!
    if(!edad) {
        document.getElementById('edad').classList.add('error');
        return ;
    }

    //puedo agregar mas validaciones?
    if(edad < 1 || edad > 120) {
        document.getElementById('edad').classList.add('error2');
        return ;
    }

    const edadNumero = Number(edad);
    //invoco la funcion esMayordeEdad
    const esMayor = esMayorEdad(edadNumero);
    if(esMayor) {
        document.getElementById('resultado').innerHTML = '<b>Es mayor</b>';
    }else {
        document.getElementById('resultado').innerHTML = '<b>Es menor</b>';
    }
}

const boton = document.getElementById('determinar');
boton.addEventListener('click',determinar);

//crear un edificio de 5 pisos
const edificio=['pedro','martin','maria']
     
//recorrer el edificio piso por piso
for(let piso = 0,piso < ed2.length; piso++){
    console.log(piso,edificio[piso]);
}
