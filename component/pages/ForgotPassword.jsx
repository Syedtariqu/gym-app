import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          source={require('../../assets/image/gym-5.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title1}>Forgot</Text>
          <Text style={styles.title}> Password ?</Text>
          <Text style={styles.subtitle}>Please enter your email address to receive a verification code</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Enter E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.tryAnotherWay}>
            <Text style={styles.tryAnotherWayText}>Try another way</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <LinearGradient
                colors={['#d5801c', '#a65a12']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradient}
              >
                <Text style={styles.loginButtonText}>Send OTP</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  image: {
    width: '100%',
    height: '55%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: '60%',
  },
  formContainer: {
    paddingHorizontal: 30,
    // marginBottom:80,
    marginBottom: 70,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 16,
    paddingVertical: 5,
    color: '#000', // Set the text color to black
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
    marginTop: 20,
    // marginBottom:90,
  },


  // form here
  textContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  subtitle: {
    color: '#000',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
    marginLeft: 9,
  },

  tryAnotherWay: {
    marginTop: 50,
    alignItems: 'center',
  },
  tryAnotherWayText: {
    color: '#d5801c',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
