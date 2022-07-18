import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider, Box} from 'native-base';
import {authentication} from './firebase/firebase-config';
import {getAuth, createUserWithEmailAndPassword, signIN} from 'firebase/auth';
import DailyCheckList from './daily-check-list';
import ChallengeFaq from './challenge-faqs';
import SignUp from './sign-up';
import LoginScreen from './login';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import SignInUser from './sign-in-user';
import GetData from './get-data';
import DailyTasks from './daily-tasks';
import CompletedList from './completed-list';

const Stack = createNativeStackNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  // empty array below for data to append to
  const [data, setData] = useState([]);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <DailyCheckList /> */}
        {/* <SignIn /> */}
        <ChallengeFaq />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

// const submitHandler = value => {
//   setData(prevTodo => {
//     return [{key: Math.random().toString(), value: value}, ...prevTodo];
//   });
// };

// const [signedIn, setSignedIn] = useState(false);
// const [userEmail, setUserEmail] = useState('');
// const [password, setPassword] = useState('');
// const RegisterUser = () => {
//   createUserWithEmailAndPassword(authentication, userEmail, password)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(response => {
//       console.log(response);
//     });
// };

//    {/* <View>
//<StatusBar barStyle="light-content" backgroundColor="midnightblue" />
//</View>
//<View>
//  <FlatList
//    data={data}
//    renderItem={({item}) => <CompletedList item={item} />}
//  />
//  <CompletedList />
//</View> */}

//<View>
// <TextInput
//   placeholder="Email"
//   value={userEmail}
//   onChangeText={text => setUserEmail(text)}
// />
// <TextInput
//   placeholder="password"
//   value={password}
//   secureTextEntry={true}
//   onChangeText={text => setPassword(text)}
// />
// <Button title="Register" onPress={RegisterUser} />
//<View>
//<SignInUser />
//<GetData />
//<DailyTasks submitHandler={submitHandler} />
