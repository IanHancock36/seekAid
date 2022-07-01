import React, {useState} from 'react';
import {authentication} from './firebase/firebase-config';
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {SafeAreaView, Text, View, Button, TextInput} from 'react-native';

const SignInUser = () => {
  const [signIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(userCredential => {
        setSignedIn(true);
        // const user = userCredential.user;
        // ...
      })
      .catch(error => {
        console.log(error);
      });
  };
  const SignOutUser = () => {
    signOut(authentication)
      .then(response => {
        setSignedIn(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        {signIn === true ? (
          <Button title="Sign Out" onPress={SignOutUser} />
        ) : (
          <Button title="Sign In" onPress={SignIn} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignInUser;
