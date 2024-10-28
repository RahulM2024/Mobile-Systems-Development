import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { AchievementCard } from './AchievementCard';
import { achievementData } from './data';

export const Achievements: React.FC = () => {
  return (
    <View data-layername="fitBetAchievements" className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]">
      <View className="flex relative flex-col px-14 pt-24 pb-56 w-full min-h-[862px]">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/14e871089fc311992ecd7f2f20da605cc814b51cb7249f3ac737811af0a6e829?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" }}
          className="object-cover absolute inset-0 size-full"
        />
        <View className="flex relative gap-8 self-end">
          <View className="text-base font-semibold text-center text-white basis-auto">
            <Text>Achievements</Text>
          </View>
          <View className="flex gap-4 self-start">
            <Image
              loading="lazy"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9176995eedd68dce40953b5900cbbaa2dfca2a39d52d081b001ec548d42189a6?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" }}
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <Image
              loading="lazy"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8efb51b04eb8216917e3dd09fe805f2a653dc2ae4288fa2b81409c6ce36ad1d2?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" }}
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </View>
        </View>
        <ScrollView>
          {achievementData.map((achievement, index) => (
            <AchievementCard
              key={`${achievement.name}-${achievement.date}`}
              achievement={achievement}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};