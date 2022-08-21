cart = [];
document.getElementById('players-card').addEventListener('click', function (event) {
    const player = event.target.parentNode.childNodes[1].innerText;
    const playerName = {
        Name: player
    }
    cart.push(playerName);
    const playersDetails = document.getElementById("players-name");


    if (cart.length > 5) {
        alert('Only 5 players allowed')

    }
    else {
        playersDetails.innerText = '';
        for (let i = 0; i < cart.length; i++) {

            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${cart[i].Name}</td>
            
            `;
            playersDetails.appendChild(tr);


        }
    }
});




