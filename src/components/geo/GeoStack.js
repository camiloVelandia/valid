import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import GeoScreen from './GeoScreen'
import CardDetailScreen from './CardDetail/CardDetailScreen';

const Stack = createStackNavigator()

const GeoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Geo Top Tracks" component={GeoScreen} />
      <Stack.Screen name="track detail" component={CardDetailScreen} />
    </Stack.Navigator>
  );
};

export default GeoStack;