import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const CustomToggle = ({ isEnabled, toggleSwitch }) => {
    return (
      <TouchableOpacity
        style={[styles.toggleContainer, isEnabled ? styles.toggleEnabled : styles.toggleDisabled]}
        onPress={toggleSwitch}
      >
        <View style={[styles.toggleCircle, isEnabled ? styles.circleEnabled : styles.circleDisabled]} />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingTop: '60%',
    },
    formContainer: {
      paddingHorizontal: 30,
      marginTop: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      color: '#000',
      fontWeight: 'bold',
    },
    input: {
      borderBottomWidth: 3,
      borderBottomColor: '#000',
      marginBottom: 20,
      fontSize: 16,
      paddingVertical: 5,
    },
    toggleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
    toggleContainer: {
      width: 40,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      padding: 2,
    },
    toggleEnabled: {
      backgroundColor: '#000',
    },
    toggleDisabled: {
      backgroundColor: '#aaa',
    },
    toggleCircle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    circleEnabled: {
      alignSelf: 'flex-end',
    },
    circleDisabled: {
      alignSelf: 'flex-start',
    },
    forgotPassword: {
      color: '#d5801c',
      fontSize: 16,
    },
    loginButton: {
      borderRadius: 25,
      overflow: 'hidden',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradient: {
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    loginContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
  });

  export default CustomToggle;
