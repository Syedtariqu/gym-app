import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OtpVerification = ({
  onVerify,
  email = '123@gmail.com',
  otpLength = 6,
}) => {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (newOtp[index] === '' && index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else {
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    // onVerify(otpString);
    console.log(otpString);
  };

  const handleResendCode = () => {
    // Implement resend code logic here
    console.log('Resending code...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>
          please enter the 6 digit code sent to {email}
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={event => handleKeyPress(event, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={ref => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.resendButtonText}>Resend code</Text>
            <LinearGradient
              colors={['#FFD700', '#FFAA00']} // Gradient colors for the border
              style={styles.gradientBottomBorder}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.goldenButton} onPress={handleVerify}>
          <LinearGradient
            colors={['#FFD700', '#FFAA00']} // Deep golden to deep yellow
            style={styles.gradientBackground}>
            <Text style={styles.buttonText}>Verify</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  content: {
    padding: 20,
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
},
subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular'
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    // height: 40,
    borderBottomWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 24,
  },
  resendCode: {
    color: '#000',
    textDecorationLine: 'underline',
    marginBottom: 30,
  },
  verifyButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  gradientBackground: {
    borderRadius: 50,
    paddingHorizontal: 100,
    paddingVertical: 15,
  },
  goldenButton: {
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  buttonWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 40,
    // marginBottom: 40,
  },
  resendButtonText: {
    color: '#333',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  gradientBottomBorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 3,
    height: 2,
  },
});

export default OtpVerification;
