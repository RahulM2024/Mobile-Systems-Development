{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as React from "react";\
import \{ View, Image, Text \} from "react-native";\
import \{ StatusBar \} from "./StatusBar";\
import \{ InputField \} from "./InputField";\
import \{ CheckboxWithLabel \} from "./CheckboxWithLabel";\
import \{ PrimaryButton \} from "./PrimaryButton";\
import \{ LoginPrompt \} from "./LoginPrompt";\
\
export const CreateAccount: React.FC = () => \{\
  return (\
    <View data-layername="fitBetCreateAccount" className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]">\
      <View className="flex flex-col justify-center p-6 w-full bg-white rounded-[70px]">\
        <View className="flex relative flex-col px-8 pt-3 pb-40 w-full rounded-none aspect-[0.462]">\
          <Image\
            loading="lazy"\
            source=\{\{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f4f22fa0b70586bf08a84b5eac676d8684fc1108664c44d60bc000586e0992e?placeholderIfAbsent=true&apiKey=9d3b0685ab73410a9f57922a4fd1c0d4" \}\}\
            className="object-cover absolute inset-0 size-full"\
          />\
          <StatusBar />\
          <View data-layername="fitBet" className="relative self-center mt-20 text-5xl font-bold text-orange-500">\
            <Text>FIT BET</Text>\
          </View>\
          <View data-layername="createAccount" className="relative mt-12 mr-7 ml-7 text-3xl font-semibold text-white">\
            <Text>Create Account</Text>\
          </View>\
          \
          <View className="mt-7">\
            <InputField label="Name" />\
            <InputField label="Email Address" type="email" />\
            <InputField label="Mobile No." type="tel" />\
            <InputField label="Password" type="password" />\
          </View>\
\
          <CheckboxWithLabel text="I Agree Terms & Conditions" />\
          \
          <PrimaryButton text="Create Account" />\
          \
          <LoginPrompt />\
        </View>\
      </View>\
    </View>\
  );\
\};}