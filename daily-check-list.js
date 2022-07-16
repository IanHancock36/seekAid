import React from 'react';
import {View, Alert} from 'react-native';
import {
  HStack,
  VStack,
  Checkbox,
  Text,
  Input,
  TextField,
  Progress,
  Image,
  Button,
  ScrollView,
} from 'native-base';
// Ian to do Check out toast when you click the submit the day button
const DailyCheckList = () => {
  const logYourDay = () => {
    return Alert.alert(
      'Congratulations you have successfully completed your day 1 of 30! ',
    );
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 60}}>
      <ScrollView>
        <VStack p="5">
          <Image
            source={require('./assets/SeekToDoMoreChallengeHeader.png')}
            alt="Alternate Text"
            width="95%"
            height="150px"
          />
          <VStack marginBottom="4" alignItems="center" width="90%" />
          <VStack>
            <Checkbox size="md" value="green ">
              <Text bold fontSize="lg">
                1. Physical
              </Text>
            </Checkbox>
            <HStack justifyContent="space-between">
              <Checkbox size="md" value="green">
                <Text bold fontSize="lg">
                  2. Diet
                </Text>
              </Checkbox>
              <Checkbox size="md" value="green">
                <Text bold fontSize="lg">
                  Water
                </Text>
              </Checkbox>
            </HStack>
            <Checkbox size="md" value="green">
              <Text bold fontSize="lg">
                3. Spiritual
              </Text>
            </Checkbox>
            <Checkbox size="md" value="green">
              <Text bold fontSize="lg">
                4. Education
              </Text>
            </Checkbox>
            <Checkbox size="md" value="green">
              <Text bold fontSize="lg">
                5. Reading
              </Text>
            </Checkbox>
            <Checkbox size="md" value="green">
              <Text bold fontSize="lg">
                6. Hobbies
              </Text>
            </Checkbox>
            <Checkbox size="md" value="green">
              <Text bold fontSize="lg">
                7. Bonus/Other
              </Text>
            </Checkbox>
            <Text marginTop="5" bold fontSize="xl">
              Notes:{' '}
            </Text>
            <Input
              marginTop="5"
              height="150"
              borderRadius="15"
              placeholder="Your thoughts for the day?"
            />

            <Text mt="4" fontSize="lg" alignSelf="center" bold>
              One Day At A Time You Can Do This!
            </Text>
            <HStack marginTop="4" justifyContent="center">
              {/* <Image
            source={require('./assets/Absolute-Aid-Logo-ForWhiteBackground.png')}
            alt="Alternate Text"
            width="90%"
            height="90px"
          /> */}
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
