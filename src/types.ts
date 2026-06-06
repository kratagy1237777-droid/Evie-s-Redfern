export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'food' | 'drink';
  subCategory: 'toasties' | 'bowls' | 'sweet' | 'coffee' | 'wellness';
  tags: string[]; // e.g. ['V', 'GF', 'DF', 'Sulfite-Free', 'Organic']
  isPremium?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface FundraiserStatus {
  target: number;
  raised: number;
  donorsCount: number;
  daysLeft: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}
