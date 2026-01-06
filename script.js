// ========== Estado do Quiz ==========
let quizState = {
    mode: 'quiz', // 'quiz', 'flashcard' ou 'interview'
    selectedCategories: [],
    shuffleQuestions: true,
    shuffleAnswers: false,
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    answers: [], // {questionIndex, selectedAnswer, isCorrect} ou {questionIndex, knew}
    // Estado específico da entrevista
    interviewAnswers: [], // {questionIndex, userAnswer, rating}
    interviewLanguage: 'pt' // 'pt' ou 'en'
};

// ========== Elementos DOM ==========
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    review: document.getElementById('review-screen'),
    flashcard: document.getElementById('flashcard-screen'),
    flashcardResult: document.getElementById('flashcard-result-screen'),
    flashcardReview: document.getElementById('flashcard-review-screen'),
    interview: document.getElementById('interview-screen'),
    interviewResult: document.getElementById('interview-result-screen'),
    interviewReview: document.getElementById('interview-review-screen')
};

const elements = {
    // Home
    modeRadios: document.querySelectorAll('input[name="quiz-mode"]'),
    categoryCheckboxes: document.querySelectorAll('.category-card input'),
    shuffleQuestionsToggle: document.getElementById('shuffle-questions'),
    shuffleAnswersToggle: document.getElementById('shuffle-answers'),
    shuffleAnswersOption: document.getElementById('shuffle-answers-option'),
    startBtn: document.getElementById('start-btn'),
    startBtnText: document.getElementById('start-btn-text'),
    questionCount: document.getElementById('question-count'),

    // Quiz
    currentQuestion: document.getElementById('current-question'),
    totalQuestions: document.getElementById('total-questions'),
    progressFill: document.getElementById('progress-fill'),
    currentScore: document.getElementById('current-score'),
    questionCategory: document.getElementById('question-category'),
    questionText: document.getElementById('question-text'),
    answersContainer: document.getElementById('answers-container'),
    feedback: document.getElementById('feedback'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackExplanation: document.getElementById('feedback-explanation'),
    nextBtn: document.getElementById('next-btn'),

    // Result
    resultIcon: document.getElementById('result-icon'),
    finalScore: document.getElementById('final-score'),
    finalTotal: document.getElementById('final-total'),
    resultPercentage: document.getElementById('result-percentage'),
    resultMessage: document.getElementById('result-message'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    reviewBtn: document.getElementById('review-btn'),
    restartBtn: document.getElementById('restart-btn'),

    // Review
    reviewContainer: document.getElementById('review-container'),
    backToResultBtn: document.getElementById('back-to-result'),

    // Flashcard
    fcCurrentQuestion: document.getElementById('fc-current-question'),
    fcTotalQuestions: document.getElementById('fc-total-questions'),
    fcProgressFill: document.getElementById('fc-progress-fill'),
    fcCurrentScore: document.getElementById('fc-current-score'),
    fcQuestionCategory: document.getElementById('fc-question-category'),
    fcQuestionText: document.getElementById('fc-question-text'),
    fcAnswerSection: document.getElementById('fc-answer-section'),
    fcCorrectAnswer: document.getElementById('fc-correct-answer'),
    fcExplanation: document.getElementById('fc-explanation'),
    fcRevealBtn: document.getElementById('fc-reveal-btn'),
    fcSelfEval: document.getElementById('fc-self-eval'),
    fcKnewBtn: document.getElementById('fc-knew-btn'),
    fcDidntKnowBtn: document.getElementById('fc-didnt-know-btn'),

    // Flashcard Result
    fcResultIcon: document.getElementById('fc-result-icon'),
    fcFinalScore: document.getElementById('fc-final-score'),
    fcFinalTotal: document.getElementById('fc-final-total'),
    fcResultPercentage: document.getElementById('fc-result-percentage'),
    fcResultMessage: document.getElementById('fc-result-message'),
    fcKnewCount: document.getElementById('fc-knew-count'),
    fcDidntKnowCount: document.getElementById('fc-didnt-know-count'),
    fcReviewBtn: document.getElementById('fc-review-btn'),
    fcRestartBtn: document.getElementById('fc-restart-btn'),

    // Flashcard Review
    fcReviewContainer: document.getElementById('fc-review-container'),
    fcBackToResultBtn: document.getElementById('fc-back-to-result'),

    // Interview - Home
    categorySection: document.getElementById('category-section'),
    interviewCategorySection: document.getElementById('interview-category-section'),
    interviewCategoryCheckboxes: document.querySelectorAll('.interview-category'),
    shuffleInterviewToggle: document.getElementById('shuffle-interview'),
    startInterviewBtn: document.getElementById('start-interview-btn'),
    interviewCount: document.getElementById('interview-count'),
    interviewLanguageRadios: document.querySelectorAll('input[name="interview-language"]'),
    interviewSectionTitle: document.getElementById('interview-section-title'),

    // Interview
    ivCurrentQuestion: document.getElementById('iv-current-question'),
    ivTotalQuestions: document.getElementById('iv-total-questions'),
    ivProgressFill: document.getElementById('iv-progress-fill'),
    ivSkipBtn: document.getElementById('iv-skip-btn'),
    ivQuestionCategory: document.getElementById('iv-question-category'),
    ivQuestionText: document.getElementById('iv-question-text'),
    ivTipSection: document.getElementById('iv-tip-section'),
    ivTipText: document.getElementById('iv-tip-text'),
    ivUserAnswer: document.getElementById('iv-user-answer'),
    ivRevealBtn: document.getElementById('iv-reveal-btn'),
    ivAnswerSection: document.getElementById('iv-answer-section'),
    ivModelAnswerText: document.getElementById('iv-model-answer-text'),
    ivKeyPointsList: document.getElementById('iv-key-points-list'),
    ivEvalButtons: document.querySelectorAll('.iv-eval-btn'),

    // Interview Result
    ivResultIcon: document.getElementById('iv-result-icon'),
    ivTotalPracticed: document.getElementById('iv-total-practiced'),
    ivGreatCount: document.getElementById('iv-great-count'),
    ivGoodCount: document.getElementById('iv-good-count'),
    ivOkCount: document.getElementById('iv-ok-count'),
    ivBadCount: document.getElementById('iv-bad-count'),
    ivResultMessage: document.getElementById('iv-result-message'),
    ivReviewBtn: document.getElementById('iv-review-btn'),
    ivRestartBtn: document.getElementById('iv-restart-btn'),

    // Interview Review
    ivReviewContainer: document.getElementById('iv-review-container'),
    ivBackToResultBtn: document.getElementById('iv-back-to-result')
};

// ========== Funções Utilitárias ==========
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    window.scrollTo(0, 0);
}

function getSelectedMode() {
    const selectedRadio = document.querySelector('input[name="quiz-mode"]:checked');
    return selectedRadio ? selectedRadio.value : 'quiz';
}

function getSelectedInterviewLanguage() {
    const selectedRadio = document.querySelector('input[name="interview-language"]:checked');
    return selectedRadio ? selectedRadio.value : 'pt';
}

function getInterviewQuestionsByLanguage() {
    return quizState.interviewLanguage === 'en' ? interviewQuestionsEN : interviewQuestions;
}

function getInterviewCategoryNamesByLanguage() {
    return quizState.interviewLanguage === 'en' ? interviewCategoryNamesEN : interviewCategoryNames;
}

function updateModeUI() {
    const mode = getSelectedMode();

    // Mostrar/esconder seções de categoria apropriadas
    if (mode === 'interview') {
        elements.categorySection.classList.add('hidden');
        elements.interviewCategorySection.classList.remove('hidden');
        updateInterviewCount();
    } else {
        elements.categorySection.classList.remove('hidden');
        elements.interviewCategorySection.classList.add('hidden');

        // Atualizar texto do botão
        if (mode === 'quiz') {
            elements.startBtnText.textContent = 'Iniciar Quiz';
            elements.shuffleAnswersOption.style.display = 'flex';
        } else {
            elements.startBtnText.textContent = 'Iniciar Flashcard';
            elements.shuffleAnswersOption.style.display = 'none';
        }
        updateQuestionCount();
    }
}

function updateQuestionCount() {
    const selectedCategories = Array.from(elements.categoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    let totalQuestions = 0;
    selectedCategories.forEach(category => {
        if (questions[category]) {
            totalQuestions += questions[category].length;
        }
    });

    if (totalQuestions > 0) {
        elements.questionCount.textContent = `${totalQuestions} questões disponíveis`;
        elements.startBtn.disabled = false;
    } else {
        elements.questionCount.textContent = 'Selecione pelo menos uma categoria';
        elements.startBtn.disabled = true;
    }
}

function updateInterviewCount() {
    const selectedCategories = Array.from(elements.interviewCategoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const lang = getSelectedInterviewLanguage();
    const questionsSource = lang === 'en' ? interviewQuestionsEN : interviewQuestions;

    let totalQuestions = 0;
    selectedCategories.forEach(category => {
        if (questionsSource[category]) {
            totalQuestions += questionsSource[category].length;
        }
    });

    if (totalQuestions > 0) {
        const text = lang === 'en' ? `${totalQuestions} questions available` : `${totalQuestions} perguntas disponíveis`;
        elements.interviewCount.textContent = text;
        elements.startInterviewBtn.disabled = false;
    } else {
        const text = lang === 'en' ? 'Select at least one topic' : 'Selecione pelo menos um tema';
        elements.interviewCount.textContent = text;
        elements.startInterviewBtn.disabled = true;
    }

    // Atualizar textos da UI baseado no idioma
    updateInterviewUILanguage(lang);
}

function updateInterviewUILanguage(lang) {
    if (lang === 'en') {
        elements.interviewSectionTitle.textContent = 'Choose interview topics:';
        elements.startInterviewBtn.querySelector('span').textContent = 'Start Interview';
    } else {
        elements.interviewSectionTitle.textContent = 'Escolha os temas da entrevista:';
        elements.startInterviewBtn.querySelector('span').textContent = 'Iniciar Entrevista';
    }
}

// ========== Lógica do Quiz ==========
function prepareQuestions() {
    quizState.currentQuestions = [];

    quizState.selectedCategories.forEach(category => {
        if (questions[category]) {
            questions[category].forEach(q => {
                quizState.currentQuestions.push({
                    ...q,
                    category: category,
                    originalAnswers: [...q.answers],
                    answerMapping: q.answers.map((_, index) => index)
                });
            });
        }
    });

    // Embaralhar questões se habilitado
    if (quizState.shuffleQuestions) {
        quizState.currentQuestions = shuffleArray(quizState.currentQuestions);
    }

    // Embaralhar alternativas se habilitado (apenas modo quiz)
    if (quizState.shuffleAnswers && quizState.mode === 'quiz') {
        quizState.currentQuestions = quizState.currentQuestions.map(q => {
            const indices = q.answers.map((_, i) => i);
            const shuffledIndices = shuffleArray(indices);

            return {
                ...q,
                answers: shuffledIndices.map(i => q.originalAnswers[i]),
                answerMapping: shuffledIndices,
                correct: shuffledIndices.indexOf(q.correct)
            };
        });
    }
}

function startSession() {
    // Coletar configurações
    quizState.mode = getSelectedMode();
    quizState.selectedCategories = Array.from(elements.categoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    quizState.shuffleQuestions = elements.shuffleQuestionsToggle.checked;
    quizState.shuffleAnswers = elements.shuffleAnswersToggle.checked;
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.answers = [];

    // Preparar questões
    prepareQuestions();

    if (quizState.currentQuestions.length === 0) {
        alert('Selecione pelo menos uma categoria!');
        return;
    }

    if (quizState.mode === 'quiz') {
        // Atualizar UI do Quiz
        elements.totalQuestions.textContent = quizState.currentQuestions.length;
        elements.currentScore.textContent = '0';
        showScreen('quiz');
        showQuestion();
    } else {
        // Atualizar UI do Flashcard
        elements.fcTotalQuestions.textContent = quizState.currentQuestions.length;
        elements.fcCurrentScore.textContent = '0';
        showScreen('flashcard');
        showFlashcard();
    }
}

// ========== Modo Quiz ==========
function showQuestion() {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const questionNumber = quizState.currentQuestionIndex + 1;
    const totalQuestions = quizState.currentQuestions.length;

    // Atualizar header
    elements.currentQuestion.textContent = questionNumber;
    elements.progressFill.style.width = `${(questionNumber / totalQuestions) * 100}%`;

    // Atualizar categoria
    elements.questionCategory.textContent = `${categoryIcons[question.category]} ${categoryNames[question.category]}`;

    // Atualizar pergunta
    elements.questionText.textContent = question.question;

    // Limpar e criar alternativas
    elements.answersContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `
            <span class="answer-letter">${letters[index]}</span>
            <span class="answer-text">${answer}</span>
        `;
        button.addEventListener('click', () => selectAnswer(index));
        elements.answersContainer.appendChild(button);
    });

    // Esconder feedback e botão próximo
    elements.feedback.classList.add('hidden');
    elements.feedback.classList.remove('correct', 'wrong');
    elements.nextBtn.classList.add('hidden');
}

function selectAnswer(selectedIndex) {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    const buttons = elements.answersContainer.querySelectorAll('.answer-btn');

    // Desabilitar todos os botões
    buttons.forEach(btn => btn.disabled = true);

    // Marcar resposta selecionada
    buttons[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');

    // Mostrar resposta correta se errou
    if (!isCorrect) {
        buttons[question.correct].classList.add('correct');
    }

    // Atualizar pontuação
    if (isCorrect) {
        quizState.score++;
        elements.currentScore.textContent = quizState.score;
    }

    // Salvar resposta
    quizState.answers.push({
        questionIndex: quizState.currentQuestionIndex,
        selectedAnswer: selectedIndex,
        isCorrect: isCorrect
    });

    // Mostrar feedback
    elements.feedback.classList.remove('hidden', 'correct', 'wrong');
    elements.feedback.classList.add(isCorrect ? 'correct' : 'wrong');
    elements.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
    elements.feedbackText.textContent = isCorrect ? 'Correto!' : 'Incorreto!';
    elements.feedbackExplanation.textContent = question.explanation;

    // Mostrar botão próximo
    elements.nextBtn.classList.remove('hidden');

    // Atualizar texto do botão
    if (quizState.currentQuestionIndex === quizState.currentQuestions.length - 1) {
        elements.nextBtn.innerHTML = '<span>Ver Resultado</span><span class="btn-icon">→</span>';
    } else {
        elements.nextBtn.innerHTML = '<span>Próxima</span><span class="btn-icon">→</span>';
    }
}

function nextQuestion() {
    quizState.currentQuestionIndex++;

    if (quizState.currentQuestionIndex < quizState.currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const total = quizState.currentQuestions.length;
    const score = quizState.score;
    const percentage = Math.round((score / total) * 100);
    const wrong = total - score;

    // Atualizar valores
    elements.finalScore.textContent = score;
    elements.finalTotal.textContent = total;
    elements.correctCount.textContent = score;
    elements.wrongCount.textContent = wrong;

    // Atualizar porcentagem com classe de cor
    elements.resultPercentage.textContent = `${percentage}%`;
    elements.resultPercentage.className = 'result-percentage';

    if (percentage >= 80) {
        elements.resultPercentage.classList.add('excellent');
        elements.resultIcon.textContent = '🏆';
        elements.resultMessage.textContent = 'Excelente! Você domina o conteúdo!';
    } else if (percentage >= 60) {
        elements.resultPercentage.classList.add('good');
        elements.resultIcon.textContent = '🎉';
        elements.resultMessage.textContent = 'Bom trabalho! Continue estudando!';
    } else if (percentage >= 40) {
        elements.resultPercentage.classList.add('average');
        elements.resultIcon.textContent = '📚';
        elements.resultMessage.textContent = 'Você está no caminho certo. Revise os pontos fracos!';
    } else {
        elements.resultPercentage.classList.add('poor');
        elements.resultIcon.textContent = '💪';
        elements.resultMessage.textContent = 'Não desanime! Estude mais e tente novamente!';
    }

    showScreen('result');
}

function showReview() {
    elements.reviewContainer.innerHTML = '';

    quizState.answers.forEach((answer, index) => {
        const question = quizState.currentQuestions[answer.questionIndex];
        const letters = ['A', 'B', 'C', 'D', 'E'];

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'wrong'}`;

        let answersHTML = question.answers.map((ans, i) => {
            let classes = 'review-answer';
            let markers = '';

            if (i === answer.selectedAnswer && !answer.isCorrect) {
                classes += ' user-answer';
                markers += '<span class="review-answer-marker user">Sua resposta</span>';
            }
            if (i === question.correct) {
                classes += ' correct-answer';
                markers += '<span class="review-answer-marker correct">Correta</span>';
            }

            return `
                <div class="${classes}">
                    <strong>${letters[i]}.</strong> ${ans}
                    ${markers}
                </div>
            `;
        }).join('');

        reviewItem.innerHTML = `
            <div class="review-question-header">
                <span class="review-number">Questão ${index + 1}</span>
                <span class="review-category">${categoryIcons[question.category]} ${categoryNames[question.category]}</span>
                <span class="review-status">${answer.isCorrect ? '✓' : '✗'}</span>
            </div>
            <p class="review-question-text">${question.question}</p>
            <div class="review-answers">
                ${answersHTML}
            </div>
            <div class="review-explanation">
                <p class="review-explanation-title">💡 Explicação:</p>
                <p class="review-explanation-text">${question.explanation}</p>
            </div>
        `;

        elements.reviewContainer.appendChild(reviewItem);
    });

    showScreen('review');
}

// ========== Modo Flashcard ==========
function showFlashcard() {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const questionNumber = quizState.currentQuestionIndex + 1;
    const totalQuestions = quizState.currentQuestions.length;

    // Atualizar header
    elements.fcCurrentQuestion.textContent = questionNumber;
    elements.fcProgressFill.style.width = `${(questionNumber / totalQuestions) * 100}%`;

    // Atualizar categoria
    elements.fcQuestionCategory.textContent = `${categoryIcons[question.category]} ${categoryNames[question.category]}`;

    // Atualizar pergunta
    elements.fcQuestionText.textContent = question.question;

    // Preparar resposta (usar a resposta correta original)
    const correctAnswerText = question.originalAnswers[question.correct];
    elements.fcCorrectAnswer.textContent = correctAnswerText;
    elements.fcExplanation.textContent = question.explanation;

    // Resetar estado visual
    elements.fcAnswerSection.classList.add('hidden');
    elements.fcRevealBtn.classList.remove('hidden');
    elements.fcSelfEval.classList.add('hidden');
}

function revealAnswer() {
    elements.fcRevealBtn.classList.add('hidden');
    elements.fcAnswerSection.classList.remove('hidden');
    elements.fcSelfEval.classList.remove('hidden');
}

function evaluateSelf(knew) {
    // Atualizar pontuação
    if (knew) {
        quizState.score++;
        elements.fcCurrentScore.textContent = quizState.score;
    }

    // Salvar resposta
    quizState.answers.push({
        questionIndex: quizState.currentQuestionIndex,
        knew: knew
    });

    // Próxima questão
    quizState.currentQuestionIndex++;

    if (quizState.currentQuestionIndex < quizState.currentQuestions.length) {
        showFlashcard();
    } else {
        showFlashcardResults();
    }
}

function showFlashcardResults() {
    const total = quizState.currentQuestions.length;
    const score = quizState.score;
    const percentage = Math.round((score / total) * 100);
    const didntKnow = total - score;

    // Atualizar valores
    elements.fcFinalScore.textContent = score;
    elements.fcFinalTotal.textContent = total;
    elements.fcKnewCount.textContent = score;
    elements.fcDidntKnowCount.textContent = didntKnow;

    // Atualizar porcentagem com classe de cor
    elements.fcResultPercentage.textContent = `${percentage}%`;
    elements.fcResultPercentage.className = 'result-percentage';

    if (percentage >= 80) {
        elements.fcResultPercentage.classList.add('excellent');
        elements.fcResultIcon.textContent = '🧠';
        elements.fcResultMessage.textContent = 'Excelente memória! Você domina o conteúdo!';
    } else if (percentage >= 60) {
        elements.fcResultPercentage.classList.add('good');
        elements.fcResultIcon.textContent = '📖';
        elements.fcResultMessage.textContent = 'Bom progresso! Continue revisando!';
    } else if (percentage >= 40) {
        elements.fcResultPercentage.classList.add('average');
        elements.fcResultIcon.textContent = '📚';
        elements.fcResultMessage.textContent = 'Revise os cartões que você errou!';
    } else {
        elements.fcResultPercentage.classList.add('poor');
        elements.fcResultIcon.textContent = '💪';
        elements.fcResultMessage.textContent = 'Não desanime! A repetição é a mãe do aprendizado!';
    }

    showScreen('flashcardResult');
}

function showFlashcardReview() {
    elements.fcReviewContainer.innerHTML = '';

    quizState.answers.forEach((answer, index) => {
        const question = quizState.currentQuestions[answer.questionIndex];
        const correctAnswerText = question.originalAnswers[question.correct];

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.knew ? 'knew' : 'didnt-know'}`;

        reviewItem.innerHTML = `
            <div class="review-question-header">
                <span class="review-number">Cartão ${index + 1}</span>
                <span class="review-category">${categoryIcons[question.category]} ${categoryNames[question.category]}</span>
                <span class="review-status">${answer.knew ? '✓ Sabia' : '✗ Não sabia'}</span>
            </div>
            <p class="review-question-text">${question.question}</p>
            <div class="review-answer correct-answer" style="margin-bottom: 15px;">
                <strong>Resposta:</strong> ${correctAnswerText}
            </div>
            <div class="review-explanation">
                <p class="review-explanation-title">💡 Explicação:</p>
                <p class="review-explanation-text">${question.explanation}</p>
            </div>
        `;

        elements.fcReviewContainer.appendChild(reviewItem);
    });

    showScreen('flashcardReview');
}

// ========== Modo Entrevista ==========
function prepareInterviewQuestions() {
    quizState.currentQuestions = [];
    const questionsSource = getInterviewQuestionsByLanguage();

    quizState.selectedCategories.forEach(category => {
        if (questionsSource[category]) {
            questionsSource[category].forEach(q => {
                quizState.currentQuestions.push({
                    ...q,
                    category: category
                });
            });
        }
    });

    // Embaralhar questões se habilitado
    if (quizState.shuffleQuestions) {
        quizState.currentQuestions = shuffleArray(quizState.currentQuestions);
    }
}

function startInterview() {
    // Coletar configurações
    quizState.mode = 'interview';
    quizState.interviewLanguage = getSelectedInterviewLanguage();
    quizState.selectedCategories = Array.from(elements.interviewCategoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    quizState.shuffleQuestions = elements.shuffleInterviewToggle.checked;
    quizState.currentQuestionIndex = 0;
    quizState.interviewAnswers = [];

    // Preparar questões
    prepareInterviewQuestions();

    if (quizState.currentQuestions.length === 0) {
        const msg = quizState.interviewLanguage === 'en' ? 'Select at least one topic!' : 'Selecione pelo menos um tema!';
        alert(msg);
        return;
    }

    // Atualizar UI baseado no idioma
    const isEnglish = quizState.interviewLanguage === 'en';
    updateInterviewScreenUI(isEnglish);

    // Atualizar UI
    elements.ivTotalQuestions.textContent = quizState.currentQuestions.length;
    showScreen('interview');
    showInterviewQuestion();
}

function showInterviewQuestion() {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const questionNumber = quizState.currentQuestionIndex + 1;
    const totalQuestions = quizState.currentQuestions.length;
    const categoryNames = getInterviewCategoryNamesByLanguage();
    const isEnglish = quizState.interviewLanguage === 'en';

    // Atualizar header
    elements.ivCurrentQuestion.textContent = questionNumber;
    elements.ivProgressFill.style.width = `${(questionNumber / totalQuestions) * 100}%`;

    // Atualizar categoria
    elements.ivQuestionCategory.textContent = `${interviewCategoryIcons[question.category]} ${categoryNames[question.category]}`;

    // Atualizar pergunta
    elements.ivQuestionText.textContent = question.question;

    // Atualizar dica
    if (question.tip) {
        elements.ivTipSection.classList.remove('hidden');
        elements.ivTipText.textContent = question.tip;
    } else {
        elements.ivTipSection.classList.add('hidden');
    }

    // Limpar resposta do usuário
    elements.ivUserAnswer.value = '';
    elements.ivUserAnswer.placeholder = isEnglish
        ? "Type your answer here... Or just think about it and click 'Show Model Answer'"
        : "Digite sua resposta aqui... Ou apenas pense nela e clique em 'Ver Resposta Modelo'";

    // Resetar estado visual
    elements.ivAnswerSection.classList.add('hidden');
    elements.ivRevealBtn.classList.remove('hidden');
    elements.ivRevealBtn.textContent = isEnglish ? '👁️ Show Model Answer' : '👁️ Ver Resposta Modelo';

    // Atualizar botão pular
    if (quizState.currentQuestionIndex === totalQuestions - 1) {
        elements.ivSkipBtn.textContent = isEnglish ? 'Finish →' : 'Finalizar →';
    } else {
        elements.ivSkipBtn.textContent = isEnglish ? 'Skip →' : 'Pular →';
    }
}

function revealInterviewAnswer() {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];

    // Mostrar resposta modelo
    elements.ivModelAnswerText.textContent = question.modelAnswer;

    // Mostrar pontos-chave
    elements.ivKeyPointsList.innerHTML = '';
    question.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        elements.ivKeyPointsList.appendChild(li);
    });

    // Esconder botão revelar e mostrar seção de resposta
    elements.ivRevealBtn.classList.add('hidden');
    elements.ivAnswerSection.classList.remove('hidden');
}

function evaluateInterview(rating) {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];

    // Salvar resposta
    quizState.interviewAnswers.push({
        questionIndex: quizState.currentQuestionIndex,
        userAnswer: elements.ivUserAnswer.value,
        rating: rating
    });

    // Próxima questão
    nextInterviewQuestion();
}

