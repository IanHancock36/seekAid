import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Text, Input, HStack, VStack, Image, Button} from 'native-base';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(console.log('SUCCESS SIGN UP'))
        .catch(error => Alert.alert('LOGIN ERROR', error.message));
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <VStack marginTop={10} alignItems="center">
        <Image
          source={require('../assets/Absolute-Aid-Logo-ForWhiteBackground.png')}
          alt="Alternate Text"
          width="90%"
          height="90px"
        />
        <Text fontSize="2xl" bold>
          Sign Up
        </Text>

        <VStack marginTop={10} alignItems="center">
          <View style={{marginBottom: 20}}>
            <Input
              size="lg"
              placeholder="Email Address"
              width="90%"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Input
              size="lg"
              mt="5"
              placeholder="Password"
              width="90%"
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <Text color="primary.700" mt="2" bold alignSelf="center">
              Challenge FAQ's
            </Text>
          </View>

          <HStack marginTop={4}>
            {/* {!submitting ? ( */}
            <Button width="95%" onPress={onHandleSignup}>
              <Text color="white" bold fontSize="md">
                Sign Up
              </Text>
            </Button>
            {/* ) : (
              <Button width={300} isLoading isLoadingText="Submitting" />
            )}  */}
          </HStack>
          <HStack
            alignItems="center"
            justifyContent="center"
            width="90%"
            marginTop={8}>
            <Text fontSize="md">
              We will never sell your email or your private information to
              another company for our own personal gain. We may send you
              Absolute Aid offers and specials from time to time.
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default SignUp;
