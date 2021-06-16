/*
 * Copyright (c) 2021.
 */

import {useWindowDimensions, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const WebviewScreen = () => {
  const window = useWindowDimensions();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <WebView
        style={{width: window.width, height: window.height}}
        source={{uri: 'https://www.baidu.com'}}
      />
    </View>
  );
};

export default WebviewScreen;
