import React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar, FlatList, ScrollView} from 'react-native'

import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { SubInfo, FocusedStatusBar, CircleButton, RectButton,
 DetailesDesc, DetailesBid , MealCard, ScreenHeader} from '../components'

import ShoppingCartIcon from "../components/ShoppingCartIcon";


const DetailesHeader = ({data, navigation})=>(

  <View style={{
    width:"100%",
    height:50
  }}>
    {/* <Image 
    source={data.image} 
    resizeMode="cover" 
    style={{ width:"100%", height:"100%"}}
    /> */}
    <CircleButton 
      imgUrl={assets.left}
      handlePress={()=> navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    {/* <CircleButton 
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    /> */}
  </View>
)


const ResturantDetailes = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView  stickyHeaderIndices={[0]}>
        <ScreenHeader />

        <FlatList
          data={data.meals}
          renderItem={({ item }) => <MealCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <React.Fragment>
              {/* <DetailesHeader data={data} navigation={navigation} /> */}

              <View style={{ marginTop: "3%" }}>
                <SubInfo />
              </View>
              <View style={{ padding: SIZES.font }}>
                <DetailesDesc data={data} />
              </View>
            </React.Fragment>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResturantDetailes;