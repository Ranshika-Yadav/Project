import { User, WasteRequest, CleanlinessEvent, Achievement, UserStats, WasteStats } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  role: 'resident',  
  area: 'Downtown District',
  address: '123 Green Street, Apt 4B',
  phone: '+1 (555) 123-4567',
  points: 2450,
  level: 7,
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
};

export const mockRequests: WasteRequest[] = [
  {
    id: '1',
    userId: '1',
    area: 'Downtown District',
    address: '123 Green Street',
    wasteType: 'recyclable',
    priority: 'medium',
    status: 'completed',
    requestDate: new Date('2024-01-15'),
    scheduledDate: new Date('2024-01-16'),
    completedDate: new Date('2024-01-16'),
    assignedWorker: 'Mike Rodriguez',
    estimatedWeight: 15,
    notes: 'Mixed recyclables including cardboard and plastic bottles'
  },
  {
    id: '2', 
    userId: '1',
    area: 'Downtown District',
    address: '123 Green Street',
    wasteType: 'organic',
    priority: 'high',
    status: 'in-progress',
    requestDate: new Date('2024-01-18'),
    scheduledDate: new Date('2024-01-19'),
    assignedWorker: 'Emma Chen',
    estimatedWeight: 8,
    notes: 'Kitchen waste and garden trimmings'
  },
  {
    id: '3',
    userId: '1',
    area: 'Downtown District', 
    address: '123 Green Street',
    wasteType: 'general',
    priority: 'low',
    status: 'pending',
    requestDate: new Date('2024-01-20'),
    estimatedWeight: 12
  }
];

export const mockEvents: CleanlinessEvent[] = [
  {
    id: '1',
    title: 'Community Park Cleanup',
    description: 'Join us for a community-wide cleanup of Central Park. Bring gloves and enthusiasm!',
    area: 'Downtown District',
    organizer: 'Green Initiative Team',
    eventDate: new Date('2024-01-25'),
    registrationDeadline: new Date('2024-01-23'),
    maxParticipants: 50,
    currentParticipants: 32,
    participants: ['1', '2', '3'],
    status: 'upcoming',
    rewards: 150,
    images: ['https://images.pexels.com/photos/6794966/pexels-photo-6794966.jpeg?auto=compress&cs=tinysrgb&w=400']
  },
  {
    id: '2',
    title: 'River Cleanup Drive',
    description: 'Help restore our local river ecosystem by removing plastic waste and debris.',
    area: 'Riverside',
    organizer: 'Eco Warriors',
    eventDate: new Date('2024-02-01'),
    registrationDeadline: new Date('2024-01-30'),
    maxParticipants: 30,
    currentParticipants: 18,
    participants: ['1'],
    status: 'upcoming',
    rewards: 200,
    images: ['https://images.pexels.com/photos/9324319/pexels-photo-9324319.jpeg?auto=compress&cs=tinysrgb&w=400']
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Segregation Master',
    description: 'Correctly segregated 50 waste requests',
    icon: 'Recycle',
    points: 500,
    category: 'segregation',
    requirement: 50,
    rarity: 'rare'
  },
  {
    id: '2',
    title: 'Green Warrior',
    description: 'Participated in 10 community events',
    icon: 'Shield',
    points: 750,
    category: 'community',
    requirement: 10,
    rarity: 'epic'
  },
  {
    id: '3',
    title: 'Consistency Champion',
    description: 'Maintained a 30-day request streak',
    icon: 'Trophy',
    points: 1000,
    category: 'streak',
    requirement: 30,
    rarity: 'legendary'
  }
];

export const mockUserStats: UserStats = {
  totalRequests: 45,
  completedRequests: 42,
  monthlyRequests: 8,
  segregationScore: 95,
  communityEvents: 6,
  currentStreak: 12,
  longestStreak: 18,
  totalPoints: 2450,
  achievements: ['1', '2']
};

export const mockWasteStats: WasteStats = {
  totalCollected: 1250,
  organicWaste: 450,
  recyclableWaste: 380,
  hazardousWaste: 45,
  generalWaste: 375,
  co2Saved: 234,
  treesEquivalent: 12
};