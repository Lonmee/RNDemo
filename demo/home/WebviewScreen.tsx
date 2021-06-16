/*
 * Copyright (c) 2021.
 */

import {Button, SafeAreaView, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const WebviewScreen = () => {
  const window = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{width: window.width, height: window.height}}
        source={{uri: 'https://www.baidu.com'}}
      />
      <View style={{position: 'absolute', left: 20, top: 40}}>
        <Button title={'back'} onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default WebviewScreen;
