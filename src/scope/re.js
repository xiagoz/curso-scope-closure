//Reasignación y redeclaración
// En ECMAScript 6+ fue donde se incluyo las variables let y const

// VAR

var firstName; // Cuando solo se declara se le asigna un valor undefined.
console.log(firstName);
firstName = 'Christian';
console.log(firstName);

var lastName = 'David'; //declarar y asignar
lastName = 'Ana'; // reasignando
console.log(lastName);

var secondName = 'David'; // declarando y asignando
var secondName = 'Ana'; // reasignando
console.log(secondName);

// LET

let fruit = 'Apple'; //Declarar y asignar
fruit = 'kiwi'; //reasignar
console.log(fruit);
let fruit = 'Banana'; // Let no te permite RE-DECLARAR de nuevo y envía error
console.log(fruit);

// CONST

const animal = 'dog'; //declara y asigna
animal = 'cat'; // reasignando
console.log(animal);

// const permite editar arreglo y objetos, porque estos
// estan almacenados por referencia y no por valor en memoria
const vehicles = [];
vehicles.push("🚀");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);