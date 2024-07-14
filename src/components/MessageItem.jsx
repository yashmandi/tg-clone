import React from 'react';

const MessageItem = ({ message }) => {
  return (
    <div className="message-item p-4 bg-blue-100 rounded-lg mb-2">
      <p><strong>{message.sender.name}</strong>: {message.message}</p>
    </div>
  );
};

export default MessageItem;