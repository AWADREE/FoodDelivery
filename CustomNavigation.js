import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Orders from './screens/Orders';
import Account from './screens/Account';
import Login from './screens/Login';
import Location from './screens/Location';

import Detailes from "./screens/Detailes";
import ResturantDetailes from "./screens/ResturantDetailes";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";



const Stack = createStackNavigator();

const HomeNavigator =()=>{
    return (
        <Stack.Navigator
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
        </Stack.Navigator>
    );
}

const OrdersNavigator =()=>{
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Orders" component={Orders} />
        {/* <Stack.Screen name="OrderDetailes" component={OrderDetailes} /> */}
      </Stack.Navigator>
    );
}

const AccountNavigator =()=>{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    );
}

const LoginNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
};

const LocationNavigator =()=>{
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Location" component={Location} />
        </Stack.Navigator>
    );
}

export {
  HomeNavigator,
  OrdersNavigator,
  AccountNavigator,
  LoginNavigator,
  LocationNavigator,
};