function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatDisplay = document.getElementById("chat-display");

    if (userInput.trim() === "") return;

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    chatDisplay.appendChild(userMessage);

    // Clear input
    document.getElementById("user-input").value = "";

    // Fake chatbot response (replace with API call for real responses)
    const botResponse = document.createElement("div");
    botResponse.textContent = "Utkarsh AI: I'm here to help!";
    chatDisplay.appendChild(botResponse);

    // Scroll to bottom
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}
