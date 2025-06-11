export interface User {
  id: string;
  name: string;
  email: string;
  role: 'resident' | 'worker' | 'admin';
  area: string;
  address: string;
  phone: string;
  points: number;
  level: number;
  avatar?: string;
}

export interface WasteRequest {
  id: string;
  userId: string;
  area: string;
  address: string;
  wasteType: 'organic' | 'recyclable' | 'hazardous' | 'general';
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  requestDate: Date;
  scheduledDate?: Date;
  completedDate?: Date;
  assignedWorker?: string;
  notes?: string;
  images?: string[];
  estimatedWeight?: number;
}

export interface CleanlinessEvent {
  id: string;
  title: string;
  description: string;
  area: string;
  organizer: string;
  eventDate: Date;
  registrationDeadline: Date;
  maxParticipants: number;
  currentParticipants: number;
  participants: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  rewards: number;
  images?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  category: 'segregation' | 'requests' | 'community' | 'streak';
  requirement: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface UserStats {
  totalRequests: number;
  completedRequests: number;
  monthlyRequests: number;
  segregationScore: number;
  communityEvents: number;
  currentStreak: number;
  longestStreak: number;
  totalPoints: number;
  achievements: string[];
}

export interface WasteStats {
  totalCollected: number;
  organicWaste: number;
  recyclableWaste: number;
  hazardousWaste: number;
  generalWaste: number;
  co2Saved: number;
  treesEquivalent: number;
}