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