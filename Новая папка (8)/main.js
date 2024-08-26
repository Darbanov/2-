function submitRegistration() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;
    const dob = document.getElementById('dob').value;

    if (firstName && lastName && middleName && dob) {
        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            dob: dob
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        document.querySelector('.registration-block').style.display = 'none';
        document.getElementById('testSection').style.display = 'block';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function checkAnswers() {
    const correctAnswers = {
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1,
        q5: 1,
        q6: 1,
        q7: 1,
        q8: 1,
        q9: 1,
        q10: 1,
        q11: 1,
        q12: 1,
        q13: 1,
        q14: 1,
        q15: 1,
        q16: 1,
        q17: 1,
        q18: 1
    };

    let score = 0;
    const totalQuestions = 18;

    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === correctAnswers[question]) {
            score++;
        }
    }

    const percentage = (score / totalQuestions) * 100;
    let resultText = '';

    if (percentage < 30) {
        resultText = 'Вы не прошли экзамен. Ваш результат: ' + percentage.toFixed(2) + '%';
    } else if (percentage >= 30 && percentage <= 60) {
        resultText = 'Вы прошли экзамен нормально. Ваш результат: ' + percentage.toFixed(2) + '%';
    } else {
        resultText = 'Вы прошли экзамен успешно. Ваш результат: ' + percentage.toFixed(2) + '%';
    }

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        document.getElementById('userInfo').innerHTML = `
            <h2>Информация о пользователе:</h2>
            <p>Имя: ${userInfo.firstName}</p>
            <p>Фамилия: ${userInfo.lastName}</p>
            <p>Отчество: ${userInfo.middleName}</p>
            <p>Дата рождения: ${userInfo.dob}</p>
        `;
    }

    document.getElementById('result').innerText = resultText;
}

function resetTest() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    document.getElementById('result').innerText = '';
    document.getElementById('userInfo').innerHTML = '';
}
