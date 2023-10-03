const chatLog = document.getElementById("chat-log"),
  userInput = document.getElementById("user-input"),
  sendButton = document.getElementById("send-button"),
  buttonIcon = document.getElementById("button-icon"),
  info = document.querySelector(".info");

sendbutton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  // if message = empty do nothing
  if (message === "") {
    return;
  }
  // if message = developer - show our message
  else if (message === "developer") {
    // clear inpput value
    userInput.value = "";
    // append message as user - we will code it's function
    appendMessage("user", message);
    // sets a fake timeout that showing loading on send button
    setTimeout(() => {
      // send our message as bot(sender : bot)
      appendMessage("bot", "This is coded by me.");
      // change button icon to default
      buttonIcon.classList.add("fa-solid", "fa-paper-plane");
      buttonIcon.classList.remove("fas", "fa-spinner", "fa-pulse");
    }, 2000);
  }

  // else if none of above
  // appends users message to screen
  appendMessage("user", message);
}
