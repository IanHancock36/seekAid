import React, {useState} from 'react';
import {authentication} from './firebase/firebase-config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {SafeAreaView, Text, View, Button, TextInput} from 'react-native';

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, userEmail, password)
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  };
  return (
    <SafeAreaView>
      <View>
        <Text> HI </Text>
        <TextInput
          placeholder="Email"
          value={userEmail}
          onChangeText={text => setUserEmail(text)}
        />
        <TextInput
          placeholder="password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button title="Register" onPress={RegisterUser} />
      </View>
    </SafeAreaView>
  );
};

export default App;
