import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import ToastNotification from '../Custom/ToastNotification';

export default function Edit() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });

    const handleSave = () => {
        // Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName) {
            setToast({ visible: true, message: 'Please enter your full name', type: 'error' });
            return;
        }

        if (!email) {
            setToast({ visible: true, message: 'Please enter your email address', type: 'error' });
            return;
        }

        if (!emailRegex.test(email)) {
            setToast({ visible: true, message: 'Please enter a valid email address', type: 'error' });
            return;
        }

        // Proceed with saving data
        setToast({ visible: true, message: 'Profile updated successfully', type: 'success' });
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
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.edithead}>
                    <Icon name="chevron-left" size={24} color="#000" />
                    <Text style={styles.profile}>Edit Profile</Text>
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/image/profile.png')} // Replace with your image URL
                        style={styles.profileImage}
                        resizeMode={'cover'}
                    />
                    <TouchableOpacity style={styles.cameraButton}>
                        <Text style={styles.cameraText}>Edit Photo</Text>
                        <Icons name="camera" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Full Name"
                        placeholderTextColor="#aaa"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    <Text style={styles.label}>Email ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Email Id"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <View>
                        <TouchableOpacity style={styles.toggleWrapper}>
                            <Text style={styles.forgotPassword}>Change Password</Text>
                            <Icon name="chevron-right" size={24} color="#d5801c" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleSave}>
                        <LinearGradient
                            colors={['#d5801c', '#a65a12']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.loginButtonText}>Save</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    scrollViewContent: {
        paddingBottom: 10, // Adjust padding if necessary
    },
    profileContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    edithead: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    profile: {
        color: '#000',
        fontSize: 23,
        fontWeight: 'bold',
        padding: 10,
    },
    profileImage: {
        width: 190,
        height: 190,
        borderRadius: 100,
        borderColor: '#CCC',
        borderWidth: 5,
    },
    cameraButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#CCC',
        borderRadius: 20,
    },
    cameraText: {
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 5,
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
    forgotPassword: {
        color: '#d5801c',
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
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
        marginTop: 90,
    },
});
