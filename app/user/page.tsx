'use client';

import { useState } from 'react';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatWindow from '@/components/chat/ChatWindow';
import ChatInput from '@/components/chat/ChatInput';

const initialMessages = [
  { id: '1', text: 'Hello! How can I help you today?', time: '10:30 AM', isSent: false },
  { id: '2', text: 'Hi! I have a question about your services', time: '10:31 AM', isSent: true },
  { id: '3', text: 'I would be happy to answer any questions you have!', time: '10:32 AM', isSent: false },
  { id: '4', text: 'What are your pricing plans?', time: '10:33 AM', isSent: true },
  { id: '5', text: 'We have several options available. Let me share the details with you...', time: '10:35 AM', isSent: false },
];

export default function UserPage() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: message,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      isSent: true,
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const autoReply = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message! Our team will respond shortly.',
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        isSent: false,
      };
      setMessages((prev) => [...prev, autoReply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-50">
      <ChatHeader
        userName="Support Team"
        status="typically replies instantly"
      />
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSendMessage} placeholder="Type your message..." />
    </div>
  );
}
