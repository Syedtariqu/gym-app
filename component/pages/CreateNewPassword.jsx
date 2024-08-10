import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CreateNewPassword = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Create new password</Text>
      <Text style={styles.description}>
        Your new password must be different from previous used passwords
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>New password</Text>
        <TextInput
          style={styles.inputField}
          value={newPassword}
          onChangeText={e => setNewPassword(e)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Text style={styles.labels}>Confirm password</Text>
        <TextInput
          style={styles.inputField}
          value={confirmNewPassword}
          onChangeText={e => setConfirmNewPassword(e)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonTextG}>Change password</Text>
          <LinearGradient
            colors={['#FFD700', '#FFAA00']} // Gradient colors for the border
            style={styles.gradientBottomBorder}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.goldenButton}>
          <LinearGradient
            colors={['#FFD700', '#FFAA00']} // Deep golden to deep yellow
            style={styles.gradientBackground}>
            <Text style={styles.buttonText}>Update Password</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 23,
    color: '#333',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-SemiBold',
  },
  description: {
    fontSize: 14,
    color: '#444',
    // paddingBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 17,
    color: '#666',
    marginTop: 20,
    lineHeight: 25,
    fontFamily: 'Poppins-SemiBold',
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    color: '#999',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginBottom: 20,
  },
  gradientBackground: {
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 50,

  },
  goldenButton: {
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: '700',

    fontFamily: 'Poppins-SemiBold',
  },
  buttonWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 30,
    width: '55%',
    margin: 'auto'
  },
  buttonTextG: {
    color: '#333',
    fontSize: 14,
    paddingBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  gradientBottomBorder: {
    position: 'absolute',
    bottom: 3,
    height: 2,
    left: 0,
    width: '100%',
  },
});

export default CreateNewPassword;
