import React from 'react';
import { Clock, CheckCircle, AlertCircle, Users, Award } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'request_completed',
      title: 'Recyclable waste collected',
      description: 'Your recyclable waste request was completed successfully',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 2,
      type: 'event_joined',
      title: 'Joined Community Park Cleanup',
      description: 'You registered for the cleanup event on Jan 25',
      time: '1 day ago',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'achievement_unlocked',
      title: 'Achievement Unlocked!',
      description: 'You earned the "Segregation Pro" badge',
      time: '2 days ago',
      icon: Award,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      id: 4,
      type: 'request_pending',
      title: 'New waste request created',
      description: 'General waste pickup requested for Jan 20',
      time: '3 days ago',
      icon: Clock,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      id: 5,
      type: 'reminder',
      title: 'Segregation reminder',
      description: 'Remember to separate organic waste properly',
      time: '1 week ago',
      icon: AlertCircle,
      color: 'text-red-600',
      bg: 'bg-red-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`${activity.bg} p-2 rounded-lg`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}