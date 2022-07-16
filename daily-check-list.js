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
} from 'native-base';
// Ian to do Check out toast when you click the submit the day button
const DailyCheckList = () => {
  const logYourDay = () => {
    return Alert.alert(
      'congratulations you have successfully completed your day 1 of 30! ',
    );
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 60}}>
      <VStack p="5">
        <Image
          source={require('./assets/SeekToDoMoreChallengeHeader.png')}
          alt="Alternate Text"
          width="95%"
          height="150px"
        />
        <VStack marginBottom="20" alignItems="center" width="90%" />
        <Checkbox size="md" value="green ">
          1. Physical
        </Checkbox>
        <HStack justifyContent="space-between">
          <Checkbox size="md" value="green">
            2. Diet
          </Checkbox>
          <Checkbox size="md" value="green">
            <Text fontSize="md">Water</Text>
          </Checkbox>
        </HStack>
        <Checkbox size="md" value="green">
          <Text bold fontSize="lg">
            {' '}
            3. Spiritual
          </Text>
        </Checkbox>
        <Checkbox size="md" value="green">
          4. Education
        </Checkbox>
        <Checkbox size="md" value="green">
          5. Reading
        </Checkbox>
        <Checkbox size="md" value="green">
          6. Hobbies
        </Checkbox>
        <Checkbox size="md" value="green">
          7. Bonus/Other
        </Checkbox>
        <Text marginTop="5" bold fontSize="xl">
          Notes:{' '}
        </Text>
        <TextField marginTop="5" />

        <Text fontSize="lg" alignSelf="center" bold>
          One Day At A Time You Can Do This!
        </Text>
        <HStack marginTop="10" justifyContent="center">
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
    </View>
  );
};
export default DailyCheckList;
