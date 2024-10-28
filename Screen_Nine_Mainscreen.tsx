import * as React from "react";
import { View } from "react-native";
import { FitBetProfile } from "../components/FitBetProfile/FitBetProfile";

export const MainScreen: React.FC = () => {
  return (
    <View>
      <FitBetProfile imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/14e871089fc311992ecd7f2f20da605cc814b51cb7249f3ac737811af0a6e829?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" />
    </View>
  );
};