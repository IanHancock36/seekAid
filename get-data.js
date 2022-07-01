/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {authentication} from './firebase/firebase-config';
import {db} from './firebase/firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite';
const GetData = () => {
  const GetUserData = async () => {
    const citiesCol = collection(db, 'cities');
    const citySnapShot = await getDocs(citiesCol);
    const cityList = citySnapShot.docs.map(doc => {
      doc.data();
    });
    console.log(cityList)
  };
  return (
    <SafeAreaView>
      <View>
        <Button title="Get data" onPress={GetUserData} />
      </View>
    </SafeAreaView>
  );
};

export default GetData;
