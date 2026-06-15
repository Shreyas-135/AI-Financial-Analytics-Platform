import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        <button
          onClick={onToggleSidebar}
          className="text-gray-600 hover:text-gray-900 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-gray-900 transition">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="text-gray-600 hover:text-gray-900 transition">
            <Settings className="w-6 h-6" />
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition">
            <User className="w-6 h-6" />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
