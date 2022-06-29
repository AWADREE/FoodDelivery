import React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar, FlatList, ScrollView} from 'react-native'

import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../constants";
import { SubInfo, FocusedStatusBar, CircleButton, RectButton,
 DetailesDesc, DetailesBid , ScreenHeader, MealOrderCard} from '../components'

import { Price, Title } from "../components/SubInfo";
import ShoppingCartIcon from "../components/ShoppingCartIcon";


const OrderHeader = ({data, navigation})=>(

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


const OrderDetailes = ({ route, navigation }) => {
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
          data={data.items}
          renderItem={({ item }) => <MealOrderCard data={item} isOrder={true}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <React.Fragment>
              {/* <DetailesHeader data={data} navigation={navigation} /> */}
              
              <View style={{ padding: SIZES.font }}>
                <View style={{
                   width:"100%",
                }}>
                  <View style={{marginBottom:SIZES.small}}>
                    <Title 
                      title={"Order #: " + data.number}
                    //subTitle={data.description}
                      titleSize={SIZES.extraLarge}
                    //subTitleSize={SIZES.font}
                    />
                  </View>
                  <Text style={{
                    fontFamily:FONTS.semiBold,
                    fontSize:SIZES.large
                  }}>Total: ${data.total}</Text>
                </View>
              </View>
            </React.Fragment>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailes;