import React, { useState } from 'react';
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';

const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [messages, setMessages] = useState({});

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
  };

  const handleSendMessage = (chatId, message) => {
    const newMessage = {
      id: Date.now(),
      sender: {
        id: 1,
        name: "You"
      },
      message,
      chatId,
    };

    setMessages((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...(prevMessages[chatId] || []), newMessage],
    }));
  };

  return (
    <div className="chat-page flex">
      <div className="chat-list-container w-1/3">
        <ChatList onChatSelect={handleChatSelect} />
      </div>
      <div className="chat-content-container w-2/3 flex flex-col">
        {selectedChatId && (
          <>
            <MessageList chatId={selectedChatId} messages={messages[selectedChatId] || []} />
            <ChatInput chatId={selectedChatId} onSendMessage={handleSendMessage} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;