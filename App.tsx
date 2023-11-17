/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationController} from './src/navigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {LogInWithGoogle} from './src/Google';

const GetPage = () => {
  const [logged_in, setState] = useState(false);

  if (logged_in == true) {
    return <NavigationController />;
  } else {
    return (
      <LogInWithGoogle
        login={() => {
          setState(true);
        }}
      />
    );
  }
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GetPage />
    </SafeAreaView>
  );
}

export default App;
