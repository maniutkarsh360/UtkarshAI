async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  const messages = document.getElementById("messages");
  messages.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

  const response = await fetch("http://127.0.0.1:5000/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: userInput }),
  });

  const data = await response.json();
  messages.innerHTML += `<div><strong>Utkarsh AI:</strong> ${data.answer}</div>`;
  document.getElementById("user-input").value = "";
}
