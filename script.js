const quizData = [
  {
    question:
      "Which of thr following is used to measure haemoglobin levels in the blood",
    choices: [
      "Hemocytometer",
      "centrifuge",
      "spectrophotometer",
      "colorimeter",
    ],
    answer: "colorimeter",
  },
  {
    question:
      "What anticoagulant is used in a lavender-top blood collection tube?",
    choices: ["EDTA", "Heparin", "Sodium citrate", "potassium oxalate"],
    answer: "EDTA",
  },
  {
    question: "What is the most common staining technique used in hematology?",
    choices: [
      "Ziehl-neelsen staining",
      "Acid-fast staining",
      "wright's staining",
      "Gram staining",
    ],
    answer: "Gram staining",
  },
  {
    question: "What is the normal pH range of human blood?",
    choices: ["6.5-7.0", "7.35-7.45", "6.8-7.2", "7.8-7.45"],
    answer: "7.35-7.45",
  },
  {
    question:
      "Which white blood cell type is elaveted in bacterial infections?",
    choices: ["lymphocytes", "Neutrophils", "Eosinophils", "Basophils"],
    answer: "Neutrophils",
  },
  {
    question: "What is the most common staining technique used in hematology?",
    choices: [
      "Ziehl-neelsen staining",
      "Acid-fast staining",
      "wright's staining",
      "Gram staining",
    ],
    answer: "Gram staining",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const landingPage = document.getElementById("landing-page");
const quizContainer = document.getElementById("quiz-container");
const resultPage = document.getElementById("result-page");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");
const progressElement = document.getElementById("progress");

function startQuiz() {
  landingPage.style.display = "none";
  quizContainer.style.display = "block";
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;
  choicesElement.innerHTML = "";

  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${
    quizData.length
  }`;

  currentQuestion.choices.forEach((choice) => {
    const choiceId = `choice-${choice}`;
    const choiceElement = `
            <label class="choice-label">
              <input type="radio" name="answer" value="${choice}" id="${choiceId}">
              ${choice}
            </label>
          `;
    choicesElement.innerHTML += choiceElement;
  });

  prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
  nextButton.textContent =
    currentQuestionIndex < quizData.length - 1 ? "Next" : "Submit";
}

function getSelectedChoice() {
  const selectedRadio = document.querySelector('input[name="answer"]:checked');
  return selectedRadio ? selectedRadio.value : null;
}

function nextQuestion() {
  const selectedChoice = getSelectedChoice();

  if (selectedChoice === quizData[currentQuestionIndex].answer) {
    score++;
  }

  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

function showResults() {
  quizContainer.style.display = "none";
  resultPage.style.display = "block";
  scoreDisplay.textContent = `Your score: ${score}/${quizData.length}`;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  resultPage.style.display = "none";
  landingPage.style.display = "block";
}
