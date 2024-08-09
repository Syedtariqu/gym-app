// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// import React,{useState} from 'react';

// export default function Bott() {
//   const [name , setName] = useState('');
//   return (
//     <View style={styles.container}>
//       <TextInput
//       placeholder="Enter your name "
//       onChangeText={(text)=> setName(text)}
//       value={name}
//        />
//        <Button
//         title="Click Me"
//        />
//        <Text style={styles.text}>My name is {name}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   text:{
//     color:'#fff',
//   },
// });
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Bott = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    // eslint-disable-next-line no-alert
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter something:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleButtonPress} />
      <Text style={styles.output}>Current Value: {inputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Bott;

