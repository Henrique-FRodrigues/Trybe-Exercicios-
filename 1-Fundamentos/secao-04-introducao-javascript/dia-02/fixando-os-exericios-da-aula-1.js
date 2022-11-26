// 1-Obtenha o valor “Serviços” do array menu


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços'); //gabarito estava menu[1];
console.log(menuServices);

//2-Procure o índice do valor “Portfólio” do array menu: 

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

//3-Adicione o valor “Contato” no final do array menu:
menu.push('Contato');
console.log(menu);