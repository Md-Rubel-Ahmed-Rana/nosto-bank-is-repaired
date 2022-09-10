function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseInt(textElementValueString);
  textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = getTextElementValueById(elementId);
  textElement.value = newValue;
}
