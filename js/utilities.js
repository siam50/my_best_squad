function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValues = inputField.value;
    const convertNumber = parseFloat(inputValues);
    return convertNumber;
}

function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValue = elementField.innerText;
    const convertNumber = parseFloat(elementValue);
    return convertNumber;
}

function setValue(elementId, value) {
    const getElementField = document.getElementById(elementId);
    getElementField.innerText = value;
}