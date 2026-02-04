'use client';

import { Phone, Video, MoreVertical } from 'lucide-react';

interface ChatHeaderProps {
  userName: string;
  status: string;
  avatar?: string;
}

export default function ChatHeader({ userName, status, avatar }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-semibold shadow-md">
            {avatar || userName.charAt(0).toUpperCase()}
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">{userName}</h2>
          <p className="text-xs text-gray-500">{status}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Video className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
