import * as React from 'react';
import { View, Text } from 'react-native';
import { AchievementItem } from './types';

interface AchievementCardProps {
  achievement: AchievementItem;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { amount, type, name, date } = achievement;
  
  return (
    <View className="flex relative gap-4 py-2.5 pr-16 pl-5 mt-2.5 font-medium text-white rounded-xl bg-zinc-800">
      <View className="flex shrink-0 bg-black rounded-full h-[42px] w-[42px]" />
      <View className="flex flex-col self-start">
        <View className="text-sm">
          <Text>{`$ ${amount} ${type} ${type === 'won' ? 'from' : 'to'} ${name}`}</Text>
        </View>
        <View className="self-start mt-1.5 text-xs">
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
};