

var points = parseFloat('0.0');
points.toFixed(2);
var totalQuestions = 10.0;
var percentage = parseFloat('0.0');
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;


function gradeQuiz(){
    gradeQ1();
    gradeQ2();
    gradeQ3();
    gradeQ4();
    gradeQ5();
    gradeQ6();
    gradeQ7();
    gradeQ8();
    gradeQ9();
    gradeQ10();
    console.log((points/totalQuestions) * 100);
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;

    gradedContent();
}
console.log(points);

function gradedContent() {
    var percent = (points/totalQuestions) * 100;
    document.getElementById("formContent").innerHTML = `Quiz Score for ${firstName} ${lastName} : ` + `${percent}` + "%";    
    
}
function gradeQ1() {
    if (document.quiz.q1[0].checked && document.quiz.q1[1].checked){
        points += 1.0;
    }
    else if(document.quiz.q1[0].checked || document.quiz.q1[1].checked){
        points += 0.5;
    }
    else{
        points += 0;
    }

}
function gradeQ2() {
    if(document.quiz.q2[0].checked){
        points++;
    }
    else{
        points += 0;
    }
}
function gradeQ3() {
    if(document.quiz.q3[3].checked){
        points++;
    }
    else{
        points += 0;
    }
}
function gradeQ4() {
    if(document.quiz.q4[0].checked){
        points++;
        
    }
    else{
        points += 0;
    }
}
function gradeQ5() {
    if(document.quiz.q5[2].checked){
        points++;
    }
    else{
        points += 0;
    }
}
function gradeQ6() {
    if(document.quiz.q6[1].checked){
        points++;
    }
    else{
        points += 0;
    }
}
function gradeQ7() {
    if(document.quiz.q7[1].checked){
        points++;
        
    }
    else{
        points += 0;
    }
}
function gradeQ8() {
    if(document.quiz.q8[0].checked && document.quiz.q8[2].checked){
        points++;
        
    }
    else if (document.quiz.q8[0].checked || document.quiz.q8[2].checked) {
        points += 0.5;
        
    } else {
        points += 0;
    }
}
function gradeQ9() {
    if(document.quiz.q9[3].checked){
        points++;
    }
    else{
        points += 0;
    }
}
function gradeQ10() {
    if(document.quiz.q10[1].checked && document.quiz.q10[3].checked){
        points++;
    }
    else if (document.quiz.q10[1].checked || document.quiz.q10[3].checked) {
        points += 0.5;
    } else {
        points += 0;
    }
}

