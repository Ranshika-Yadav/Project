import React, { useState } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import StatsCards from './components/dashboard/StatsCards';
import WasteChart from './components/dashboard/WasteChart';
import RecentActivity from './components/dashboard/RecentActivity';
import QuickActions from './components/dashboard/QuickActions';
import RequestList from './components/requests/RequestList';
import EventList from './components/community/EventList';
import GameSection from './components/education/GameSection';
import RewardSystem from './components/rewards/RewardSystem';
import Analytics from './components/reports/Analytics';
import CollectionSchedule from './components/schedule/CollectionSchedule';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'requests':
        return <RequestList />;
      case 'community':
        return <EventList />;
      case 'education':
        return <GameSection />;
      case 'rewards':
        return <RewardSystem />;
      case 'reports':
        return <Analytics />;
      case 'schedule':
        return <CollectionSchedule />;
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings</h2>
            <p className="text-gray-600">Settings panel would be implemented here</p>
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your waste management overview.</p>
            </div>
            <StatsCards />
            <WasteChart />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <QuickActions onActionClick={setActiveTab} />
              </div>
              <div>
                <RecentActivity />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <main className="flex-1 p-6 md:ml-0">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;