import { useState } from "react";
import {Text, View, SafeAreaView, FlatList , ScrollView, StatusBar} from "react-native";

import {COLORS, Resturants, Offers, SIZES} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar} from "../components";
import ShoppingCartIcon from "../components/ShoppingCartIcon";


const Orders = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView >
        <View>
          <Text>Orders</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders