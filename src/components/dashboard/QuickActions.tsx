import React from 'react';
import { Plus, Calendar, Users, BookOpen, Recycle, MapPin } from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [
    {
      id: 'new-request',
      title: 'New Waste Request',
      description: 'Schedule a pickup',
      icon: Plus,
      color: 'emerald',
      onClick: () => onActionClick('requests')
    },
    {
      id: 'schedule',
      title: 'Collection Schedule',
      description: 'View pickup times',
      icon: Calendar,
      color: 'blue',
      onClick: () => onActionClick('schedule')
    },
    {
      id: 'join-event',
      title: 'Community Events',
      description: 'Join cleanup drives',
      icon: Users,
      color: 'purple',
      onClick: () => onActionClick('community')
    },
    {
      id: 'learn',
      title: 'Learn & Play',
      description: 'Segregation games',
      icon: BookOpen,
      color: 'orange',
      onClick: () => onActionClick('education')
    },
    {
      id: 'segregation-guide',
      title: 'Segregation Guide',
      description: 'Quick reference',
      icon: Recycle,
      color: 'green',
      onClick: () => onActionClick('education')
    },
    {
      id: 'find-centers',
      title: 'Find Centers',
      description: 'Locate facilities',
      icon: MapPin,
      color: 'red',
      onClick: () => onActionClick('dashboard')
    }
  ];

  const colorClasses = {
    emerald: { bg: 'bg-emerald-50 hover:bg-emerald-100', text: 'text-emerald-700', icon: 'text-emerald-600' },
    blue: { bg: 'bg-blue-50 hover:bg-blue-100', text: 'text-blue-700', icon: 'text-blue-600' },
    purple: { bg: 'bg-purple-50 hover:bg-purple-100', text: 'text-purple-700', icon: 'text-purple-600' },
    orange: { bg: 'bg-orange-50 hover:bg-orange-100', text: 'text-orange-700', icon: 'text-orange-600' },
    green: { bg: 'bg-green-50 hover:bg-green-100', text: 'text-green-700', icon: 'text-green-600' },
    red: { bg: 'bg-red-50 hover:bg-red-100', text: 'text-red-700', icon: 'text-red-600' }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const colors = colorClasses[action.color];
          
          return (
            <button
              key={action.id}
              onClick={action.onClick}
              className={`${colors.bg} p-4 rounded-lg text-left transition-all duration-200 hover:scale-105 hover:shadow-md`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`h-6 w-6 ${colors.icon}`} />
                <div>
                  <h3 className={`font-medium ${colors.text}`}>{action.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}