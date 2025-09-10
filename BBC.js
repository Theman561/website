document.getElementById("askBtn").addEventListener("click", function() {
  const passage = document.getElementById("passage").value.trim();
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  if (!passage || !question) {
    answerDiv.textContent = "Please enter both a passage and a question.";
    return;
  }

  // Placeholder response for now
  answerDiv.textContent = "🤖 AI is thinking... (this is where your backend will answer)";
});
