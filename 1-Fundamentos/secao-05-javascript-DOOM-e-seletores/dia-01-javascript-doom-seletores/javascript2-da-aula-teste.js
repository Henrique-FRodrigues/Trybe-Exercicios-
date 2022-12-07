

    //Adicione uma classe igual para os dois parágrafos;
    //Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
    //Altere algum estilo do primeiro deles;
    //Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

document.getElementsByClassName("texto")[0].innerText = "Terça-feira";// getElementsByClassName retorna uma array, mesmo sendo um unico valor
let trocandoCorDeFundo = document.getElementsByClassName("texto");
trocandoCorDeFundo[0].style.color = "red";
document.getElementsByTagName("h4")[0].style.color = "green"; //getElementsByTagName retorna uma array, mesmo sendo um unico valor