import React from 'react';
import { 
  Home, 
  Trash2, 
  Users, 
  BookOpen, 
  Award, 
  BarChart3, 
  Settings,
  Calendar,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'requests', label: 'Waste Requests', icon: Trash2 },
  { id: 'community', label: 'Community Events', icon: Users },
  { id: 'education', label: 'Learn & Play', icon: BookOpen },
  { id: 'rewards', label: 'Rewards & Achievements', icon: Award },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
  { id: 'schedule', label: 'Collection Schedule', icon: Calendar },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ isOpen, onClose, activeTab, onTabChange }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200
                  ${isActive 
                    ? 'bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-emerald-600' : 'text-gray-500'}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg p-4 text-white">
            <h3 className="font-semibold text-sm">Go Premium</h3>
            <p className="text-xs text-emerald-100 mt-1">
              Unlock advanced analytics and priority support
            </p>
            <button className="mt-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-xs font-medium transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}