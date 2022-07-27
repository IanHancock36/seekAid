import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

export default HomeScreen;
