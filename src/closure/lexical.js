const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // function interna (ya que he creado un closure)
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child()
    }
    return parent()
}

myFunction();

// Ambíto Lexico = La accesibilidad de las variables esta determinada
// por la posición de las mismas dentro de los ambitos anidados.