function skipInterviewQuestion() {
    // Salvar como pulada (sem rating)
    quizState.interviewAnswers.push({
        questionIndex: quizState.currentQuestionIndex,
        userAnswer: '',
        rating: 'skipped'
    });

    nextInterviewQuestion();
}

function nextInterviewQuestion() {
    quizState.currentQuestionIndex++;

    if (quizState.currentQuestionIndex < quizState.currentQuestions.length) {
        showInterviewQuestion();
    } else {
        showInterviewResults();
    }
}

function showInterviewResults() {
    const total = quizState.interviewAnswers.length;
    const isEnglish = quizState.interviewLanguage === 'en';
    const ratings = {
        great: 0,
        good: 0,
        ok: 0,
        bad: 0,
        skipped: 0
    };

    quizState.interviewAnswers.forEach(answer => {
        ratings[answer.rating]++;
    });

    // Atualizar valores
    elements.ivTotalPracticed.textContent = total;
    elements.ivGreatCount.textContent = ratings.great;
    elements.ivGoodCount.textContent = ratings.good;
    elements.ivOkCount.textContent = ratings.ok;
    elements.ivBadCount.textContent = ratings.bad;

    // Determinar mensagem com base no desempenho
    const positiveResponses = ratings.great + ratings.good;
    const percentage = total > 0 ? (positiveResponses / total) * 100 : 0;

    if (percentage >= 80) {
        elements.ivResultIcon.textContent = '🌟';
        elements.ivResultMessage.textContent = isEnglish
            ? 'Excellent! You are very well prepared for interviews!'
            : 'Excelente! Você está muito bem preparado para entrevistas!';
    } else if (percentage >= 60) {
        elements.ivResultIcon.textContent = '👏';
        elements.ivResultMessage.textContent = isEnglish
            ? 'Good job! Keep practicing to improve even more.'
            : 'Bom trabalho! Continue praticando para melhorar ainda mais.';
    } else if (percentage >= 40) {
        elements.ivResultIcon.textContent = '📚';
        elements.ivResultMessage.textContent = isEnglish
            ? "You're on the right track. Review model answers and practice more!"
            : 'Você está no caminho certo. Revise as respostas modelo e pratique mais!';
    } else {
        elements.ivResultIcon.textContent = '💪';
        elements.ivResultMessage.textContent = isEnglish
            ? "Don't give up! Practice makes perfect. Keep training!"
            : 'Não desanime! A prática leva à perfeição. Continue treinando!';
    }

    // Atualizar textos da UI de resultado
    updateInterviewResultUI(isEnglish);

    showScreen('interviewResult');
}

