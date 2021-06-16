import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';
import WebviewScreen from './home/WebviewScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';

const Demo = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Webview" component={WebviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Demo;
