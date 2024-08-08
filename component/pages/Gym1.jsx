import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Gym1 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/gym-1.jpg')} // Ensure the path is correct
        style={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.mainText}>Gym</Text>
          <Text style={styles.mainText1}> Management</Text>
          <Text style={styles.description}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </Text>
          <Icon name="rightcircle" size={50} color="#FFF" style={styles.icon} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here
  },
  content: {
    position: 'absolute',
    padding: 20,
    bottom: 60,
  },
  welcomeText: {
    color: '#FFA500', // Yellow color
    fontSize: 28,
    fontWeight: 'bold',
  },
  mainText: {
    color: '#FFF', // White color
    fontSize: 55,
    fontWeight: 'bold',
  },
  mainText1:{
    color: '#FFF', // White color
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    color: '#FFF', // White color
    marginTop: 10,
  },
  icon: {
    marginTop: 20,
  },
});

export default Gym1;
