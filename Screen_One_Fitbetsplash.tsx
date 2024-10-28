{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import \{ View, Text, Image \} from 'react-native';\
import \{ StatusBar \} from './StatusBar';\
\
const statusIcons = [\
  \{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/344454f604e1d7e4dc8aa350d731921f8870be108dd6978ba817707614bc9cca?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4', id: 'icon1' \},\
  \{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/809fdae6f4b01b7df3e72cf36fed2e1c99a321a5491e4e6a290621ac8cc1920f?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4', id: 'icon2' \},\
];\
\
export const FitBetSplash: React.FC = () => \{\
  return (\
    <View\
      data-layername="fitBetSplash"\
      className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]"\
    >\
      <View className="flex flex-col justify-center p-6 w-full bg-white rounded-[70px]">\
        <View className="flex relative flex-col px-8 pt-3 pb-96 w-full rounded-none aspect-[0.462]">\
          <Image\
            loading="lazy"\
            source=\{\{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1c8022266c5c310597b4feebd5dba45c1628b15fad70d1b71284402f52c0a1d2?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4' \}\}\
            className="object-cover absolute inset-0 size-full"\
          />\
          <StatusBar time="4:19 pm" icons=\{statusIcons\} />\
          <View\
            data-layername="fitBet"\
            className="relative self-center mt-80 mb-0 text-6xl font-bold text-orange-500"\
          >\
            <Text>FIT BET</Text>\
          </View>\
        </View>\
      </View>\
    </View>\
  );\
\};}