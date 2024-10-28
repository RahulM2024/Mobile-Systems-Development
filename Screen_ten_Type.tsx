export interface AchievementItem {
  amount: number;
  type: 'won' | 'lost';
  name: string;
  date: string;
}