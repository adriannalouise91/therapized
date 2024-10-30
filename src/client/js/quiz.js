const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const nextButton = document .getElementById('next-btn')

function checkCheckboxes() {
    const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    nextButton.style.display = anyChecked ? 'block' : 'none';
}
//add event listener to each checkbox to check on every change
checkboxes.forEach(checkbox => checkbox.addEventListener('change',checkCheckboxes));


//show next question
function showNextQuestion(question2) {
    //hide all questions
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'none';
        question.classList.remove('active');
        });

    // show next question
    const nextQuestion = document.getElementById(`question${question2}`);
    nextQuestion.style.display = 'block';
    //add delay before making active for smooth transition
    setTimeout(() => nextQuestion.classList.add('active'), 20);
}