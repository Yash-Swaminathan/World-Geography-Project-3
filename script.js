function submitQuiz() {
    var score = 0;
    var totalQuestions = 5;

    // Question 1
    var q1 = document.forms["sdg-quiz"]["q1"].value;
    if(q1 === '2045') { score++; }

    // Question 2
    var q2 = document.forms["sdg-quiz"]["q2"].value;
    if(q2 === 'SDG 5') { score++; }

    // Question 3
    var q3 = document.forms["sdg-quiz"]["q3"].value;
    if(q3 === 'Marine ecosystem conservation') { score++; }

    // Question 4
    var q4 = document.forms["sdg-quiz"]["q4"].value;
    if(q4 === '1%') { score++; }

    // Question 5
    var q5 = document.forms["sdg-quiz"]["q5"].value;
    if(q5 === 'Responsible Consumption and Production') { score++; }

    document.getElementById("quiz-results").innerHTML = "You scored " + score + "/" + totalQuestions + ".";
}
