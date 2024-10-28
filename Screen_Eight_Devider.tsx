import React from 'react';
import { View } from 'react-native';

type DividerProps = {
  width?: string;
};

export const Divider: React.FC<DividerProps> = ({ width = "100px" }) => (
  <View 
    className="flex shrink-0 self-stretch my-auto h-px bg-zinc-300"
    style={{ width }}
  />
);