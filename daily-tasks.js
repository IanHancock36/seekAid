import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const DailyTasks = ({submitHandler}) => {
  const [value, setValue] = useState('');
  const onChangeText = text => {
    setValue(text);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Daily Tasks</Text>
        <View>
          <TextInput
            placeholder="add your daily tasks here"
            onChangeText={onChangeText}
          />
          {/* <Text>{value}</Text> */}
          <View>
            <TouchableOpacity
              // taken as a prop desctructured from the top the setvalue will take the value typed as the parameter and inside the submithandler function and take that value submit it and add it as the value with the random key to an object and spread that to the prevTodo's array
              onPress={() => {
                setValue(submitHandler(value));
              }}>
              <Text style={{color: 'purple'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DailyTasks;

// Need to create an empty array for the todo's to populate and to push them to.
// I could create an Unshift to push new completed to do to the top make a seperate list of todos
// to make the filter could use .filter Todo.id !== todoId or I could use !== includes TODO.id
// need to make a text input that handles the change of the text event e.target.value the value of the text input
// make a conditional inline for the button if completed or not.

// when using this text input the setValue is binding to the value of what is typed the text the value is the value you are typing in
// you can use the value state to show the updating text value since we gave it an empty string
