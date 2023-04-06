import { View, TextInput } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
export const HomeSearch = () => {
  return (
    <View className="flex-row items-center px-4 pb-2">
      <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1 mr-2">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput placeholder="Search" keyboardType="default" />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB" />
    </View>
  );
};
