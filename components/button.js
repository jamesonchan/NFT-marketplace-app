import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, onPress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={onPress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ fontSize, onPress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        ...props,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
