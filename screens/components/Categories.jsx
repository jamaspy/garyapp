import { ScrollView } from "react-native";
import React from "react";
import { Category } from "./Category";
export const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
    >
      <Category imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <Category imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <Category imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <Category imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <Category imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <Category imgUrl="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};
