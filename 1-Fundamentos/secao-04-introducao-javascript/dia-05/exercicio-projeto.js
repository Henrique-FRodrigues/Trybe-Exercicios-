
const girrafa = true;
const elefante = true;
const macaco = false;
//compareTrue ao receber dois valores booleanos deve retornar false ou true <função>

function compareTrue(girrafa, macaco){
    
    if (girrafa === true && elefante === true){
        return true;
    }
    else if (girrafa === (true && macaco === false) || (elefante && macaco === false)){
        return false;
    }
    else{
        return "erro";
    }
}
console.log(compareTrue(girrafa, macaco));