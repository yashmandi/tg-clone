import React, { useEffect, useState } from 'react';
import { getAllChats } from '../services/api';
import ChatItem from './ChatItem';

const ChatList = ({ onChatSelect }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllChats()
      .then(response => {
        if (response.data.status === 'success') {
          setChats(response.data.data.data || []);
        } else {
          setError(new Error(response.data.message));
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading chats: {error.message}</div>;
  }

  return (
    <div className="chat-list h-full overflow-y-auto">
      {chats.length === 0 ? (
        <div>No chats available</div>
      ) : (
        chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} onClick={() => onChatSelect(chat.id)} />
        ))
      )}
    </div>
  );
};

export default ChatList;