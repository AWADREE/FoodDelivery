import { View, Text, Image, TextInput, ScrollView } from 'react-native'

import {COLORS, FONTS, SIZES, assets} from '../constants'
import ShoppingCartIcon from './ShoppingCartIcon';

const HomeHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              width: 60,
              height: 50,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.small,
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            Any Food
          </Text>
        </View>
        <ShoppingCartIcon />
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, Victoria 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          let's find you a good deal
        </Text>
      </View>
    </View>
  );
}

export default HomeHeader