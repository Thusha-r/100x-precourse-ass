document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function () {
      const messageText = messageInput.value;
      if (messageText.trim() !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
  
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
  });
  