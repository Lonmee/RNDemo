/*
 * Copyright (c) 2021.
 */

import {Button, Text, View} from 'react-native';
import React from 'react';

const DetailsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/*<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />*/}
      {/*<Button title="Go back" onPress={() => navigation.goBack()} />*/}
    </View>
  );
};

export default DetailsScreen;
