{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as React from "react";\
import \{ View, Image \} from "react-native";\
\
interface FitBetHomeProps \{\
  imageUrl: string;\
\}\
\
export const FitBetHome: React.FC<FitBetHomeProps> = (\{ imageUrl \}) => \{\
  return (\
    <View \
      data-layername="fitBetHome" \
      className="flex overflow-hidden flex-col mx-auto w-full bg-white bg-opacity-0 max-w-[480px]"\
    >\
      <Image \
        loading="lazy" \
        source=\{\{ uri: imageUrl \}\} \
        className="object-contain w-full aspect-[0.49]"\
        accessibilityRole="image"\
      />\
    </View>\
  );\
\};}