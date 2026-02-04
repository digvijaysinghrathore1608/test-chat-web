'use client';

import { useState } from 'react';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatWindow from '@/components/chat/ChatWindow';
import ChatInput from '@/components/chat/ChatInput';
import UserList from '@/components/chat/UserList';

const mockUsers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    lastMessage: 'Thanks for the quick response!',
    time: '2m',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Mike Chen',
    lastMessage: 'Can we schedule a call?',
    time: '15m',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Emma Williams',
    lastMessage: 'Perfect, see you tomorrow',
    time: '1h',
    unreadCount: 1,
  },
  {
    id: '4',
    name: 'James Brown',
    lastMessage: 'The project looks great!',
    time: '2h',
    unreadCount: 0,
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    lastMessage: 'I have a question about...',
    time: '3h',
    unreadCount: 3,
  },
];

const mockMessages: { [key: string]: any[] } = {
  '1': [
    { id: '1', text: 'Hi! I need some help with my account', time: '10:30 AM', isSent: false },
    { id: '2', text: 'Hello! I would be happy to help you. What seems to be the issue?', time: '10:31 AM', isSent: true },
    { id: '3', text: 'I cannot access my dashboard', time: '10:32 AM', isSent: false },
    { id: '4', text: 'Let me check that for you. Can you try refreshing the page?', time: '10:33 AM', isSent: true },
    { id: '5', text: 'Yes, that worked! Thanks for the quick response!', time: '10:35 AM', isSent: false },
  ],
  '2': [
    { id: '1', text: 'Hello, I wanted to discuss the new project', time: '9:15 AM', isSent: false },
    { id: '2', text: 'Sure! I am available this week. What time works for you?', time: '9:20 AM', isSent: true },
    { id: '3', text: 'Can we schedule a call?', time: '9:25 AM', isSent: false },
  ],
  '3': [
    { id: '1', text: 'Are we still meeting tomorrow at 3 PM?', time: '8:45 AM', isSent: false },
    { id: '2', text: 'Yes, absolutely! See you then.', time: '8:50 AM', isSent: true },
    { id: '3', text: 'Perfect, see you tomorrow', time: '8:51 AM', isSent: false },
  ],
  '4': [
    { id: '1', text: 'I just reviewed the latest updates', time: '7:30 AM', isSent: false },
    { id: '2', text: 'Great! What do you think?', time: '7:35 AM', isSent: true },
    { id: '3', text: 'The project looks great!', time: '7:40 AM', isSent: false },
  ],
  '5': [
    { id: '1', text: 'I have a question about the pricing', time: '6:20 AM', isSent: false },
    { id: '2', text: 'Of course! What would you like to know?', time: '6:25 AM', isSent: true },
    { id: '3', text: 'I have a question about...', time: '6:30 AM', isSent: false },
  ],
};

export default function AdminPage() {
  const [activeUserId, setActiveUserId] = useState('1');
  const [messages, setMessages] = useState(mockMessages[activeUserId] || []);

  const handleUserSelect = (userId: string) => {
    setActiveUserId(userId);
    setMessages(mockMessages[userId] || []);
  };

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: message,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      isSent: true,
    };
    setMessages([...messages, newMessage]);
  };

  const activeUser = mockUsers.find((u) => u.id === activeUserId);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-50">
      <div className="w-80 flex-shrink-0">
        <UserList
          users={mockUsers}
          activeUserId={activeUserId}
          onUserSelect={handleUserSelect}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {activeUser ? (
          <>
            <ChatHeader
              userName={activeUser.name}
              status="online"
            />
            <ChatWindow messages={messages} />
            <ChatInput onSend={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
