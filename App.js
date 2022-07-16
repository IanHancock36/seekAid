import React, {useState} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {authentication} from './firebase/firebase-config';
import {getAuth, createUserWithEmailAndPassword, signIN} from 'firebase/auth';
import DailyCheckList from './daily-check-list';
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

const App = () => {
  // empty array below for data to append to
  const [data, setData] = useState([]);

  return (
    <NativeBaseProvider>
      <DailyCheckList />
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
