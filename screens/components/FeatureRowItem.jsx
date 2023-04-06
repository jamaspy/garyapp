import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
export const FeatureRowItem = ({
  title,
  imgUrl,
  rating,
  cuisine,
  distance,
  location,
}) => {
  return (
    <TouchableOpacity className="relative mr-2 border border-gray-100 rounded overflow-hidden">
      <Image source={{ uri: imgUrl }} className="rounded w-48 h-24" />
      <View className="bg-white w-full justify-between p-2">
        <Text className="text-black font-semibold text-lg">{title}</Text>
        <View className="pt-2 flex-row items-center gap-2">
          <StarIcon color="green" size={16} />
          <Text className="text-xs text-green-600">{rating}</Text>
          <Text className="text-xs text-gray-400">{cuisine}</Text>
        </View>
        <View className="pt-2 flex-row gap-2">
          <MapPinIcon color="gray" size={16} />
          <Text className="text-xs text-gray-400">{distance}</Text>
          <Text className="text-xs text-gray-400">{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
