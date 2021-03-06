import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import GameNavigator from './navigation/GameNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded)
    return (
      <AppLoading
        onError={(err) => console.error(err)}
        onFinish={() => {
          setDataLoaded(true);
        }}
        startAsync={fetchFonts}
      />
    );

  return <GameNavigator style={{ height: '100%' }} />;
}
