import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { FeatureRowItem } from "./FeatureRowItem";
export const FeatureRow = ({ title, subtitle, imgUrl }) => {
  return (
    <View className="px-4 mt-4">
      <View className="flex-row items-center w-full justify-between mb-4">
        <View>
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="text-xs text-gray-500">{subtitle}</Text>
        </View>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FeatureRowItem
          title="Nando's"
          imgUrl="https://nandosaus.imgix.net/Nandos-Australia/images/Group-Shot-2-Eat-Healthy-For-under-500-calaries-COMP-H.jpg?auto=format&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=react-9.5.4"
          rating="4.8"
          cuisine="American"
          distance="Nearby"
          location="Avalon Beach"
        />
        <FeatureRowItem
          title="LP Pizza"
          imgUrl="https://www.darlingharbour.com/getmedia/b53961a5-8dea-41b9-a5d5-69e1d262ae33/fratelli-fresh-margarita-pizza.jpg?width=1024"
          rating="4.8"
          cuisine="Pizza"
          distance="Nearby"
          location="Avalon Beach"
        />
        <FeatureRowItem
          title="Alma"
          imgUrl="https://manofmany.com/wp-content/uploads/2021/05/Rosa-Cienfuegos-Itacate.jpg"
          rating="4.8"
          cuisine="Mexican"
          distance="Nearby"
          location="Avalon Beach"
        />
      </ScrollView>
    </View>
  );
};
