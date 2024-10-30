const quizQuestions = [
    {
      question:
        "What are your main concerns or reasons for seeking therapy? Select all that apply.",
      options: [
        "Anxiety",
        "Depression",
        "Stress",
        "Relationship",
        "Grief or loss",
        "Trauma",
        "Finances",
        "Self-esteem",
      ],
    },
  ];
  
  let responses = [];
  
  function displayQuestions(index) {
    const question = quizQuestions[index];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
  
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";
  
    question.options.forEach((option, i) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => selectOption(i));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function selectOption(index) {
    const currentQuestion = quizQuestions[responses.length];
    responses[responses.length] = currentQuestion.options[index];
    displayNextQuestion;
  }
  
  function displayNextQuestion() {
    if (responses.length < quizQuestions.length) {
      displayQuestions(responses.length);
    } else {
      submitQuiz();
    }
  }
  
  function submitQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultElement = document.getElementById("result");
    quizContainer.style.display = "none";
    resultElement.style.display = "block";
    resultElement.textContent = "thank you";
  }
  
  displayQuestions(0);
  