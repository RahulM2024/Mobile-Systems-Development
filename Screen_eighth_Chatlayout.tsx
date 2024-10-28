import React from 'react';
import { View, Image, Text } from 'react-native';
import { Divider } from './Divider';

export const ChatLayout: React.FC = () => {
  return (
    <View 
      data-layername="fitBetChat" 
      className="flex overflow-hidden flex-col mx-auto w-full text-xs font-semibold text-right text-white uppercase whitespace-nowrap bg-white bg-opacity-0 max-w-[480px]"
    >
      <View className="flex relative flex-col items-center px-16 pt-40 w-full min-h-[862px] pb-[686px]">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/14e871089fc311992ecd7f2f20da605cc814b51cb7249f3ac737811af0a6e829?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" }}
          className="object-cover absolute inset-0 size-full"
          accessibilityLabel="Chat background"
        />
        <View className="flex relative gap-0.5 items-center mb-0 max-w-full w-[247px]">
          <Divider />
          <View data-layername="today">
            <Text>TODAY</Text>
          </View>
          <Divider />
        </View>
      </View>
    </View>
  );
};