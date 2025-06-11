import React from 'react';
import { Trophy, Star, Gift, Crown, Medal, Target } from 'lucide-react';
import { mockAchievements, mockUserStats } from '../../data/mockData';

export default function RewardSystem() {
  const levelInfo = {
    current: 7,
    nextLevel: 8,
    currentXP: 2450,
    nextLevelXP: 3000,
    progress: (2450 / 3000) * 100
  };

  const recentRewards = [
    { id: 1, title: 'Weekly Streak Bonus', points: 100, date: '2 days ago', type: 'bonus' },
    { id: 2, title: 'Perfect Segregation', points: 50, date: '3 days ago', type: 'achievement' },
    { id: 3, title: 'Community Event Participation', points: 150, date: '1 week ago', type: 'event' },
    { id: 4, title: 'Monthly Goal Completed', points: 200, date: '2 weeks ago', type: 'milestone' }
  ];

  const availableRewards = [
    { id: 1, title: 'Eco-friendly Water Bottle', cost: 1000, category: 'merchandise', inStock: true },
    { id: 2, title: 'Tree Planting Certificate', cost: 500, category: 'certificate', inStock: true },
    { id: 3, title: 'Discount Coupon - 20% off', cost: 750, category: 'discount', inStock: true },
    { id: 4, title: 'Premium Features (1 month)', cost: 1500, category: 'feature', inStock: false }
  ];

  const rarityColors = {
    common: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' },
    rare: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    epic: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
    legendary: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Rewards & Achievements</h1>
        <p className="text-gray-600 mt-1">Track your progress and redeem exciting rewards</p>
      </div>

      {/* Level Progress */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Level {levelInfo.current}</h2>
            <p className="text-emerald-100">Eco Warrior</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{mockUserStats.totalPoints.toLocaleString()}</div>
            <div className="text-emerald-100 text-sm">Total Points</div>
          </div>
        </div>
        
        <div className="mb-2">
          <div className="flex items-center justify-between text-sm mb-1">
            <span>Progress to Level {levelInfo.nextLevel}</span>
            <span>{levelInfo.currentXP}/{levelInfo.nextLevelXP} XP</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${levelInfo.progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <Trophy className="h-5 w-5 text-yellow-600" />
          </div>
          
          <div className="space-y-4">
            {mockAchievements.map((achievement) => {
              const rarity = rarityColors[achievement.rarity];
              const IconComponent = achievement.icon === 'Recycle' ? Target : 
                                 achievement.icon === 'Shield' ? Medal : Trophy;
              
              return (
                <div 
                  key={achievement.id}
                  className={`${rarity.bg} ${rarity.border} border rounded-lg p-4`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${rarity.bg} p-2 rounded-lg`}>
                      <IconComponent className={`h-5 w-5 ${rarity.text}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`text-xs px-2 py-1 rounded ${rarity.bg} ${rarity.text}`}>
                          {achievement.rarity}
                        </span>
                        <span className="text-xs text-emerald-600 font-medium">
                          +{achievement.points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Rewards */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Rewards</h3>
            <Star className="h-5 w-5 text-emerald-600" />
          </div>
          
          <div className="space-y-3">
            {recentRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{reward.title}</h4>
                  <p className="text-xs text-gray-600">{reward.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-emerald-600 font-medium">+{reward.points}</div>
                  <div className="text-xs text-gray-500 capitalize">{reward.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reward Store */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Reward Store</h3>
          <Gift className="h-5 w-5 text-purple-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {availableRewards.map((reward) => (
            <div key={reward.id} className="border border-gray-200 rounded-lg p-4">
              <div className="mb-3">
                <h4 className="font-medium text-gray-900">{reward.title}</h4>
                <p className="text-sm text-gray-600 capitalize">{reward.category}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-emerald-600 font-medium">{reward.cost} pts</div>
                <button 
                  disabled={!reward.inStock || mockUserStats.totalPoints < reward.cost}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    reward.inStock && mockUserStats.totalPoints >= reward.cost
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {!reward.inStock ? 'Out of Stock' : 
                   mockUserStats.totalPoints < reward.cost ? 'Not Enough Points' : 'Redeem'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">{mockUserStats.currentStreak}</div>
          <div className="text-sm text-gray-600">Current Streak</div>
          <div className="text-xs text-gray-500 mt-1">Keep it up!</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{mockUserStats.segregationScore}%</div>
          <div className="text-sm text-gray-600">Segregation Score</div>
          <div className="text-xs text-gray-500 mt-1">Excellent work!</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{mockUserStats.achievements.length}</div>
          <div className="text-sm text-gray-600">Achievements Earned</div>
          <div className="text-xs text-gray-500 mt-1">Out of {mockAchievements.length} total</div>
        </div>
      </div>
    </div>
  );
}