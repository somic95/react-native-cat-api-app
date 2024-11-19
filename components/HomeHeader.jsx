import { View, Text } from "react-native";
import React from "react";

export default function HomeHeader({ hometitle }) {
  return (
    <View className="bg-[#DED0B6] p-4">
      <Text className="uppercase text-xl font-bold text-center text-[#607274]">
        {hometitle}
      </Text>
    </View>
  );
}