function updateInterviewResultUI(isEnglish) {
    const total = elements.ivTotalPracticed.textContent;

    // Atualizar título
    document.getElementById('iv-result-title').textContent = isEnglish
        ? 'Interview Completed!'
        : 'Entrevista Concluída!';

    // Atualizar subtítulo
    document.getElementById('iv-result-subtitle').innerHTML = isEnglish
        ? `You practiced <span id="iv-total-practiced">${total}</span> questions`
        : `Você praticou <span id="iv-total-practiced">${total}</span> perguntas`;

    // Atualizar labels de rating
    document.getElementById('iv-great-label').textContent = isEnglish ? 'Great' : 'Ótimas';
    document.getElementById('iv-good-label').textContent = isEnglish ? 'Good' : 'Boas';
    document.getElementById('iv-ok-label').textContent = isEnglish ? 'Okay' : 'Regulares';
    document.getElementById('iv-bad-label').textContent = isEnglish ? 'Needs work' : 'A melhorar';

    // Botões
    elements.ivReviewBtn.querySelector('span').textContent = isEnglish ? '📋 Review Answers' : '📋 Revisar Respostas';
    elements.ivRestartBtn.querySelector('span').textContent = isEnglish ? '🔄 New Interview' : '🔄 Nova Entrevista';
}

