//Function Scope

function greeting() {
    let userName = 'Ana';
    console.log(userName);
    
    if(userName === 'Ana') {
        console.log(`hello ${userName}!`);
    }
}

greeting();
console.log(userName); // No puedo acceder a esta variable, solo porque el alcance solo esta dentro de la función