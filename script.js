const waffle = document.getElementById("waffle");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", () => {
    ScoreUpdate(true);
})

noButton.addEventListener("click", () => {
    ScoreUpdate(false);
})

const emojis = ["🧇", "🥞", "🦄", "🥞", "🍯", "💩", "🐸"];
let score = 0;

function showRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
} 

function showEmoji() {
    document.getElementById("emoji").textContent = showRandomEmoji();
}

function ScoreUpdate(isWaffle) {
    if (isWaffle) {
        score++;
        showTemporaryMessage(isWaffle ?"Some lucky person is getting waffles! 🎉" : "Aww, no waffles this time. 😢");
        document.getElementById("score").textContent = "Waffles Shipped: " + score;
        showEmoji(); 
    } else {
        showTemporaryMessage("Aww, no waffles this time. 😭");
        showEmoji();
    }

    function showTemporaryMessage(msg) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = msg;
        messageDiv.style.position = "absolute";
        messageDiv.style.bottom = "50px";
        messageDiv.style.left = "50%";
        messageDiv.style.transform = "translate(-50%)";
        messageDiv.style.fontSize = "24px";
        messageDiv.style.background = "#fff8e7";
        messageDiv.style.padding = "10px 20px";
        messageDiv.style.borderRadius = "12px";
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 2000);
    } 
}



