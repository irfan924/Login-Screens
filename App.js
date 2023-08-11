import React from 'react';

// Import for Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens from Source Folder

import WelcomeScreen from './src/WelcomeScreen';
import Signup from './src/Signup';
import Signin from './src/Signin';
import Home from './src/Home';
import SplashScreen from './src/SplashScreen';

// Create Variable for Stack Navigation Handling

const Stack = createNativeStackNavigator();



const App = () => {


  return (

    <NavigationContainer  >

      <Stack.Navigator screenOptions={{ headerShown: false }} >

        <Stack.Screen name='SplashScreen' component={SplashScreen} />

        <Stack.Screen name='getStarted' component={WelcomeScreen} />

        <Stack.Screen name='Signup' component={Signup} />

        <Stack.Screen name='Signin' component={Signin} />

        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App;
