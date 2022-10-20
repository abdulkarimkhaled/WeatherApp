

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CityDetails,
  Historical,
  Home,
} from '../pages';


const Stack = createNativeStackNavigator();

//add screen to navigation stack
export default function NavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Historical" component={Historical} />
      <Stack.Screen name="CityDetails" component={CityDetails} />
    </Stack.Navigator >
  );
}



