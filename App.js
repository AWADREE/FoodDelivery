// import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Image, View, Text} from "react-native"
import {useFonts} from 'expo-font';
import {assets, SIZES} from "./constants"

import {
HomeNavigator,
OrdersNavigator,
AccountNavigator,
LoginNavigator,
LocationNavigator
} from './CustomNavigation'

// import Home from "./screens/Home";
// import Detailes from "./screens/Detailes";
// import ResturantDetailes from './screens/ResturantDetailes';
// import Cart from "./screens/Cart";
// import Checkout from "./screens/Checkout";

import { Provider } from "react-redux";
import store from './store'
import { COLORS } from "./constants";

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App =()=> {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if(!loaded) return null;

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        {/* <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ResturantDetailes"
            component={ResturantDetailes}
          />
          <Stack.Screen name="Detailes" component={Detailes} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator> */}

        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              borderRadius: 15,
              height: 85,
            },
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: "10%",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.home}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}
                  >
                    Home
                  </Text>
                </View>
              ),
            }}
            name="Home"
            component={HomeNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: "10%",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.cart}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}
                  >
                    Orders
                  </Text>
                </View>
              ),
            }}
            name="Orders"
            component={OrdersNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: "10%",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.person01}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}
                  >
                    Account
                  </Text>
                </View>
              ),
            }}
            name="Account"
            component={AccountNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: "10%",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.eth}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}
                  >
                    Location
                  </Text>
                </View>
              ),
            }}
            name="Location"
            component={LocationNavigator}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    top: "10%",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? COLORS.primary : COLORS.gray,
                    }}
                    source={assets.heart}
                  />
                  <Text
                    style={{
                      color: focused ? COLORS.primary : COLORS.gray,
                      fontSize: SIZES.small,
                    }}
                  >
                    Login
                  </Text>
                </View>
              ),
            }}
            name="Login"
            component={LoginNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;