{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
import \{ View, Text \} from "react-native";\
\
interface CheckboxWithLabelProps \{\
  text: string;\
\}\
\
export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = (\{ text \}) => \{\
  return (\
    <View className="flex relative gap-2 self-start mt-4 text-xs font-medium text-white">\
      <View className="flex shrink-0 self-start w-3.5 h-3.5 bg-black rounded-sm border border-white border-solid" />\
      <View data-layername="iAgreeTermsConditions" className="basis-auto">\
        <Text>\{text\}</Text>\
      </View>\
    </View>\
  );\
\};}