function updateInterviewScreenUI(isEnglish) {
    // Badge
    document.getElementById('iv-badge').textContent = isEnglish
        ? '💼 Interview Simulator'
        : '💼 Simulador de Entrevista';

    // Tip label
    document.getElementById('iv-tip-label').textContent = isEnglish ? 'Tip:' : 'Dica:';

    // Answer label
    document.getElementById('iv-answer-label').textContent = isEnglish
        ? 'Your answer (optional - for practice):'
        : 'Sua resposta (opcional - para praticar digitando):';

    // Model answer title
    document.getElementById('iv-answer-title').textContent = isEnglish ? 'Model Answer' : 'Resposta Modelo';

    // Key points title
    document.getElementById('iv-points-title').textContent = isEnglish
        ? 'Key points to include:'
        : 'Pontos-chave para incluir:';

    // Self evaluation question
    document.getElementById('iv-eval-question').textContent = isEnglish
        ? 'How do you rate your answer?'
        : 'Como você avalia sua resposta?';

    // Evaluation button labels
    document.getElementById('iv-eval-great-label').textContent = isEnglish ? 'Great' : 'Ótima';
    document.getElementById('iv-eval-good-label').textContent = isEnglish ? 'Good' : 'Boa';
    document.getElementById('iv-eval-ok-label').textContent = isEnglish ? 'Okay' : 'Regular';
    document.getElementById('iv-eval-bad-label').textContent = isEnglish ? 'Needs work' : 'Preciso melhorar';
}

