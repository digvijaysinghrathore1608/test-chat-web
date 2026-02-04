'use client';

interface MessageBubbleProps {
  message: string;
  time: string;
  isSent: boolean;
  avatar?: string;
}

export default function MessageBubble({ message, time, isSent, avatar }: MessageBubbleProps) {
  return (
    <div className={`flex gap-2 mb-4 ${isSent ? 'justify-end' : 'justify-start'}`}>
      {!isSent && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-semibold shadow-sm">
          {avatar || 'U'}
        </div>
      )}
      <div className={`max-w-[70%] ${isSent ? 'items-end' : 'items-start'} flex flex-col`}>
        <div
          className={`px-4 py-2.5 rounded-2xl shadow-md ${
            isSent
              ? 'bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-br-sm'
              : 'bg-white text-gray-800 rounded-bl-sm'
          }`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <span className="text-xs text-gray-400 mt-1 px-1">{time}</span>
      </div>
      {isSent && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-semibold shadow-sm">
          {avatar || 'A'}
        </div>
      )}
    </div>
  );
}
