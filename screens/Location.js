import { useState } from "react";
import {Text, View, SafeAreaView, FlatList , ScrollView, StatusBar} from "react-native";

import {COLORS, Resturants, Offers, SIZES} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar} from "../components";
import ShoppingCartIcon from "../components/ShoppingCartIcon";


const Location = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView>
        <View>
          <Text>Location</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Location;