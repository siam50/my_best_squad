const selectButton = document.getElementsByClassName('btn-select');
for (const select of selectButton) {
    select.addEventListener('click', function (event) {
        const olList = document.getElementById('ol-list');
        if (olList.childNodes.length <= 5) {
            event.target.setAttribute('disabled', 'disabled');
            const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
            const li = document.createElement('li');
            li.innerText = playerName;
            olList.appendChild(li);
        }
        else {
            alert('You Cannot Select More Than five Players')
        }

    })
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerPrice = getInputValue('player-price');
    const olList = document.getElementById('ol-list');
    const olLength = olList.childNodes.length;
    const totalPlayerExpenses = playerPrice * (olLength - 1);
    console.log(totalPlayerExpenses);
    setValue('player-expenses', totalPlayerExpenses);
})

document.getElementById('btn-total').addEventListener('click', function () {
    const managerPrice = getInputValue('manager');
    const coachPrice = getInputValue('coach');
    const totalPlayerExpenses = getElementValue('player-expenses');
    const totalCost = managerPrice + coachPrice + totalPlayerExpenses;
    setValue('total', totalCost);
})