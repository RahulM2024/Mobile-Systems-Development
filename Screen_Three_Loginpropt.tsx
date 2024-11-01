{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
import \{ View, Text, TouchableOpacity \} from "react-native";\
\
export const LoginPrompt: React.FC = () => \{\
  return (\
    <View className="flex relative gap-1.5 mt-9 mr-7 mb-0 ml-7 text-sm">\
      <View data-layername="alreadyHaveAnAccount" className="grow text-white">\
        <Text>Already have an account</Text>\
      </View>\
      <TouchableOpacity>\
        <View data-layername="loginHere" className="text-orange-500">\
          <Text>Login Here</Text>\
        </View>\
      </TouchableOpacity>\
    </View>\
  );\
\};}