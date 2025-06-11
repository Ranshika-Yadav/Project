import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { mockWasteStats } from '../../data/mockData';

export default function WasteChart() {
  const monthlyData = [
    { month: 'Jul', organic: 45, recyclable: 38, general: 42, hazardous: 3 },
    { month: 'Aug', organic: 52, recyclable: 42, general: 38, hazardous: 4 },
    { month: 'Sep', organic: 48, recyclable: 45, general: 35, hazardous: 3 },
    { month: 'Oct', organic: 58, recyclable: 48, general: 40, hazardous: 5 },
    { month: 'Nov', organic: 65, recyclable: 52, general: 43, hazardous: 4 },
    { month: 'Dec', organic: 72, recyclable: 58, general: 38, hazardous: 6 },
    { month: 'Jan', organic: 78, recyclable: 62, general: 45, hazardous: 5 }
  ];

  const wasteTypeData = [
    { name: 'Organic', value: mockWasteStats.organicWaste, color: '#10B981' },
    { name: 'Recyclable', value: mockWasteStats.recyclableWaste, color: '#3B82F6' },
    { name: 'General', value: mockWasteStats.generalWaste, color: '#F59E0B' },
    { name: 'Hazardous', value: mockWasteStats.hazardousWaste, color: '#EF4444' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Monthly Trends */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Collection Trends</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
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
              <Bar dataKey="organic" stackId="a" fill="#10B981" name="Organic (kg)" />
              <Bar dataKey="recyclable" stackId="a" fill="#3B82F6" name="Recyclable (kg)" />
              <Bar dataKey="general" stackId="a" fill="#F59E0B" name="General (kg)" />
              <Bar dataKey="hazardous" stackId="a" fill="#EF4444" name="Hazardous (kg)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Waste Type Distribution */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Type Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={wasteTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
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
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          {wasteTypeData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
              <span className="text-sm font-medium text-gray-900">{item.value}kg</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}