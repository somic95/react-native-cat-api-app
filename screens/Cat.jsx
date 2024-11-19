import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../components/Header";

export default function Cat({ route, navigation }) {
  const LinkToWiki = () => {
    Linking.openURL(
      `https://en.wikipedia.org/wiki/${route.params.breeds[0].name}`
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-[#FAEED1]">
      <Header title={route.params.breeds[0].name} navigation={navigation} />
      <ScrollView>
        <View>
          <View className="p-4">
            <Image
              source={{ uri: route.params.url }}
              className="w-full h-96 rounded-tl-3xl rounded-tr-3xl"
            />
          </View>
          <View className="bg-white py-4 -mt-4 mx-4 rounded-bl-3xl rounded-br-3xl">
            <View className="bg-slate-100 p-2 ">
              <Text className="font-extrabold  text-2xl text-center text-[#607274]">
                {route.params.breeds[0].name}
              </Text>
              <Text className="text-center text-[#607274]">
                ({route.params.breeds[0].origin})
              </Text>
            </View>
          </View>
        </View>
        <View className=" justify-center bg-transparent m-4">
          <View className="flex-row p-4 rounded-3xl bg-orange-400 text-center justify-center items-center">
            <Text className="text-white text-center text-2xl font-light">
              Weight :{"   "}
            </Text>
            <Text className="text-white text-center font-bold italic text-3xl ">
              {route.params.breeds[0].weight.metric}
            </Text>
            <Text className="text-white text-center text-xl font-bold italic ">
              {" "}
              Kilograms
            </Text>
          </View>
          <View className="flex-row mt-1 p-4 rounded-3xl bg-orange-400 text-center justify-center items-center">
            <Text className="text-white text-center text-2xl font-light">
              AKA :{"   "}
            </Text>
            <Text className=" text-white text-center text-lg font-bold italic">
              {route.params.breeds[0].alt_names.length > 25
                ? `${route.params.breeds[0].alt_names.substring(0, 25)}...`
                : route.params.breeds[0].alt_names}
            </Text>
          </View>
        </View>
        <View className="bg-[#DED0B6] w-full p-4">
          <Text className="text-[#607274] font-bold text-lg text-center underline">
            Description :
          </Text>
          <Text className="text-slate-600 text-base pt-4">
            {"       "}
            {route.params.breeds[0].description}
          </Text>
          <View className="px-4 mt-4">
            <Text className="font-bold italic text-black">
              Also known as : {route.params.breeds[0].alt_names}
            </Text>
            <Pressable onPress={LinkToWiki}>
              <Text className="underline italic text-black">
                More : Wikipedia
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
