import {View, SafeAreaView} from 'react-native';
import React from 'react';
import {Text, Input, HStack, VStack, Image, Button} from 'native-base';

const SignUp = () => {
  const [submitting, setSubmitting] = React.useState(false);
  return (
    <SafeAreaView>
      <View>
        <VStack marginTop={20} alignItems="center">
          <Text fontSize="2xl" bold>
            Sign Up
          </Text>

          <VStack marginTop={60} alignItems="center">
            <View style={{marginBottom: 20}}>
              <Input size="lg" placeholder="First Name" width="90%" />
            </View>
            <View style={{marginBottom: 20}}>
              <Input size="lg" placeholder="Last Name" width="90%" />
            </View>
            <View style={{marginBottom: 40}}>
              <Input size="lg" placeholder="Email Address" width="90%" />
            </View>
            <HStack marginTop={4}>
              {!submitting ? (
                <Button
                  bg="#135100"
                  width={385}
                  onPress={() => setSubmitting(true)}>
                  <Text color="white" bold fontSize="md">
                    Sign Up
                  </Text>
                </Button>
              ) : (
                <Button
                  bg="#135100"
                  width={385}
                  isLoading
                  isLoadingText="Submitting"
                />
              )}
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
    </SafeAreaView>
  );
};

export default SignUp;
