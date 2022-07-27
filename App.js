//**********Imports**********\\
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './test-nav-routes/home-screen';
import SignUp from './sign-up';
//**********Imports**********\\

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
