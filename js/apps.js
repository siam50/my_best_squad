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

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValues = inputField.value;
    const covertNumber = parseFloat(inputValues);
    return covertNumber;
}

function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValue = elementField.innerText;
    const covertNumber = parseFloat(elementValue);
    return covertNumber;
}

function setValue(elementId, value) {
    const getElementField = document.getElementById(elementId);
    getElementField.innerText = value;
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