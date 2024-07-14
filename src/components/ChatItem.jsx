import React from 'react';

const ChatItem = ({ chat, onClick }) => {
  return (
    <div className="chat-item p-4 cursor-pointer hover:bg-gray-700 border-b border-gray-600" onClick={onClick}>
      <h3 className="font-bold">{chat.creator.name}</h3>
      <p>Message count: {chat.msg_count}</p>
    </div>
  );
};

export default ChatItem;