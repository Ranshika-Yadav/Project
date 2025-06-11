import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Award, Plus } from 'lucide-react';
import { mockEvents } from '../../data/mockData';

export default function EventList() {
  const [filter, setFilter] = useState('upcoming');

  const getEventStatus = (event: any) => {
    const now = new Date();
    if (event.eventDate < now) return 'completed';
    if (event.eventDate.toDateString() === now.toDateString()) return 'ongoing';
    return 'upcoming';
  };

  const filteredEvents = mockEvents.filter(event => {
    if (filter === 'all') return true;
    return getEventStatus(event) === filter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Community Events</h1>
          <p className="text-gray-600 mt-1">Join local cleanup drives and environmental initiatives</p>
        </div>
        
        <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="h-4 w-4" />
          <span>Organize Event</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-wrap gap-2">
          {['all', 'upcoming', 'ongoing', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {event.images && event.images[0] && (
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.images[0]})` }}>
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-white/90">{event.area}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="p-6">
              {!event.images && (
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600">{event.area}</p>
                </div>
              )}
              
              <p className="text-gray-700 mb-4">{event.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">
                    {event.eventDate.toLocaleDateString()} at {event.eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">
                    {event.currentParticipants}/{event.maxParticipants} participants
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Organizer: {event.organizer}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{event.rewards} reward points</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">
                    Register by: {event.registrationDeadline.toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Registration Progress</span>
                  <span className="text-gray-900 font-medium">
                    {Math.round((event.currentParticipants / event.maxParticipants) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    getEventStatus(event) === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    getEventStatus(event) === 'ongoing' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {getEventStatus(event).charAt(0).toUpperCase() + getEventStatus(event).slice(1)}
                  </span>
                </div>
                
                {getEventStatus(event) === 'upcoming' && event.currentParticipants < event.maxParticipants && (
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {event.participants.includes('1') ? 'Registered' : 'Join Event'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">
            {filter === 'all' ? 'No community events available.' : `No ${filter} events found.`}
          </p>
        </div>
      )}
    </div>
  );
}