import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import {
  Categories,
  HomeSearch,
  HomeHeader,
  FeatureRow,
} from "./components/index";
export const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <HomeHeader />
      <HomeSearch />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        <FeatureRow
          title="Popular"
          subtitle="These are some words under the thing"
        />
        <FeatureRow
          title="Local"
          subtitle="These are some words under the thing"
        />
        <FeatureRow
          title="New Arrivals"
          subtitle="These are some words under the thing"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
