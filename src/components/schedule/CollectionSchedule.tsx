import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Truck, Bell, Filter } from 'lucide-react';

export default function CollectionSchedule() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  const scheduleData = [
    {
      id: 1,
      date: '2024-01-22',
      day: 'Monday',
      timeSlot: '8:00 AM - 10:00 AM',
      wasteType: 'Organic',
      area: 'Downtown District',
      route: 'Route A-1',
      status: 'scheduled',
      collector: 'Green Team Alpha'
    },
    {
      id: 2,
      date: '2024-01-23',
      day: 'Tuesday',
      timeSlot: '9:00 AM - 11:00 AM',
      wasteType: 'Recyclable',
      area: 'Downtown District',
      route: 'Route A-2',
      status: 'in-progress',
      collector: 'Eco Warriors'
    },
    {
      id: 3,
      date: '2024-01-24',
      day: 'Wednesday',
      timeSlot: '10:00 AM - 12:00 PM',
      wasteType: 'General',
      area: 'Downtown District',
      route: 'Route A-1',
      status: 'scheduled',
      collector: 'Green Team Beta'
    },
    {
      id: 4,
      date: '2024-01-25',
      day: 'Thursday',
      timeSlot: '8:30 AM - 10:30 AM',
      wasteType: 'Hazardous',
      area: 'Downtown District',
      route: 'Route H-1',
      status: 'scheduled',
      collector: 'Specialist Unit'
    },
    {
      id: 5,
      date: '2024-01-26',
      day: 'Friday',
      timeSlot: '9:00 AM - 11:00 AM',
      wasteType: 'Organic',
      area: 'Downtown District',
      route: 'Route A-1',
      status: 'completed',
      collector: 'Green Team Alpha'
    }
  ];

  const upcomingPickups = [
    {
      id: 1,
      type: 'Personal Request',
      wasteType: 'General',
      scheduledDate: '2024-01-24',
      timeSlot: '2:00 PM - 4:00 PM',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'Regular Pickup',
      wasteType: 'Organic',
      scheduledDate: '2024-01-26',
      timeSlot: '9:00 AM - 11:00 AM',
      status: 'pending'
    }
  ];

  const wasteTypeColors = {
    'Organic': 'bg-green-100 text-green-800 border-green-200',
    'Recyclable': 'bg-blue-100 text-blue-800 border-blue-200',
    'General': 'bg-gray-100 text-gray-800 border-gray-200',
    'Hazardous': 'bg-red-100 text-red-800 border-red-200'
  };

  const statusColors = {
    'scheduled': 'bg-blue-50 text-blue-700 border-blue-200',
    'in-progress': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    'completed': 'bg-green-50 text-green-700 border-green-200',
    'cancelled': 'bg-red-50 text-red-700 border-red-200',
    'confirmed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'pending': 'bg-orange-50 text-orange-700 border-orange-200'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Collection Schedule</h1>
          <p className="text-gray-600 mt-1">View pickup schedules and manage your waste collection times</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                viewMode === 'week' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                viewMode === 'month' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Month
            </button>
          </div>
          
          <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Bell className="h-4 w-4" />
            <span>Set Reminders</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">This Week</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Truck className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Upcoming</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MapPin className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Routes Active</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Schedule</h3>
            <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {scheduleData.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="font-medium text-gray-900">{item.day}</div>
                      <div className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${wasteTypeColors[item.wasteType]}`}>
                        {item.wasteType}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{item.timeSlot}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.route}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Truck className="h-4 w-4" />
                        <span>{item.collector}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[item.status]}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Your Upcoming Pickups */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Upcoming Pickups</h3>
            
            <div className="space-y-3">
              {upcomingPickups.map((pickup) => (
                <div key={pickup.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{pickup.type}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[pickup.status]}`}>
                      {pickup.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center space-x-1 mb-1">
                      <span className={`px-2 py-1 rounded text-xs ${wasteTypeColors[pickup.wasteType]}`}>
                        {pickup.wasteType}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(pickup.scheduledDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{pickup.timeSlot}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-4 py-3 rounded-lg text-left transition-colors">
                <div className="font-medium">Schedule Special Pickup</div>
                <div className="text-sm text-emerald-600">Request collection for large items</div>
              </button>
              
              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-4 py-3 rounded-lg text-left transition-colors">
                <div className="font-medium">Modify Pickup Time</div>
                <div className="text-sm text-blue-600">Change your regular collection schedule</div>
              </button>
              
              <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 px-4 py-3 rounded-lg text-left transition-colors">
                <div className="font-medium">Track Collection Vehicle</div>
                <div className="text-sm text-purple-600">Real-time location of pickup truck</div>
              </button>
            </div>
          </div>

          {/* Area Info */}
          <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2">Downtown District</h3>
            <div className="text-sm text-emerald-100 space-y-1">
              <div>Regular pickup: Mon, Wed, Fri</div>
              <div>Organic waste: Mon, Fri</div>
              <div>Recyclables: Tuesday</div>
              <div>Hazardous: Last Thursday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}