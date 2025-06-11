import React from 'react';
import { Bell, User, Menu, Leaf } from 'lucide-react';
import { mockUser } from '../../data/mockData';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-lg">
            <Leaf className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900">Smart Waste Watch</h1>
            <p className="text-xs text-gray-500">Digital Solution for Cleaner Communities</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">3</span>
          </span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-gray-900">{mockUser.name}</p>
            <p className="text-xs text-gray-500">Level {mockUser.level} • {mockUser.points} pts</p>
          </div>
          
          <div className="relative">
            {mockUser.avatar ? (
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-emerald-600" />
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>
    </header>
  );
}