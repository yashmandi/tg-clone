import React from 'react';

const ChatItem = ({ chat, onClick }) => {
  return (
    <div className="chat-item p-4 bg-gray-100 rounded-lg cursor-pointer" onClick={onClick}>
      <h3 className="font-bold">{chat.creator.name}</h3>
      <p>Message count: {chat.msg_count}</p>
    </div>
  );
};

export default ChatItem;