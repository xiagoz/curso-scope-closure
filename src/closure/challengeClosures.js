// Utilizar closures para saber la cuenta del super que hizo cada persona.

function purchaseGroceries () {
    let groceries = [];
    let x = 0
    function purchase (item) {
        groceries.push(item);
        console.log(groceries);

    }
    return purchase;
}

const checkChristian =purchaseGroceries();
checkChristian('meat');
checkChristian('apples');
checkChristian(['onions', 'garlic']);
