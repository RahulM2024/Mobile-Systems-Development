{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as React from "react";\
import \{ View \} from "react-native";\
import \{ FitBetHome \} from "../components/FitBetHome/FitBetHome";\
\
export const HomeScreen: React.FC = () => \{\
  return (\
    <View className="flex-1">\
      <FitBetHome imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/14e871089fc311992ecd7f2f20da605cc814b51cb7249f3ac737811af0a6e829?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" />\
    </View>\
  );\
\};}