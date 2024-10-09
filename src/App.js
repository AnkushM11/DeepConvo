import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg">
      {/* Chatbot iframe */}
      <div className="chatbot-container open">
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          chat-title="DeepConvo"
          agent-id="ebeea2f7-72e7-4ca3-b0f4-8746e5c8e0f6"
          language-code="en"
          df-messenger-chat-border-radius="10"
          chat-width="220"
          chat-height="380"
        ></df-messenger>
      </div>
    </div>
  );
}

export default App;
