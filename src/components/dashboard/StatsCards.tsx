import React from 'react';
import { Trash2, CheckCircle, Users, Leaf, TrendingUp, Award } from 'lucide-react';
import { mockUserStats, mockWasteStats } from '../../data/mockData';

export default function StatsCards() {
  const stats = [
    {
      title: 'Total Requests',
      value: mockUserStats.totalRequests.toString(),
      change: '+12%',
      changeType: 'positive' as const,
      icon: Trash2,
      color: 'blue'
    },
    {
      title: 'Completed',
      value: mockUserStats.completedRequests.toString(),
      change: '+8%',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Community Events',
      value: mockUserStats.communityEvents.toString(),
      change: '+25%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'purple'
    },
    {
      title: 'CO₂ Saved',
      value: `${mockWasteStats.co2Saved}kg`,
      change: '+15%',
      changeType: 'positive' as const,
      icon: Leaf,
      color: 'emerald'
    },
    {
      title: 'Current Streak',
      value: `${mockUserStats.currentStreak} days`,
      change: 'Personal best!',
      changeType: 'neutral' as const,
      icon: TrendingUp,
      color: 'orange'
    },
    {
      title: 'Total Points',
      value: mockUserStats.totalPoints.toLocaleString(),
      change: '+150 this week',
      changeType: 'positive' as const,
      icon: Award,
      color: 'yellow'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
    emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
    yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', border: 'border-yellow-200' }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const colors = colorClasses[stat.color];
        
        return (
          <div 
            key={index}
            className={`bg-white rounded-xl border ${colors.border} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between">
              <div className={`${colors.bg} p-3 rounded-lg`}>
                <Icon className={`h-6 w-6 ${colors.icon}`} />
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 
                stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}