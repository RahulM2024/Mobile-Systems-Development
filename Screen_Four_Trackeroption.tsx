{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import \{ View, Image, Text \} from 'react-native';\
\
type TrackerOptionProps = \{\
  icon: string;\
  label: string;\
  customStyle?: string;\
\};\
\
export const TrackerOption: React.FC<TrackerOptionProps> = (\{ icon, label, customStyle = '' \}) => \{\
  return (\
    <View className="flex flex-col flex-1">\
      <View className=\{`flex flex-col justify-center items-center px-5 bg-white rounded-2xl h-[90px] w-[90px] $\{customStyle\}`\}>\
        <Image\
          loading="lazy"\
          source=\{\{ uri: icon \}\}\
          className="object-contain aspect-square w-[50px]"\
        />\
      </View>\
      <View className="self-center text-xs font-medium leading-8 text-white">\
        <Text>\{label\}</Text>\
      </View>\
    </View>\
  );\
\};}