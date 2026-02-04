'use client';

import Link from 'next/link';
import { MessageSquare, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Chat Application</h1>
        <p className="text-gray-600 mb-12">Choose your interface</p>
        <div className="flex gap-6 justify-center">
          <Link href="/admin">
            <div className="group relative w-64 h-64 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all cursor-pointer p-8 flex flex-col items-center justify-center border border-gray-200/50 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin View</h2>
              <p className="text-sm text-gray-500 text-center">
                Full dashboard with user list and chat management
              </p>
            </div>
          </Link>
          <Link href="/user">
            <div className="group relative w-64 h-64 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all cursor-pointer p-8 flex flex-col items-center justify-center border border-gray-200/50 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">User View</h2>
              <p className="text-sm text-gray-500 text-center">
                Simple chat interface for user conversations
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
