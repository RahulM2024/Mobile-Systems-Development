{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import \{ View, Text, Image, TouchableOpacity \} from 'react-native';\
import \{ StatusBar \} from './StatusBar';\
\
export const FitBetScreen: React.FC = () => \{\
  const statusBarIcons = [\
    \{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2b12f13bf275c859ada384e4179ecebe7235a857cf881fb8533d573536f39d0?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4', alt: 'Status icon 1' \},\
    \{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5fa9779cbe1f5b46cc100a1be9fe8e15b315903ee797f39b8919d7577a7350a8?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4', alt: 'Status icon 2' \}\
  ];\
\
  return (\
    <View \
      data-layername="fitBetStep1" \
      className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]"\
    >\
      <View className="flex flex-col justify-center p-6 w-full bg-white rounded-[70px]">\
        <View className="flex relative flex-col items-center px-8 pt-3 pb-24 w-full rounded-none aspect-[0.462]">\
          <Image\
            loading="lazy"\
            source=\{\{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/085b805c9c4ab52182618e8c35976828a6ae5513bde8c8b332cdaecb9ad32971?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4' \}\}\
            className="object-cover absolute inset-0 size-full"\
            accessibilityLabel="Background image"\
          />\
          \
          <StatusBar time="4:19 pm" icons=\{statusBarIcons\} />\
          \
          <View data-layername="fitBet" className="relative mt-64 text-6xl font-bold text-white">\
            <Text>FIT BET</Text>\
          </View>\
          \
          <View data-layername="swipeToLearnHowToPlay" className="relative mt-48 text-base font-medium text-white">\
            <Text>Swipe to learn how to play</Text>\
          </View>\
          \
          <Image\
            loading="lazy"\
            source=\{\{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e687d2b003df578e44e38c32aa8b6c1fa1a6802b736cbc4ea9d84a01dd7e0de8?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4' \}\}\
            className="object-contain mt-3.5 aspect-[7.35] w-[59px]"\
            accessibilityLabel="Swipe indicator"\
          />\
          \
          <TouchableOpacity\
            accessible=\{true\}\
            accessibilityRole="button"\
            accessibilityLabel="Let's Go button"\
          >\
            <View data-layername="letsGo" className="relative self-stretch px-16 py-2 mt-14 -mb-5 text-base font-medium text-white bg-orange-500 rounded-3xl">\
              <Text>Let's Go</Text>\
            </View>\
          </TouchableOpacity>\
        </View>\
      </View>\
    </View>\
  );\
\};}