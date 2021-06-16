import React from 'react';
import ProfileScreen from './home/ProfileScreen';
import SettingsScreen from './SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './home/HomeScreen';

const HomeStack = () => {
  const BtmTab = createBottomTabNavigator();
  return (
    <BtmTab.Navigator>
      <BtmTab.Screen name="Home" component={HomeScreen} />
      <BtmTab.Screen name="Profile" component={ProfileScreen} />
      <BtmTab.Screen name="Settings" component={SettingsScreen} />
    </BtmTab.Navigator>
  );
};

export default HomeStack;
