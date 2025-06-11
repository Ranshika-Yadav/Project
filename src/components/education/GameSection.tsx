import React, { useState } from 'react';
import { Trash2, CheckCircle, X, RotateCcw, Trophy, Star } from 'lucide-react';

export default function GameSection() {
  const [currentGame, setCurrentGame] = useState<'quiz' | 'sorting' | null>(null);
  const [score, setScore] = useState(0);
  const [gameStats, setGameStats] = useState({
    gamesPlayed: 24,
    bestScore: 950,
    currentStreak: 7,
    totalPoints: 3200
  });

  const wasteItems = [
    { id: 1, name: 'Apple Core', type: 'organic', image: '🍎' },
    { id: 2, name: 'Plastic Bottle', type: 'recyclable', image: '🍼' },
    { id: 3, name: 'Old Battery', type: 'hazardous', image: '🔋' },
    { id: 4, name: 'Tissue Paper', type: 'general', image: '🧻' },
    { id: 5, name: 'Glass Jar', type: 'recyclable', image: '🫙' },
    { id: 6, name: 'Banana Peel', type: 'organic', image: '🍌' }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which bin should plastic bottles go into?",
      options: ["Organic", "Recyclable", "General", "Hazardous"],
      correct: 1,
      explanation: "Plastic bottles are recyclable materials that can be processed and reused."
    },
    {
      id: 2,
      question: "What happens to organic waste when properly composted?",
      options: ["It becomes toxic", "It turns into fertilizer", "It pollutes water", "It creates methane"],
      correct: 1,
      explanation: "Organic waste becomes nutrient-rich compost that can fertilize soil naturally."
    }
  ];

  const binColors = {
    organic: 'bg-green-500',
    recyclable: 'bg-blue-500',
    hazardous: 'bg-red-500',
    general: 'bg-gray-500'
  };

  const games = [
    {
      id: 'sorting',
      title: 'Waste Sorting Challenge',
      description: 'Drag items to the correct bins and become a segregation master!',
      difficulty: 'Easy',
      points: '50-100 pts',
      icon: Trash2,
      color: 'emerald'
    },
    {
      id: 'quiz',
      title: 'Eco Knowledge Quiz',
      description: 'Test your environmental knowledge with fun questions.',
      difficulty: 'Medium',
      points: '75-150 pts',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'memory',
      title: 'Memory Match',
      description: 'Match waste items with their correct categories.',
      difficulty: 'Hard',
      points: '100-200 pts',
      icon: Trophy,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-6">
      {!currentGame ? (
        <>
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Learn & Play</h1>
            <p className="text-gray-600 mt-1">Master waste segregation through interactive games and challenges</p>
          </div>

          {/* Game Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-gray-900">{gameStats.gamesPlayed}</div>
              <div className="text-sm text-gray-600">Games Played</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-emerald-600">{gameStats.bestScore}</div>
              <div className="text-sm text-gray-600">Best Score</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{gameStats.currentStreak}</div>
              <div className="text-sm text-gray-600">Current Streak</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-purple-600">{gameStats.totalPoints}</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </div>
          </div>

          {/* Game Selection */}
          <div className="grid gap-6">
            <h2 className="text-xl font-semibold text-gray-900">Choose a Game</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => {
                const Icon = game.icon;
                const colorClasses = {
                  emerald: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
                  blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
                  purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
                };
                
                return (
                  <button
                    key={game.id}
                    onClick={() => setCurrentGame(game.id as any)}
                    className={`${colorClasses[game.color]} border rounded-xl p-6 text-left transition-all duration-200 hover:scale-105 hover:shadow-md`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-${game.color}-100`}>
                        <Icon className={`h-6 w-6 text-${game.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{game.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {game.difficulty}
                          </span>
                          <span className="text-xs text-emerald-600 font-medium">
                            {game.points}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{game.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Segregation Quick Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Organic Waste</h4>
                  <p className="text-sm text-gray-600">Food scraps, garden waste, biodegradable materials</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Recyclable</h4>
                  <p className="text-sm text-gray-600">Plastic, glass, metal, paper that can be reprocessed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Hazardous</h4>
                  <p className="text-sm text-gray-600">Batteries, chemicals, medical waste, electronics</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-gray-500 rounded-full mt-1"></div>
                <div>
                  <h4 className="font-medium text-gray-900">General</h4>
                  <p className="text-sm text-gray-600">Non-recyclable items, mixed materials</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Game Interface */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {currentGame === 'sorting' ? 'Waste Sorting Challenge' : 'Eco Knowledge Quiz'}
              </h2>
              <p className="text-gray-600">Score: {score} points</p>
            </div>
            <button
              onClick={() => setCurrentGame(null)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <X className="h-4 w-4" />
              <span>Exit Game</span>
            </button>
          </div>

          {currentGame === 'sorting' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Drag items to the correct bins:</h3>
              
              {/* Waste Items */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                {wasteItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-move hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-3xl mb-2">{item.image}</div>
                    <div className="text-sm font-medium text-gray-700">{item.name}</div>
                  </div>
                ))}
              </div>

              {/* Bins */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(binColors).map(([type, color]) => (
                  <div
                    key={type}
                    className={`${color} rounded-lg p-6 text-white text-center min-h-24 flex flex-col justify-center border-4 border-dashed border-white/30`}
                  >
                    <Trash2 className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-medium capitalize">{type}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentGame === 'quiz' && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Question 1 of 2</h3>
                <p className="text-gray-700">{quizQuestions[0].question}</p>
              </div>
              
              <div className="space-y-3">
                {quizQuestions[0].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              <RotateCcw className="h-4 w-4" />
              <span>Restart</span>
            </button>
            
            <div className="text-sm text-gray-600">
              Game in progress...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}