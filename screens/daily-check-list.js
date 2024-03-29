import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {
  HStack,
  VStack,
  Checkbox,
  Text,
  Input,
  Image,
  Button,
  ScrollView,
} from 'native-base';
import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
// Ian to do Check out toast when you click the submit the day button
const DailyCheckList = () => {
  const [physical, setPhysical] = useState(false);
  const [diet, setDiet] = useState(false);
  const [water, setWater] = useState(false);
  const [spiritual, setSpiritual] = useState(false);
  const [education, setEducation] = useState(false);
  const [reading, setReading] = useState(false);
  const [hobbies, setHobbies] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [dailyNotes, onChangeText] = useState('');

  const logYourDay = async () => {
    try {
      await addDoc(collection(db, 'dailyTasks'), {
        bonus: false,
        dailyNotes: '',
        diet: false,
        education: false,
        hobbies: false,
        physical: false,
        reading: false,
        spiritual: false,
        water: false,
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  // const logYourDay = () => {
  //   return Alert.alert(
  //     'Congratulations you have successfully completed your day 1 of 30! ',
  //   );
  // };
  const date = new Date();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>{date}</Text>
      <ScrollView>
        <VStack p="5">
          <Image
            source={require('../assets/SeekToDoMoreChallengeHeader.png')}
            alt="Alternate Text"
            width="95%"
            height="150px"
          />
          <VStack marginBottom="4" alignItems="center" width="90%" />
          <VStack>
            {physical ? (
              <Checkbox
                onPress={() => setPhysical(false)}
                isChecked={true}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  1. Physical
                </Text>
              </Checkbox>
            ) : (
              <Checkbox
                onPress={() => setPhysical(true)}
                isChecked={false}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  1. Physical
                </Text>
              </Checkbox>
            )}
            <HStack justifyContent="space-between">
              {diet ? (
                <Checkbox
                  onPress={() => setDiet(false)}
                  isChecked={true}
                  size="md"
                  value="green ">
                  <Text bold fontSize="lg">
                    2. Diet
                  </Text>
                  {console.log('', diet)}
                </Checkbox>
              ) : (
                <Checkbox
                  onPress={() => setDiet(true)}
                  isChecked={false}
                  size="md"
                  value="green ">
                  <Text bold fontSize="lg">
                    2. Diet
                  </Text>
                </Checkbox>
              )}

              {water ? (
                <Checkbox
                  onPress={() => setWater(false)}
                  isChecked={true}
                  size="md"
                  value="green ">
                  <Text bold fontSize="lg">
                    Water
                  </Text>
                </Checkbox>
              ) : (
                <Checkbox
                  onPress={() => setWater(true)}
                  isChecked={false}
                  size="md"
                  value="green ">
                  <Text bold fontSize="lg">
                    Water
                  </Text>
                </Checkbox>
              )}
            </HStack>
            {spiritual ? (
              <Checkbox
                onPress={() => setSpiritual(false)}
                isChecked={true}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  3. Spiritual
                </Text>
              </Checkbox>
            ) : (
              <Checkbox
                onPress={() => setSpiritual(true)}
                isChecked={false}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  3. Spiritual
                </Text>
              </Checkbox>
            )}
            {education ? (
              <Checkbox
                onPress={() => setEducation(false)}
                isChecked={true}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  4. Education
                </Text>
              </Checkbox>
            ) : (
              <Checkbox
                onPress={() => setEducation(true)}
                isChecked={false}
                size="md"
                value="green">
                <Text bold fontSize="lg">
                  4. Education
                </Text>
              </Checkbox>
            )}
            {reading ? (
              <Checkbox
                onPress={() => setReading(false)}
                isChecked={true}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  5. Reading
                </Text>
              </Checkbox>
            ) : (
              <Checkbox
                onPress={() => setReading(true)}
                isChecked={false}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  5. Reading
                </Text>
              </Checkbox>
            )}
            {hobbies ? (
              <Checkbox
                onPress={() => setHobbies(false)}
                isChecked={true}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  6. Hobbies
                </Text>
              </Checkbox>
            ) : (
              <Checkbox
                onPress={() => setHobbies(true)}
                isChecked={false}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  6. Hobbies
                </Text>
              </Checkbox>
            )}
            {bonus ? (
              <Checkbox
                onPress={() => setBonus(false)}
                isChecked={true}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  7. Bonus/Other
                </Text>
              </Checkbox>
            ) : (
              <Checkbox
                onPress={() => setBonus(true)}
                isChecked={false}
                size="md"
                value="green ">
                <Text bold fontSize="lg">
                  7. Bonus/Other
                </Text>
              </Checkbox>
            )}
            <Text marginTop="5" bold fontSize="xl">
              Notes:{' '}
            </Text>
            <Input
              value={dailyNotes}
              onChangeText={text => onChangeText(text)}
              marginTop="5"
              height="150"
              borderRadius="15"
              placeholder="Your thoughts for the day?"
            />
            <Text mt="4" fontSize="lg" alignSelf="center" bold>
              One Day At A Time You Can Do This!
            </Text>
            <HStack marginTop="4" justifyContent="center">
              <Button borderRadius="25px" onPress={() => logYourDay()}>
                <Text bold color="#fff">
                  Log Your Day
                </Text>
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </View>
  );
};
export default DailyCheckList;
