import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  return (
    <View className="bg-[#DED0B6] p-4 flex-row items-center gap-x-3">
      <Entypo
        name="chevron-left"
        size={28}
        color="#607274"
        onPress={() => navigation.goBack()}
      />
      <Text className="uppercase italic text-lg font-bold text-center text-[#607274]">
        {title}
      </Text>
    </View>
  );
}
