import React from 'react';
import Link from 'next/link';
import { BarChart3, TrendingUp, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', href: '/dashboard' },
    { icon: TrendingUp, label: 'Analytics', href: '/analytics' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside className={`${
      isOpen ? 'w-64' : 'w-20'
    } bg-slate-900 text-white transition-all duration-300`}>
      <div className="p-4 flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
          💰
        </div>
        {isOpen && <span className="font-bold text-lg">FinAnalytics</span>}
      </div>

      <nav className="space-y-2 p-4">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-sm"
          >
            <item.icon className="w-5 h-5" />
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition text-red-400">
          <LogOut className="w-5 h-5" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
