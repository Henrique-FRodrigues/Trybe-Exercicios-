
    //1.Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;
    //2.Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109);
    //3.Crie e execute uma função que mude a cor do quadrado vermelho para branco;
    //4.Crie e execute uma função que corrija o texto da tag <h1>;
    //5.Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;
    //6.Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
//exercicio 1.
let trocandoId = document.getElementsByTagName("p");
trocandoId[1].innerText = "Eu me vejo trabalhando na área de programação";

//exercicio 2.
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

//exercicio 3.
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

//exercicio 4.
document.getElementsByTagName("h1")[0].innerText = "Desafio - JavaScript";
