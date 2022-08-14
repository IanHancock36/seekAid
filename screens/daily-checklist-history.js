import React from 'react';
import {View, FlatList} from 'react-native';
import {Button, Text} from 'native-base';

const DailyHistory = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Text>DailyCheckList History</Text>
      <FlatList />
    </View>
  );
};
export default DailyHistory;
