/*
Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .
*/

let teste = document.querySelector('#elementoOndeVoceEsta').parentNode
console.log(teste);

teste.style.color = 'red';

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Diego';

console.log(document.querySelector('#pai'));

console.log(teste.firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

/*
Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho.
*/

let ondeVoceEsta = document.querySelector('#pai');

let criandoAtag = document.createElement('section');

criandoAtag.innerText = 'EuSouUmIrmão';

ondeVoceEsta.appendChild(criandoAtag);


let novoFilho = document.createElement('section');

novoFilho.innerText = 'Eu sou o terceiro filho';
novoFilho.id = 'OpaTerceiroFilho';


document.querySelector('#elementoOndeVoceEsta').appendChild(novoFilho);


let maisUmFilho = document.createElement('section');
maisUmFilho.innerText = 'Nasci!';
maisUmFilho.id = 'filhoDofilhoDofilho';


document.querySelector('#primeiroFilhoDoFilho').appendChild(maisUmFilho);

let filhoDofilhoDofilho = document.querySelector('#filhoDofilhoDofilho');

let oi = filhoDofilhoDofilho.previousSibling.parentElement.parentElement.nextElementSibling;

console.log(oi);

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .


let c = document.querySelector('#pai');

c.removeChild(document.querySelector('#primeiroFilho'))