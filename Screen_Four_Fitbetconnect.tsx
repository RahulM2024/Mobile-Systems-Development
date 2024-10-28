{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18340\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import \{ View, Text \} from 'react-native';\
import \{ StatusBar \} from './StatusBar';\
import \{ TrackerOption \} from './TrackerOption';\
\
const trackerOptions = [\
  \{\
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fad8fe71e23351305d1700ead55082f24189f63d5a36b8fb2189118dde90d326?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4",\
    label: "Garmin"\
  \},\
  \{\
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a200b93897278f54642ea4deeb344ca423e0e65b9ebadec5be92ffab3113b05?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4",\
    label: "Apple Health"\
  \}\
];\
\
export const FitBetConnect: React.FC = () => \{\
  return (\
    <View className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]">\
      <View className="flex flex-col justify-center p-6 w-full bg-white rounded-[70px]">\
        <View className="flex flex-col px-8 pt-3 pb-24 w-full bg-black rounded-[50px] shadow-[0px_0px_4px_rgba(0,0,0,0.1)]">\
          <StatusBar />\
          \
          <View className="self-center mt-28 text-3xl font-semibold leading-8 text-center text-white">\
            <Text>Fit Bet are customized for you</Text>\
          </View>\
          \
          <View className="self-center mt-4 text-xs text-center text-white">\
            <Text>To get your weekly goals, tell us how you track your steps</Text>\
          </View>\
          \
          <View className="flex gap-4 mt-10">\
            <View className="flex flex-col flex-1 text-xs font-medium leading-8 text-white whitespace-nowrap">\
              <View className="flex shrink-0 bg-white rounded-2xl h-[90px] w-[90px]" />\
              <View className="self-center">\
                <Text>Fitbit</Text>\
              </View>\
            </View>\
            \
            \{trackerOptions.map((option, index) => (\
              <TrackerOption\
                key=\{index\}\
                icon=\{option.icon\}\
                label=\{option.label\}\
              />\
            ))\}\
          </View>\
          \
          <View className="px-5 py-5 mt-11 text-xs text-white rounded-3xl bg-zinc-800">\
            <Text>\
              Easily connect your fitness tracker to sync your daily steps and activity data seamlessly. Whether you use Fitbit, Garmin, or Apple Health, linking your account ensures all your health metrics are available in one place. Stay on top of your fitness goals by monitoring your progress in real time and making every step count. Syncing your data helps you stay motivated and informed, giving you a complete view of your activity levels throughout the day.\
            </Text>\
          </View>\
        </View>\
      </View>\
    </View>\
  );\
\};}