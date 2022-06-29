import { useState } from "react";
import {Text, View, SafeAreaView, FlatList , ScrollView, StatusBar, Image, TouchableOpacity} from "react-native";

import {COLORS, Resturants, Offers, SIZES, assets, FONTS} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar} from "../components";
import ShoppingCartIcon from "../components/ShoppingCartIcon";


const Login = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              width: 100,
              height: 90,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontWeight:"100",
              fontStyle: "italic",
            }}
          >
            Any Food
          </Text>
        </View>
        <View style={{ height: "50%", width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              borderRadius: SIZES.extraLarge,
              minWidth: 250,
              width: "80%",
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "15%",
                alignItems: "flex-start",
              }}
            >
              <Image
                source={assets.google}
                resizeMode="contain"
                style={{ width: 22, height: 22 }}
              />
            </View>
            <Text
              style={{
                fontSize: SIZES.large,
                fontWeight: "800",
              }}
            >
              Continue with google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login