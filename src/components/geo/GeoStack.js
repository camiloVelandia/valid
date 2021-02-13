import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import GeoScreen from './GeoScreen'

const Stack = createStackNavigator()

const GeoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Geo Top Tracks" component={GeoScreen} />
    </Stack.Navigator>
  );
};

export default GeoStack;