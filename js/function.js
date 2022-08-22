function getMangerFieldValueById(inputFieldId) {
    const budgetField = document.getElementById(inputFieldId);
    const budgetTextString = budgetField.value;
    const budgetText = parseFloat(budgetTextString);


    return budgetText;

};





