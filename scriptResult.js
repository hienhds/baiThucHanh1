const resultData = {
    score: 7.5,
    correctAnswers: 30,
    totalQuestions: 40,
    userAnswers: [
        { question: "Câu 1: Luật Tổ chức chính quyền địa phương sửa đổi 2019.", userAnswer: "true", correctAnswer: "true" },
        { question: "Câu 2: Theo Nghị định 45/2020/NĐ-CP; 8/4/2020. Hồ sơ điện tử thực hiện thủ tục hành chính là gì?", userAnswer: "A", correctAnswer: "B" },
        { question: "Câu 3: Luật Tổ chức chính quyền địa phương sửa đổi 2019.", userAnswer: "true", correctAnswer: "true" },
        { question: "Câu 4: Theo Nghị định 45/2020/NĐ-CP; 8/4/2020. Hồ sơ điện tử thực hiện thủ tục hành chính là gì?", userAnswer: "A", correctAnswer: "B" },
        { question: "Câu 5: Luật Tổ chức chính quyền địa phương sửa đổi 2019.", userAnswer: "true", correctAnswer: "true" },
        { question: "Câu 6: Theo Nghị định 45/2020/NĐ-CP; 8/4/2020. Hồ sơ điện tử thực hiện thủ tục hành chính là gì?", userAnswer: "A", correctAnswer: "B" },
        { question: "Câu 7: Luật Tổ chức chính quyền địa phương sửa đổi 2019.", userAnswer: "true", correctAnswer: "true" },
        { question: "Câu 8: Theo Nghị định 45/2020/NĐ-CP; 8/4/2020. Hồ sơ điện tử thực hiện thủ tục hành chính là gì?", userAnswer: "A", correctAnswer: "B" },
        { question: "Câu 9: Luật Tổ chức chính quyền địa phương sửa đổi 2019.", userAnswer: "true", correctAnswer: "true" },
        { question: "Câu 10: Theo Nghị định 45/2020/NĐ-CP; 8/4/2020. Hồ sơ điện tử thực hiện thủ tục hành chính là gì?", userAnswer: "A", correctAnswer: "B" },
        { question: "Câu 11: Luật Tổ chức chính quyền địa phương sửa đổi 2019.", userAnswer: "true", correctAnswer: "true" },
        { question: "Câu 12: Theo Nghị định 45/2020/NĐ-CP; 8/4/2020. Hồ sơ điện tử thực hiện thủ tục hành chính là gì?", userAnswer: "A", correctAnswer: "B" },
        // Add more entries for other questions
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    displayResultInfo();
    displayAnswerDetails();
});

function displayResultInfo() {
    document.getElementById("score").innerText = resultData.score;
    document.getElementById("correct-answers").innerText = resultData.correctAnswers;
    document.getElementById("total-questions").innerText = resultData.totalQuestions;
}

function displayAnswerDetails() {
    const answersContainer = document.getElementById("answers-container");

    resultData.userAnswers.forEach((answer, index) => {
        const answerElement = document.createElement("div");
        answerElement.classList.add("answer");

        const questionElement = document.createElement("p");
        questionElement.innerHTML = `<strong>${answer.question}</strong> <br/>`; // Make the question text bold

        const userAnswerElement = document.createElement("p");
        userAnswerElement.innerHTML = `Câu trả lời của bạn: <span class="${answer.userAnswer === answer.correctAnswer ? 'correct' : 'incorrect'}">${answer.userAnswer}</span>`;

        const correctAnswerElement = document.createElement("p");
        correctAnswerElement.innerHTML = `Đáp án đúng: <span class="correct">${answer.correctAnswer}</span>`;

        answerElement.appendChild(questionElement);
        answerElement.appendChild(userAnswerElement);
        answerElement.appendChild(correctAnswerElement);

        if (answer.userAnswer !== answer.correctAnswer) {
            // If the user's answer is incorrect, apply red color
            userAnswerElement.classList.add("incorrect-answer");
        }

        answersContainer.appendChild(answerElement);
    });
}



function displayResultInfo() {
    const scoreElement = document.getElementById("score");
    const correctAnswersElement = document.getElementById("correct-answers");
    const totalQuestionsElement = document.getElementById("total-questions");

    scoreElement.innerHTML = `<span class="result-label">Điểm:</span> <span class="result-value">${resultData.score}</span>`;
    correctAnswersElement.innerHTML = `<span class="result-label">Số câu đúng:</span> <span class="result-value">${resultData.correctAnswers}</span>`;
    totalQuestionsElement.innerHTML = `<span class="result-label">Tổng số câu:</span> <span class="result-value">${resultData.totalQuestions}</span>`;
}