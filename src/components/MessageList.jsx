import React, { useEffect, useState } from 'react';
import { getChatMessages } from '../services/api';
import MessageItem from './MessageItem';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getChatMessages(chatId)
      .then(response => {
        if (response.data.status === 'success') {
          setMessages(response.data.data || []);
        } else {
          setError(new Error(response.data.message));
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [chatId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading messages: {error.message}</div>;
  }

  return (
    <div className="message-list flex-grow overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div>No messages available</div>
      ) : (
        messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))
      )}
    </div>
  );
};

export default MessageList;