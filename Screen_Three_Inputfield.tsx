{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
import \{ View, Text, TextInput \} from "react-native";\
\
interface InputFieldProps \{\
  label: string;\
  type?: "text" | "email" | "password" | "tel";\
\}\
\
export const InputField: React.FC<InputFieldProps> = (\{ label, type = "text" \}) => \{\
  const inputId = `$\{label.toLowerCase().replace(/\\s/g, "-")\}-input`;\
  \
  return (\
    <View className="mb-2.5">\
      <Text className="sr-only">\{label\}</Text>\
      <TextInput\
        id=\{inputId\}\
        placeholder=\{label\}\
        secureTextEntry=\{type === "password"\}\
        keyboardType=\{type === "email" ? "email-address" : type === "tel" ? "phone-pad" : "default"\}\
        className="px-5 py-2.5 text-sm text-white bg-black rounded-3xl border border-white border-solid w-[300px]"\
        accessibilityLabel=\{label\}\
      />\
    </View>\
  );\
\};}