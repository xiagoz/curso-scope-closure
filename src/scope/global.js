// Variables

var a; // declarando
var b = 'b'; // declarando y asignamos al mismo tiempo
b = 'bb'; // reasignación
var a = 'aa'; // redeclaramos

//Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit); //desde otro bloque de código podemos acceder a la variable global fruit
}

bestFruit();

function countries() {
    var country = 'Panamá';
    console.log(country); // global
}

countries();
console.log(country); // A pesar que declare y asigne a country dentro de una función. Pude acceder a ella desde fuera dela función.