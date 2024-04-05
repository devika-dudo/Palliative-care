document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    // Check mandatory questions 1-14
    var mandatoryQuestions = document.querySelectorAll('#mandatoryQuestions .question');
    for (var i = 0; i < mandatoryQuestions.length; i++) {
        var input = mandatoryQuestions[i].querySelector('input[type="text"], input[type="radio"]');
        if (input.type === 'text' && input.value.trim() === '') {
            event.preventDefault(); // Prevent form submission
            alert('Please fill in at least one option for questions 1-14.');
            return;
        } else if (input.type === 'radio' && !input.checked) {
            event.preventDefault(); // Prevent form submission
            alert('Please select an option for questions 1-14.');
            return;
        }
    }

    // Check optional questions 15-30
    var optionalQuestions = document.querySelectorAll('#optionalQuestions .question');
    var answeredOptionalQuestion = false;
    for (var j = 0; j < optionalQuestions.length; j++) {
        var input = optionalQuestions[j].querySelector('input[type="text"]');
        if (input.value.trim() !== '') {
            answeredOptionalQuestion = true;
            break;
        }
    }
    if (!answeredOptionalQuestion) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in at least one option for questions 15-30.');
        return;
    }
});

// Function to toggle radio button selection
function toggleSelection(radioButton) {
    // Check if the radio button is already selected
    if (radioButton.checked) {
        // Deselect the radio button
        radioButton.checked = false;
    } else {
        // Select the radio button
        radioButton.checked = true;
    }
}


