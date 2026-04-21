import { useState } from 'react';

const navItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'Cases', icon: '📋' },
  { label: 'Customers', icon: '👥' },
  { label: 'Knowledge Base', icon: '📚' },
  { label: 'Reports', icon: '📊' },
  { label: 'Settings', icon: '⚙️' },
];

export default function Sidebar({ activeNav, onNavChange }) {
  return (
    <aside className="bg-[#262936] flex flex-col gap-2 h-full px-4 py-6 w-[200px] shrink-0">
      <div className="flex gap-2.5 items-center pb-6">
        <div className="bg-[#2961de] rounded-[6px] size-8" />
        <span className="font-bold text-lg text-white">CRM Portal</span>
      </div>
      <div className="bg-[#dedede] h-px w-full" />
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavChange(item.label)}
          className={`flex gap-2.5 items-center px-3 py-2.5 rounded-[6px] w-full text-left transition-colors ${
            activeNav === item.label
              ? 'bg-[#404252] text-white font-semibold'
              : 'text-[#c7c7d1] hover:bg-[#404252]/50'
          }`}
        >
          <span className="text-sm">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
