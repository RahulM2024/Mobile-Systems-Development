import * as React from "react";
import { View, Image } from "react-native";

const FitBetChallenges: React.FC = () => {
  return (
    <View 
      data-layername="fitBetChallenges" 
      className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]"
    >
      <Image 
        loading="lazy" 
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/14e871089fc311992ecd7f2f20da605cc814b51cb7249f3ac737811af0a6e829?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" }} 
        className="object-contain w-full aspect-[0.49]"
        accessibilityLabel="Fit Bet Challenges"
      />
    </View>
  );
};

export default FitBetChallenges;