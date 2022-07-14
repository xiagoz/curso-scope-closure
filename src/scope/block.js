// Block Scope = las varaibles definidas dentro de un bloque solo se pueden usar dentro de ese bloque.

function fruits() {
// let y const
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope


    console.log(fruit2);
    console.log(fruit3);
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();