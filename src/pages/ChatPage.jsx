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
    <div className="chat-page flex h-screen">
      <div className="chat-list-container w-1/3 fixed top-0 left-0 h-full bg-sidebar-bg overflow-y-auto">
        <ChatList onChatSelect={handleChatSelect} />
      </div>
      <div className="chat-content-container flex-grow ml-[500px] flex flex-col bg-bg-color text-text-color overflow-y-auto">
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