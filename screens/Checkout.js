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

import {COLORS, SIZES , Resturants , FONTS, Offers, assets} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar, CircleButton} from "../components";
import { useNavigation } from "@react-navigation/native";


const Checkout = ({ route }) => {
  const navigation = useNavigation();
  const { totalPrice } = route.params; 
  const [paymentMethod, setPaymentMethod] = useState("cash")

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
      //  stickyHeaderIndices={[2]}
      >
        <FocusedStatusBar background={COLORS.primary} />
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
        <View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: SIZES.large,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.extraLarge,
                }}
              >
                Pay with
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setPaymentMethod("Cash")}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderColor: COLORS.gray,
                  borderWidth: 2,
                  borderRadius: SIZES.large,
                  margin: SIZES.small,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {paymentMethod == "Cash" ? (
                  <View
                    style={{
                      height: 18,
                      width: 18,
                      backgroundColor: COLORS.primary,
                      borderRadius: SIZES.large,
                    }}
                  />
                ) : (
                  <></>
                )}
              </View>

              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: FONTS.medium,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Cash 💵
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setPaymentMethod("Card")}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderColor: COLORS.gray,
                  borderWidth: 2,
                  borderRadius: SIZES.large,
                  margin: SIZES.small,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {paymentMethod == "Card" ? (
                  <View
                    style={{
                      height: 18,
                      width: 18,
                      backgroundColor: COLORS.primary,
                      borderRadius: SIZES.large,
                    }}
                  />
                ) : (
                  <></>
                )}
              </View>

              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: FONTS.medium,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Credit/Debit 💳
              </Text>
            </TouchableOpacity>

            <View style={{ width: "80%" }}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.extraLarge,
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
              onPress={() => navigation.navigate("Checkout", { totalPrice })}
            >
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.large,
                  color: COLORS.white,
                }}
              >
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;