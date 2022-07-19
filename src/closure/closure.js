
function greeting() {
    let userName = 'Christian';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName
}

const g = greeting();
console.log(g); // Estamos retornando la definición de la función que tiene userName
console.log(g()); // Cuando se ejecuta nos entrega el valor