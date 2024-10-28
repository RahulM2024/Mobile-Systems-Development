{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
import \{ View, Text, Image \} from "react-native";\
\
export const StatusBar: React.FC = () => \{\
  return (\
    <View className="flex relative gap-5 justify-between w-full">\
      <View data-layername="419Pm" className="text-xs font-medium text-white">\
        <Text>4:19 pm</Text>\
      </View>\
      <View className="flex shrink-0 self-start bg-white rounded-3xl h-[15px] w-[100px]" />\
      <View className="flex gap-4">\
        <Image\
          loading="lazy"\
          source=\{\{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/57bbf13398e267b0037e49ddc31325fd677f3c3cb29438f9b0bf2ec16bb3e9b9?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" \}\}\
          className="object-contain shrink-0 aspect-square w-[22px]"\
        />\
        <Image\
          loading="lazy"\
          source=\{\{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b9861bb71ba13efac710243474be9042307375095ea950ef41b635998ef1532?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" \}\}\
          className="object-contain shrink-0 aspect-square w-[22px]"\
        />\
      </View>\
    </View>\
  );\
\};}