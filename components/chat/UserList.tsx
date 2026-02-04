'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import UserListItem from './UserListItem';

interface User {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  avatar?: string;
}

interface UserListProps {
  users: User[];
  activeUserId?: string;
  onUserSelect?: (userId: string) => void;
}

export default function UserList({ users, activeUserId, onUserSelect }: UserListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white/80 backdrop-blur-lg border-r border-gray-200/50 shadow-lg">
      <div className="p-4 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm shadow-sm"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredUsers.map((user) => (
          <UserListItem
            key={user.id}
            name={user.name}
            lastMessage={user.lastMessage}
            time={user.time}
            unreadCount={user.unreadCount}
            isActive={user.id === activeUserId}
            avatar={user.avatar}
            onClick={() => onUserSelect?.(user.id)}
          />
        ))}
      </div>
    </div>
  );
}
