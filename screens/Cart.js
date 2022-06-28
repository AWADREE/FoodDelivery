import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { COLORS, Resturants, Offers, assets, SIZES, FONTS } from "../constants";
import { FocusedStatusBar, CartCard, CircleButton } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { clear } from "../reducers/cartSlice";
import { cartTotalPriceSeleector } from "../selectors";

const Cart = ({route, navigation}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);
    const totalPrice = useSelector(cartTotalPriceSeleector);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView stickyHeaderIndices={[0]}>
          <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
          />
          <FocusedStatusBar background={COLORS.primary} />

          {cart.length > 0 ? (
            <View>
              <View
                style={{
                  alignItems: "flex-end",
                  //   marginTop: SIZES.small,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FF5D5D",
                    height: 35,
                    width: 100,
                    margin: 20,
                    borderRadius: SIZES.large,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => dispatch(clear())}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.semiBold,
                      color: COLORS.white,
                    }}
                  >
                    Clear Cart
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={cart}
                renderItem={({ item }) => <CartCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // ListHeaderComponent={<HomeHeader />}
              />
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: SIZES.small,
                }}
              >
                <View style={{ width: "80%" }}>
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
                    }}
                  >
                    Total: ${totalPrice}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primary,
                    height: 35,
                    width: 100,
                    margin: 20,
                    borderRadius: SIZES.extraLarge,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                    height: 45,
                  }}
                  onPress={() =>
                    navigation.navigate("Checkout", { totalPrice })
                  }
                >
                  <Text
                    style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
                      color: COLORS.white,
                    }}
                  >
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text>Your cart is empty</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    );
};

export default Cart;
