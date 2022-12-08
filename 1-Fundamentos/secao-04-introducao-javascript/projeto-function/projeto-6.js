let base = 10; 
let height = 50;
let forms = 'quadrado';
function calcTriangleArea(base, height){//area do triangulo
return (base * height) / 2
}
console.log(calcTriangleArea(base, height));

function calcRectangleArea(base,height){//area do retangulo
return base * height
}
console.log(calcRectangleArea(base, height));

function calcAllAreas(forms, base, height){//resultados dos calculos de acordo com o parametro passado para função
    if(forms === 'triângulo'){
    return 'O valor da áre do triângulo é de: ' + calcTriangleArea(base, height)
    }
    if(forms === 'retângulo'){
        return 'O valor da áre do retângulo é de: ' + calcRectangleArea(base, height)
    }
    else{
        return 'Não foi possível realizar o calcúlo, insira uma forma geométrica vàlida.'
    }
}
console.log(calcAllAreas(forms, base ,height));
console.log(calcRectangleArea(10, 60));
console.log(calcAllAreas('retângulo', 50 ,20));