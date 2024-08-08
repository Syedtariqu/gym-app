import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const Gym2 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/gym-2.jpg')} // Replace with your image URL
        style={styles.imageBackground}
      >
      <View style={styles.opacityImage}>
        <View style={styles.overlayContainer}>
          <View style={styles.overlay} />
          <View style={styles.overlay1}>
            <Text style={styles.title}>Find the right</Text>
            <Text style={styles.subtitle}>workout for what </Text>
            <Text style={styles.title}>you need</Text>
          </View>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    height:'85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacityImage:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  overlayContainer: {
    width: '100%',
    height: '50%', // Increased height for more coverage
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  overlay: {
    height: '100%',
    width: '130%', // Increased width to ensure full coverage
    position: 'absolute',
    bottom: -width * 0.5 * 0.5, // Adjusted position to align with the desired look
    left: -width * 0.15, // Shifted to the left to cover the screen fully
    backgroundColor: '#121212', // Darker overlay with some transparency
    transform: [{ rotate: '-10deg' }], // Rotate to create the angled effect
  },
  overlay1: {
    position: 'absolute',
    bottom: 150, // Adjust to control vertical positioning
    left: 0,
    right: 0,
    alignItems: 'center', // Center the text horizontally
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
  },
});

export default Gym2;
