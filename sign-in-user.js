import React, {useState} from 'react';
import {authentication} from './firebase/firebase-config';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {SafeAreaView, Text, View, Button, TextInput} from 'react-native';

const SignInUser = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const SignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <SafeAreaView>
      <View>
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
        <Button title="Register" onPress={SignInUser} />
      </View>
    </SafeAreaView>
  );
};

export default SignInUser;
