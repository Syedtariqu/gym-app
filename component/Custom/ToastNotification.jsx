import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ToastNotification = ({ message, type, visible }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity is 0

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();

      // Automatically hide the toast after 3 seconds
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      }, 3000);

      return () => clearTimeout(timer); // Clear the timer on component unmount
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, fadeAnim]);

  const backgroundColor = type === 'error' ? '#d9534f' : '#5cb85c'; // Red for error, green for success

  return (
    <Animated.View style={[styles.container, { backgroundColor, opacity: fadeAnim }]}>
      <Icon name={type === 'error' ? 'error' : 'check-circle'} size={35} color="#F6F4F4" />
      <View>
        <Text style={styles.heading}>{type === 'error' ? 'Error' : 'Success'}</Text>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: '5%',
    right: '5%',
    zIndex: 1000,
    borderRadius: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#003049',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  heading: {
    color: '#F6F4F4',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
  },
  text: {
    color: '#F6F4F4',
    fontWeight: '500',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default ToastNotification;
