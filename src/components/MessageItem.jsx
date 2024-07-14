import React from 'react';

const MessageItem = ({ message }) => {
  const isSender = message.sender.name === "You";

  return (
    <div className={`message-item p-4 rounded-lg mb-2 ${isSender ? 'bg-message-sender text-right' : 'bg-message-receiver'}`}>
      <p><strong>{message.sender.name}</strong>: {message.message}</p>
    </div>
  );
};

export default MessageItem;