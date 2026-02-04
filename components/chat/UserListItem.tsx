'use client';

interface UserListItemProps {
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isActive?: boolean;
  avatar?: string;
  onClick?: () => void;
}

export default function UserListItem({
  name,
  lastMessage,
  time,
  unreadCount = 0,
  isActive = false,
  avatar,
  onClick,
}: UserListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
        isActive
          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500'
          : 'hover:bg-gray-50 border-l-4 border-transparent'
      }`}
    >
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-semibold shadow-md">
          {avatar || name.charAt(0).toUpperCase()}
        </div>
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
            {unreadCount}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`font-semibold truncate ${isActive ? 'text-gray-900' : 'text-gray-800'}`}>
            {name}
          </h3>
          <span className="text-xs text-gray-400 flex-shrink-0">{time}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
      </div>
    </div>
  );
}
