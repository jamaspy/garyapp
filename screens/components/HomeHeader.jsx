import { View, Text, Image } from "react-native";
import React from "react";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";
export const HomeHeader = () => {
  return (
    <View className="flex-row pb-4 items-center mx-4 space-x-2">
      <Image
        source={{
          uri: "https://links.papareact.com/wru",
        }}
        className="w-8 h-8 bg-grey-500 rounded-full overflow-hidden"
      />
      <View className="flex-1">
        <Text className="font-semibold text-xs text-gray-500">
          Deliver Now!
        </Text>

        <Text className="text-md font-bold items-center">
          Current Location <ChevronDownIcon color="#00CCBB" size={20} />
        </Text>
      </View>
      <UserIcon color="#00CCBB" size={35} />
    </View>
  );
};
