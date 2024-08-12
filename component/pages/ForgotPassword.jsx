import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ToastNotification from '../Custom/ToastNotification';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });

  const handleSendOtp = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setToast({ visible: true, message: 'Please enter your email address', type: 'error' });
      return;
    }

    if (!emailRegex.test(email)) {
      setToast({ visible: true, message: 'Please enter a valid email address', type: 'error' });
      return;
    }

    // Proceed with sending OTP
    setToast({ visible: true, message: 'OTP sent successfully', type: 'success' });
  };

  useEffect(() => {
    let timer;
    if (toast.visible) {
      // Set a timer to hide the toast after 3 seconds
      timer = setTimeout(() => {
        setToast(prevToast => ({ ...prevToast, visible: false }));
      }, 3000);
    }
    // Cleanup the timer if the component unmounts or the toast visibility changes
    return () => clearTimeout(timer);
  }, [toast.visible]);

  return (
    <View style={styles.container}>
      {toast.visible && <ToastNotification message={toast.message} type={toast.type} visible={toast.visible} />}
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
            <TouchableOpacity style={styles.loginButton} onPress={handleSendOtp}>
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
    backgroundColor: '#fff',
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
    color: '#000',
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
  },
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
