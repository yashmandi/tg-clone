import React, { useState } from 'react';

const ChatInput = ({ chatId, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(chatId, message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input flex items-center p-4 bg-input-bg">
      <input
        type="text"
        className="flex-grow p-2 rounded-lg border border-gray-300 bg-input-bg text-text-color"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="ml-4 p-2 bg-button-bg text-button-text rounded-lg"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;