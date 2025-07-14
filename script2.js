// Quiz Data
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Color Style Sheet", "Cascading Style Sheets", "Creative Style System", "Code Styling Syntax"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "JavaScript is used for?",
    options: ["Styling", "Structure", "Logic & Interaction", "None of these"],
    answer: "Logic & Interaction"
  },
  {
    question: "What tag is used for a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: "<a>"
  }
];

let index = 0;

// Load a question
function loadQuestion() {
  const q = quizData[index];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // Clear previous options

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      alert(opt === q.answer ? "✅ Correct!" : "❌ Wrong!");
    };
    optionsDiv.appendChild(btn);
  });
}

// Next button event
document.getElementById("next-btn").onclick = () => {
  index = (index + 1) % quizData.length;
  loadQuestion();
};

// Load first question
loadQuestion();

// Joke API Fetch
document.getElementById("joke-btn").addEventListener("click", async () => {
  const jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.textContent = "Loading joke...";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await res.json();
    jokeDisplay.textContent = `${joke.setup} 😂 ${joke.punchline}`;
  } catch (err) {
    jokeDisplay.textContent = "Couldn't fetch joke. Try again!";
  }
});
