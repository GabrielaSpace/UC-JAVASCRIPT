'use strict'

// let caja = document.getElementById('micaja');
    let caja = document.querySelector('#micaja');

// let caja = document.getElementById('micaja').innerHTML;

caja.innerHTML = "ahora me llamo diferente";
console.log(caja);
caja.style.background = 'red';
caja.style.padding="20px";
caja.style.color='white';

function cambiaColor(color) {
    caja.style.background = color;   
}
caja.className ='hola';
//conseguir elemntos por su etiqueta

let todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

// let contenidoEnTexto = todosLosDivs[2].textContent;
let contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "soy otro texto para probar";
console.log(contenidoEnTexto);

let contenidoEnTexto1 = todosLosDivs[1];
contenidoEnTexto1.innerHTML = 'funcionó';
contenidoEnTexto1.style.padding = '30px';
contenidoEnTexto1.style.background = 'green';
contenidoEnTexto1.style.color = 'white';
console.log(contenidoEnTexto1);

let titulo = document.getElementsByTagName('h1');
titulo.innerHTML ='super aprendido';
console.log(titulo);
//ahora todos los divs


