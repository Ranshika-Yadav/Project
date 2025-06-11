import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, TrendingUp, TrendingDown, Leaf, Recycle } from 'lucide-react';

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const monthlyTrends = [
    { month: 'Aug', requests: 12, completed: 11, co2Saved: 45, points: 320 },
    { month: 'Sep', requests: 15, completed: 14, co2Saved: 52, points: 450 },
    { month: 'Oct', requests: 18, completed: 16, co2Saved: 48, points: 520 },
    { month: 'Nov', requests: 22, completed: 20, co2Saved: 58, points: 680 },
    { month: 'Dec', requests: 19, completed: 18, co2Saved: 65, points: 720 },
    { month: 'Jan', requests: 24, completed: 22, co2Saved: 72, points: 850 }
  ];

  const wasteTypeData = [
    { name: 'Organic', value: 450, color: '#10B981', percentage: 36 },
    { name: 'Recyclable', value: 380, color: '#3B82F6', percentage: 30 },
    { name: 'General', value: 375, color: '#F59E0B', percentage: 30 },
    { name: 'Hazardous', value: 45, color: '#EF4444', percentage: 4 }
  ];

  const impactMetrics = [
    { title: 'CO₂ Reduced', value: '234 kg', change: '+15%', trend: 'up', icon: Leaf, color: 'emerald' },
    { title: 'Waste Recycled', value: '380 kg', change: '+22%', trend: 'up', icon: Recycle, color: 'blue' },
    { title: 'Trees Equivalent', value: '12 trees', change: '+8%', trend: 'up', icon: Leaf, color: 'green' },
    { title: 'Water Saved', value: '1,250 L', change: '+18%', trend: 'up', icon: TrendingUp, color: 'blue' }
  ];

  const achievements = [
    { month: 'January', segregationScore: 95, communityEvents: 2, perfectDays: 18 },
    { month: 'December', segregationScore: 92, communityEvents: 1, perfectDays: 15 },
    { month: 'November', segregationScore: 88, communityEvents: 2, perfectDays: 22 },
    { month: 'October', segregationScore: 85, communityEvents: 1, perfectDays: 12 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Track your environmental impact and waste management progress</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
          
          <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${metric.color}-50`}>
                  <Icon className={`h-6 w-6 text-${metric.color}-600`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendIcon className="h-4 w-4" />
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Trends */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="requests" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  name="Requests"
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="completed" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Completed"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Waste Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Type Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {wasteTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                  formatter={(value) => [`${value} kg`, 'Amount']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {wasteTypeData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-gray-900">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Your Environmental Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold">234 kg</div>
            <div className="text-emerald-100">CO₂ Emissions Prevented</div>
            <div className="text-sm text-emerald-200 mt-1">Equivalent to driving 589 km less</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">1,250 kg</div>
            <div className="text-emerald-100">Total Waste Managed</div>
            <div className="text-sm text-emerald-200 mt-1">30% increase from last period</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">12</div>
            <div className="text-emerald-100">Trees Worth of Impact</div>
            <div className="text-sm text-emerald-200 mt-1">Your contribution to reforestation</div>
          </div>
        </div>
      </div>

      {/* Monthly Performance */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Month</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Segregation Score</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Community Events</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Perfect Days</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((month, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{month.month}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-600 h-2 rounded-full" 
                          style={{ width: `${month.segregationScore}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{month.segregationScore}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{month.communityEvents}</td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">{month.perfectDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}