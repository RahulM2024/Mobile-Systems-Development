import * as React from "react";
import { View, Image } from "react-native";

interface FitBetVsProps {
  imageUrl: string;
}

export const FitBetVs: React.FC<FitBetVsProps> = ({ imageUrl }) => {
  return (
    <View 
      data-layername="fitBetVs" 
      className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]"
    >
      <Image 
        loading="lazy" 
        source={{ uri: imageUrl }} 
        className="object-contain w-full aspect-[0.49]"
        accessibilityRole="image"
      />
    </View>
  );
};