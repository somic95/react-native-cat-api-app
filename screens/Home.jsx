import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Image,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { API_KEY } from "../data";

export default function Home({ navigation }) {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function getCats() {
    setIsLoading(true);

    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10",
      requestOptions
    );
    const data = await res.json();
    setCats(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCats();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getCats().then(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, 100);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#FAEED1]">
      <HomeHeader hometitle="The Cat Data App" />
      <ScrollView
        className="p-4"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          cats.map((cat) => (
            <Pressable
              key={cat.id}
              className="p-2 mt-4 rounded-xl border border-[#B2A59B] bg-white"
              onPress={() => navigation.navigate("Cat", cat)}
            >
              <Image
                source={{ uri: cat.url }}
                className="w-full h-64 object-top object-cover "
              />
              {cat.breeds.map((breed) => (
                <Text
                  key={breed.id}
                  className="font-bold text-center text-lg text-[#607274] py-2"
                >
                  {breed.name}
                </Text>
              ))}
            </Pressable>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
