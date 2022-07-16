// now we need to make the list to render the values
// eslint-disable-next-line no-unused-vars, prettier/prettier
import { FieldValue } from 'firebase/firestore/lite';
import {NativeBaseProvider, Box} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';

const CompletedList = ({item}) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
};

export default CompletedList;
