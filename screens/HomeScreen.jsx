import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Fontisto
          name="shopping-basket"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate("Details")}
        />
      ),
    });
  }, []);
  return (
    <SafeAreaView className="h-full flex items-center justify-center bg-blue-300">
      <Text className="text-4xl mt-12 ">Gary's Bum Doctor App</Text>
    </SafeAreaView>
  );
};
