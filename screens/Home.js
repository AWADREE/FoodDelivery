import { useState } from "react";
import {Text, View, SafeAreaView, FlatList , ScrollView, StatusBar} from "react-native";

import {COLORS, Resturants, Offers, SIZES} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar} from "../components";
import ShoppingCartIcon from "../components/ShoppingCartIcon";


const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <ScrollView >
        <HomeHeader />
        <SearchBar />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList
              data={Offers}
              renderItem={({ item }) => <OfferCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              // ListHeaderComponent={<HomeHeader />}
              horizontal={true}
            />
          </View>
          <View style={{ zIndex: 0 }}>
            <FlatList
              // style={{ flexGrow: 0 }}
              data={Resturants}
              renderItem={({ item }) => <RestaurantCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              // ListHeaderComponent={<HomeHeader />}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: "100%", backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home