function showInterviewReview() {
    elements.ivReviewContainer.innerHTML = '';
    const isEnglish = quizState.interviewLanguage === 'en';
    const categoryNames = getInterviewCategoryNamesByLanguage();

    const ratingLabels = isEnglish ? {
        great: '😄 Great',
        good: '🙂 Good',
        ok: '😐 Okay',
        bad: '😟 Needs work',
        skipped: '⏭️ Skipped'
    } : {
        great: '😄 Ótima',
        good: '🙂 Boa',
        ok: '😐 Regular',
        bad: '😟 A melhorar',
        skipped: '⏭️ Pulada'
    };

    const ratingClasses = {
        great: 'rating-great',
        good: 'rating-good',
        ok: 'rating-ok',
        bad: 'rating-bad',
        skipped: 'rating-skipped'
    };

    const labels = isEnglish ? {
        question: 'Question',
        yourAnswer: '📝 Your answer:',
        modelAnswer: '✨ Model answer:',
        keyPoints: '🎯 Key points:'
    } : {
        question: 'Pergunta',
        yourAnswer: '📝 Sua resposta:',
        modelAnswer: '✨ Resposta modelo:',
        keyPoints: '🎯 Pontos-chave:'
    };

    quizState.interviewAnswers.forEach((answer, index) => {
        const question = quizState.currentQuestions[answer.questionIndex];

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item interview-review ${ratingClasses[answer.rating]}`;

        let userAnswerHTML = '';
        if (answer.userAnswer && answer.userAnswer.trim()) {
            userAnswerHTML = `
                <div class="iv-review-user-answer">
                    <p class="iv-review-label">${labels.yourAnswer}</p>
                    <p class="iv-review-text">${answer.userAnswer}</p>
                </div>
            `;
        }

        const keyPointsHTML = question.keyPoints.map(point => `<li>${point}</li>`).join('');

        reviewItem.innerHTML = `
            <div class="review-question-header">
                <span class="review-number">${labels.question} ${index + 1}</span>
                <span class="review-category">${interviewCategoryIcons[question.category]} ${categoryNames[question.category]}</span>
                <span class="review-status ${ratingClasses[answer.rating]}">${ratingLabels[answer.rating]}</span>
            </div>
            <p class="review-question-text">${question.question}</p>
            ${userAnswerHTML}
            <div class="iv-review-model">
                <p class="iv-review-label">${labels.modelAnswer}</p>
                <p class="iv-review-text">${question.modelAnswer}</p>
            </div>
            <div class="iv-review-points">
                <p class="iv-review-label">${labels.keyPoints}</p>
                <ul>${keyPointsHTML}</ul>
            </div>
        `;

        elements.ivReviewContainer.appendChild(reviewItem);
    });

    // Atualizar título da tela de revisão
    const reviewScreen = document.getElementById('interview-review-screen');
    const reviewTitle = reviewScreen.querySelector('h2');
    if (reviewTitle) {
        reviewTitle.textContent = isEnglish ? '📋 Interview Review' : '📋 Revisão da Entrevista';
    }

    // Atualizar botão voltar
    elements.ivBackToResultBtn.textContent = isEnglish ? '← Back to Results' : '← Voltar aos Resultados';

    showScreen('interviewReview');
}

function restartSession() {
    showScreen('home');
}

// ========== Event Listeners ==========
// Atualizar UI ao mudar modo
elements.modeRadios.forEach(radio => {
    radio.addEventListener('change', updateModeUI);
});

// Atualizar contagem de questões ao mudar seleção
elements.categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateQuestionCount);
});

// Iniciar sessão
elements.startBtn.addEventListener('click', startSession);

// Quiz - Próxima questão
elements.nextBtn.addEventListener('click', nextQuestion);

// Quiz - Ver revisão
elements.reviewBtn.addEventListener('click', showReview);

// Quiz - Reiniciar
elements.restartBtn.addEventListener('click', restartSession);

// Quiz - Voltar para resultado
elements.backToResultBtn.addEventListener('click', () => showScreen('result'));

// Flashcard - Revelar resposta
elements.fcRevealBtn.addEventListener('click', revealAnswer);

// Flashcard - Auto-avaliação
elements.fcKnewBtn.addEventListener('click', () => evaluateSelf(true));
elements.fcDidntKnowBtn.addEventListener('click', () => evaluateSelf(false));

// Flashcard - Ver revisão
elements.fcReviewBtn.addEventListener('click', showFlashcardReview);

// Flashcard - Reiniciar
elements.fcRestartBtn.addEventListener('click', restartSession);

// Flashcard - Voltar para resultado
elements.fcBackToResultBtn.addEventListener('click', () => showScreen('flashcardResult'));

// Interview - Atualizar contagem ao mudar seleção
elements.interviewCategoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateInterviewCount);
});

// Interview - Atualizar ao mudar idioma
elements.interviewLanguageRadios.forEach(radio => {
    radio.addEventListener('change', updateInterviewCount);
});

// Interview - Iniciar
elements.startInterviewBtn.addEventListener('click', startInterview);

// Interview - Revelar resposta
elements.ivRevealBtn.addEventListener('click', revealInterviewAnswer);

// Interview - Pular pergunta
elements.ivSkipBtn.addEventListener('click', skipInterviewQuestion);

// Interview - Botões de avaliação
elements.ivEvalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const rating = btn.dataset.rating;
        evaluateInterview(rating);
    });
});

// Interview - Ver revisão
elements.ivReviewBtn.addEventListener('click', showInterviewReview);

// Interview - Reiniciar
elements.ivRestartBtn.addEventListener('click', restartSession);

// Interview - Voltar para resultado
elements.ivBackToResultBtn.addEventListener('click', () => showScreen('interviewResult'));

// Inicialização
updateQuestionCount();
updateInterviewCount();
updateModeUI();
