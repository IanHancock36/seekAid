import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {Text, Input, HStack, VStack, Image, Button} from 'native-base';

const LoginScreen = ({navigation}) => {
  // const [submitting, setSubmitting] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <VStack marginTop={10} alignItems="center">
        <Image
          source={require('./assets/AA-circle-logo_2.png')}
          alt="Alternate Text"
          size="100px"
        />
        <Text fontSize="xl" bold>
          Seek To Do More Challenge
        </Text>
        <Text>Powered by Absolute Aid</Text>

        <VStack marginTop={60} alignItems="center">
          <View style={{marginBottom: 20}}>
            <Input
              size="lg"
              placeholder="Email"
              width="90%"
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={userEmail => setEmail(userEmail)}
            />
          </View>
          <View>
            <Input size="lg" placeholder="Password" width="90%" />
          </View>
          <HStack marginTop={5}>
            {/* <Button
                bg="#135100"
                width={385}
                onPress={() => setSubmitting(true)}>
                <Text color="white" bold fontSize="md">
                  Login
                </Text>
              </Button> */}
            {/* {!submitting ? ( */}
            <Button
              width="95%"
              onPress={() => navigation.navigate('DailyCheckList')}>
              <Text color="white" bold fontSize="md">
                Login
              </Text>
            </Button>
            {/* ) : ( */}
            {/* <Button
              bg="#135100"
              width={385}
              isLoading
              isLoadingText="Submitting"
            /> */}
            {/* )} */}
          </HStack>
          <HStack marginTop={2} alignItems="center">
            <Text fontSize="md">Don't have an account? </Text>
            <Text
              fontSize="md"
              bold
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default LoginScreen;
