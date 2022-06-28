import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import ShoppingCartIcon from "./ShoppingCartIcon";
import { CircleButton } from './Button';
import { SIZES, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";


const ScreenHeader = () => {

  const navigation =useNavigation()

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.small,
        paddingHorizontal:SIZES.medium,
        zIndex: 1,
      }}
    >
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        // left={15}
        // top={StatusBar.currentHeight + 10}
      />
      <ShoppingCartIcon />
    </View>
  );
}

export default ScreenHeader