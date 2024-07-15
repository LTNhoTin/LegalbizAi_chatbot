// chatbotService.js
export const sendMessageChatService = async (promptInput, model) => {
    const response = await fetch('https://cb5d-1-53-125-127.ngrok-free.app/stream', {
      method: "post",
      body: JSON.stringify({
        message: promptInput,
        model: model
      }),
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Content-Type": "application/json"
      }),
    });
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const result = await response.json();
    return result;
  };