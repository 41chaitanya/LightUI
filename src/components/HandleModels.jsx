import React, { useState } from "react";
import Body from "./Body.jsx";
import ClearChat from "./ClearChat.jsx";

function HandleModels() {
  const [chatHistory, setChatHistory] = useState([]); // Store chat messages
  const [modelName, setModelName] = useState(""); // Store selected model

  const handleModelSelection = (model) => {
    setModelName(model);
  };

  // Function to clear chat history
  const clearChat = () => {
    setChatHistory([]); 
  };

  return (
    <>
      {/* Header with Clear Chat Button */}
      <ClearChat onClearChat={clearChat} />
      
      {/* Chat Body */}
      <Body 
        chatHistory={chatHistory} 
        setChatHistory={setChatHistory} 
        modelName={modelName} 
      />
    </>
  );
}

export default HandleModels;
