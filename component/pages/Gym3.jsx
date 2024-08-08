import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Gym3 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/gym-3.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.opacityImage}>
          <View style={styles.overlayContainer}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Meet your <Text style={styles.highlight}>coach</Text></Text>
              <Text style={styles.subtitle}>start your <Text style={styles.highlight}>journey</Text></Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={['#FFA500', '#FF4500']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonBackground}
              >
                <Text style={styles.buttonText}>Get started</Text>
              </LinearGradient>
            </TouchableOpacity>
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
    height: '75%',
  },
  overlayContainer: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  opacityImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    height: '100%',
    width: '130%',
    position: 'absolute',
    bottom: -width * 0.5 * 0.5,
    left: -width * 0.15,
    backgroundColor: '#121212',
    transform: [{ rotate: '-17deg' }],
  },
  textContainer: {
    position: 'absolute',
    bottom: 150,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    left: '25%',
    right: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBackground: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Gym3;
