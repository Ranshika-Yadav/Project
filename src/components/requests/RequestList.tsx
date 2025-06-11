import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, User, Calendar, Trash2, Filter, Plus } from 'lucide-react';
import { mockRequests } from '../../data/mockData';
import { WasteRequest } from '../../types';

export default function RequestList() {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);

  const statusColors = {
    pending: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
    assigned: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    'in-progress': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    completed: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    cancelled: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' }
  };

  const priorityColors = {
    low: 'text-green-600',
    medium: 'text-yellow-600',
    high: 'text-red-600'
  };

  const wasteTypeColors = {
    organic: 'bg-green-100 text-green-800',
    recyclable: 'bg-blue-100 text-blue-800',
    hazardous: 'bg-red-100 text-red-800',
    general: 'bg-gray-100 text-gray-800'
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'completed': return CheckCircle;
      case 'in-progress': return AlertCircle;
      default: return Clock;
    }
  };

  const filteredRequests = filterStatus === 'all' 
    ? mockRequests 
    : mockRequests.filter(request => request.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Waste Requests</h1>
          <p className="text-gray-600 mt-1">Manage and track your waste collection requests</p>
        </div>
        
        <button 
          onClick={() => setShowNewRequestModal(true)}
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Request</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-wrap items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by status:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['all', 'pending', 'assigned', 'in-progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Request Cards */}
      <div className="grid gap-4">
        {filteredRequests.map((request) => {
          const StatusIcon = getStatusIcon(request.status);
          const statusStyle = statusColors[request.status];
          
          return (
            <div key={request.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`${statusStyle.bg} ${statusStyle.border} border rounded-lg p-2`}>
                      <StatusIcon className={`h-4 w-4 ${statusStyle.text}`} />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {request.wasteType.charAt(0).toUpperCase() + request.wasteType.slice(1)} Waste Collection
                      </h3>
                      <p className="text-sm text-gray-600">{request.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">
                        Requested: {request.requestDate.toLocaleDateString()}
                      </span>
                    </div>
                    
                    {request.scheduledDate && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">
                          Scheduled: {request.scheduledDate.toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    
                    {request.assignedWorker && (
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Worker: {request.assignedWorker}</span>
                      </div>
                    )}
                    
                    {request.estimatedWeight && (
                      <div className="flex items-center space-x-2">
                        <Trash2 className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Est: {request.estimatedWeight}kg</span>
                      </div>
                    )}
                  </div>

                  {request.notes && (
                    <p className="text-sm text-gray-600 mt-3 bg-gray-50 p-3 rounded-lg">
                      <strong>Notes:</strong> {request.notes}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${wasteTypeColors[request.wasteType]}`}>
                      {request.wasteType}
                    </span>
                    <span className={`text-sm font-medium ${priorityColors[request.priority]}`}>
                      {request.priority} priority
                    </span>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1).replace('-', ' ')}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredRequests.length === 0 && (
        <div className="text-center py-12">
          <Trash2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
          <p className="text-gray-600">
            {filterStatus === 'all' 
              ? 'You haven\'t made any waste requests yet.' 
              : `No requests with ${filterStatus} status.`}
          </p>
        </div>
      )}

      {/* New Request Modal - Simplified for demo */}
      {showNewRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">New Waste Request</h2>
            <p className="text-gray-600 mb-4">This feature would open a form to create a new waste collection request.</p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowNewRequestModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => setShowNewRequestModal(false)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}