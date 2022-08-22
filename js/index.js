

// // click button card
// function addToCart(element) {
//     const player = element.parentNode.children[0].innerText;
//     const button = element.parentNode.children[1];
//     if (button === element) {
//         button.style.display = 'none';

//     }

//     const pd = {
//         pdName: player
//     }

//     cart.push(pd);

//     displayProduct();


// };


cart = [];

//player details top card
function addToCart(element) {

    const player = element.parentNode.children[0].innerText;
    const button = element.parentNode.children[1];
    if (button === element) {
        button.style.display = 'none';

    }

    const pd = {
        pdName: player
    }

    cart.push(pd);

    const playersDetails = document.getElementById("players-name");





    if (cart.length <= 5) {

        playersDetails.textContent = '';

        for (let i = 0; i < cart.length; i++) {

            const tr = document.createElement("ol");
            tr.innerHTML = `
                 <th>${i + 1}.</th>
                 <td>${cart[i].pdName}</td>
                
                 `;
            playersDetails.appendChild(tr);
        }
    }
    else {
        alert('Sorry! cant add more than 5 players at a time..');
        cart.pop();
    }

};






document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player-field');
    const playerFieldString = perPlayerField.value;
    const playerField = parseFloat(playerFieldString);


    //calcualtion

    const totalPlayerAmount = playerField * cart.length;


    //set the value

    const playerExpense = document.getElementById('player-expense');
    const expenseString = playerExpense.innerText;
    const expenseText = parseFloat(expenseString);
    playerExpense.innerText = totalPlayerAmount;





});










