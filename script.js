let checkBtn = document.querySelector(".check");
let guess = document.querySelector(".guess");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let message = document.querySelector(".message");
let againBtn = document.querySelector(".again");
let correctNum = document.querySelector(".number");

let secretNumber = Math.floor(Math.random() * 50) + 1;
let point = 10;
let highPoint = 0;

checkBtn.onclick = () => {
    console.log(secretNumber);
    if (point > 0) {
        if (guess.value > 0 && guess.value <= 50) {
            if (guess.value < secretNumber) {
                message.innerHTML = "It is low...";
                document.body.style.backgroundColor = "blue";
                point--;
                guess.value = "";
                guess.focus();
            } else if (guess.value > secretNumber) {
                message.innerHTML = "It is high...";
                document.body.style.backgroundColor = "red";

                point--;
                guess.value = "";
                guess.focus();
            } else {
                message.innerHTML = "🎉 You win...";
                document.body.style.background = "green";
                correctNum.textContent = secretNumber;
                guess.disabled = true;
                checkBtn.disabled = true;
                if (highPoint < point) {
                    highPoint = point;
                }
            }

            highScore.innerHTML = highPoint;
            score.innerHTML = point;

            if (point === 0) {
                message.innerHTML = "💥 You are a looser";
                document.body.style.background = "red";
                guess.disabled = true;
                checkBtn.disabled = true;
            }
        } else {
            alert("Enter a number between 0 and 50");
        }
    }
};

againBtn.addEventListener("click", function() {
    point = 10;
    score.innerHTML = point;
    message.innerHTML = "Start guessing...";
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    correctNum.textContent = "?";
    guess.value = "";
    guess.disabled = false;
    checkBtn.disabled = false;
    document.body.style.background = "#222";
    guess.focus();
});