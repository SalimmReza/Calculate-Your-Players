function getMangerFieldValueById(inputFieldId) {
    const managerField = document.getElementById(inputFieldId);
    const managerTextString = managerField.value;
    const managerText = parseFloat(managerTextString);
    return managerText;
}