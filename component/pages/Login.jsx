import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomToggle from '../Custom/CustomToggle';
import ToastNotification from '../Custom/ToastNotification';

const Login = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ visible: false, message: '', type: '' });

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

  const toggleSwitch = () => setPasswordVisible(previousState => !previousState);

  const handleLogin = () => {
    if (!memberId) {
      setToast({ visible: true, message: 'Please enter your Member ID', type: 'error' });
      return;
    }
  
    if (!password) {
      setToast({ visible: true, message: 'Please enter your password', type: 'error' });
      return;
    }
  
    if (password.length !== 6) {
      setToast({ visible: true, message: 'Password must be exactly 6 digits long', type: 'error' });
      return;
    }
  
    // Proceed with the login process
    setToast({ visible: true, message: 'Login successful', type: 'success' });
  };

  return (
    <View style={styles.container}>
      {toast.visible && <ToastNotification message={toast.message} type={toast.type} visible={toast.visible} />}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          source={require('../../assets/image/gym-4.jpg')}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Get fit with our</Text>
          <Text style={styles.subtitle}>professional trainers</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Member ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your ID"
            placeholderTextColor="#aaa"
            value={memberId}
            onChangeText={setMemberId}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your 6 digit password"
            placeholderTextColor="#aaa"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            maxLength={6}
          />
          <View style={styles.toggleWrapper}>
            <CustomToggle isEnabled={isPasswordVisible} toggleSwitch={toggleSwitch} />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <LinearGradient
                colors={['#d5801c', '#a65a12']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradient}
              >
                <Text style={styles.loginButtonText}>Login</Text>
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
  overlay: {
    position: 'absolute',
    top: '25%',
    left: '5%',
    zIndex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
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
    fontSize: 20,
    marginBottom: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 5,
    color: '#000',
  },
  toggleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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

export default Login;
