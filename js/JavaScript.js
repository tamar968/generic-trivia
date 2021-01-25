
//my code
var questions = userQuestions;
var questionIndex = 0;
var question = document.getElementById("question");
var answer1 = document.getElementById("ans1Content");
var answer2 = document.getElementById("ans2Content");
var answer3 = document.getElementById("ans3Content");
var pointsGroup1 = 0;
var pointsGroup2 = 0;
var userTimeUntilMusicStop = timeUntilMusicStop;
var userTimeUntilViewAnswer = timeUntilViewAnswer;
var mus = document.getElementById("music");
var dinor = document.getElementById("dinor");

function startGame() {
    document.getElementById('allGameScreens').style.display = 'block';
    nextQustion();
}
function nextQustion() {

    if (questionIndex == questions.length) {
        win();
        return;
    }
    mus.load();
    mus.play();

    //change the content of the question and the answers
    question.innerHTML = questions[questionIndex].question;
    answer1.innerHTML = questions[questionIndex].answer1;
    answer2.innerHTML = questions[questionIndex].answer2;
    answer3.innerHTML = questions[questionIndex].answer3;

    var anim = "bounceInUp";
    testAnim(anim);

    //reset the old value answer
    answer1.value = 0;
    answer2.value = 0;
    answer3.value = 0;

    questionIndex++;
    pb = 0;
    moveProgress(userTimeUntilMusicStop);
}
function viewCorrectAnswer() {
    mus.pause();
    clearInterval(progressInterval);
    document.getElementById('id01').style.display = 'block';
    //alert("viewCorrectAnswer" + questions[questionIndex - 1].correctAnswer);
    var correct = document.getElementById("correctAnswer");
    switch (questions[questionIndex - 1].correctAnswer) {
        case 1: correct.innerHTML = questions[questionIndex - 1].answer1;
            break;
        case 2: correct.innerHTML = questions[questionIndex - 1].answer2;
            break;
        case 3: correct.innerHTML = questions[questionIndex - 1].answer3;
            break;
        default: correct.innerHTML = "תשובה 4";
    }
}
function win() {
    mus.load();
    mus.play();
    var winScreen = document.getElementById("winScreen");
    var winTitle = document.getElementById("winTitle");
    var winGruop = document.getElementById("winGroup");
    var winPoints = document.getElementById("winPoints");
    winTitle.innerHTML = 'הקבוצה המנצחת היא: '
    if (pointsGroup1 > pointsGroup2) {
        winGruop.innerHTML = 'קבוצה א';
        winPoints.innerHTML = pointsGroup1;
    } else if (pointsGroup1 < pointsGroup2) {
        winGruop.innerHTML = 'קבוצה ב';
        winPoints.innerHTML = pointsGroup2;
    }
    else {
        winTitle.innerHTML = 'מספר נקודות זהה ל-2 הקבוצות';
        winGruop.innerHTML = 'לכל קבוצה';
        winPoints.innerHTML = pointsGroup1;
    }
    winScreen.style.display = 'block';
    winPoints.innerHTML += ' נקודות';
    playGameOverAnimation(2);
    setInterval(function () { playGameOverAnimation(2); }, 3000);
}

function playGameOverAnimation(numOfCanvas) {
    for (let i = 1; i <= numOfCanvas; i++) {
        setTimeout(function () { gameOver("#canvas" + i);},1500);
    }
}



//my stopper
var sec = userTimeUntilMusicStop;
var ms = 0;
var secElem = document.getElementById("sec");
var msElem = document.getElementById("ms");

function stopper(time, func) {
    sec = time;
    secElem.innerHTML = sec < 10 ? ("0" + sec) : sec;
    var interval = setInterval(function () {

        if (sec == 0 && ms == 0) {
            clearInterval(interval);
            if (func)
                func();
            return;
        }

        if (ms == 0) {
            msElem.innerHTML = ms = 100;
            if (sec > 0) {
                secElem.innerHTML = (--sec < 10) ? ("0" + sec) : sec;
            }
        }
        msElem.innerHTML = (--ms < 10) ? ("0" + ms) : ms;
    }, 10);
}

var pb = 0;
var width = 100;
var progressInterval;
function moveProgress(timeInSec, eachTime = 0.01, callback = viewCorrectAnswer) {
    if (pb == 0) {
        pb = 1;
        var elem = document.getElementById('myBar');
        var width = 1;
        progressInterval = setInterval(frame, eachTime * 1000);
        function frame() {
            if (width >= 100) {
                clearInterval(progressInterval);
                pb = 0;
                if (callback) {
                    callback();
                }
            } else {
                width += eachTime * 100 / timeInSec;
                elem.style.width = width + '%';
            }
        }
    }
}

function cssAnim(elem, anim) {
    elem.classList.add(anim);
}