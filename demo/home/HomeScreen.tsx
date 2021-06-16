import React from 'react';
import {Button, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView
      style={[
        backgroundStyle,
        {flex: 1, alignItems: 'center', justifyContent: 'center'},
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Web view" onPress={() => navigation.navigate('Webview')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
