//**********Imports**********\\
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home-screen';
import SignUp from './screens/sign-up';
import LoginScreen from './screens/login';
import DailyCheckList from './screens/daily-check-list';
//**********Imports**********\\

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="DailyCheckList" component={DailyCheckList} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
