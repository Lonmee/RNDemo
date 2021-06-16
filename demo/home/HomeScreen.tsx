import React from 'react';
import {Button, View, Text} from 'react-native';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Web view" onPress={() => navigation.navigate('Webview')} />
    </View>
  );
};

export default HomeScreen;
