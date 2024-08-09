import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  const handlePress = (name) => {
    console.log(`${name} pressed`);
    // Handle the press action for the specific icon
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          <Text style={styles.profile}>Profile</Text>
          <Image
            source={require('../../assets/image/profile.png')} // Replace with your image URL
            style={styles.profileImage}
            resizeMode={'cover'}
          />
          <View style={styles.editIconContainer}>
            <MaterialIcons name="edit" size={25} color="#FFF" />
          </View>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>123@example.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.statBox}>
              <MaterialIcons name="access-time" size={30} color="#000" />
            </View>
            <Text style={styles.statValue}>2hr 30min</Text>
            <Text style={styles.statLabel}>Total time</Text>
          </View>
          <View style={styles.statItem}>
            <View style={styles.statBox}>
              <FontAwesome5 name="fire" size={30} color="#FF4500" />
            </View>
            <Text style={styles.statValue}>6201 cal</Text>
            <Text style={styles.statLabel}>Burned</Text>
          </View>
          <View style={styles.statItem}>
            <View style={styles.statBox}>
              <FontAwesome5 name="dumbbell" size={30} color="#000" />
            </View>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Done</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <View style={styles.infotwo}>
              <FontAwesome5 name="dumbbell" size={24} color="#000" />
              <Text style={styles.infoText}>Weight</Text>
            </View>
            <Text style={styles.infoValue}>70 kg</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infotwo}>
              <MaterialIcons name="height" size={24} color="#000" />
              <Text style={styles.infoText}>Height</Text>
            </View>
            <Text style={styles.infoValue}>5.7'</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infotwo}>
              <FontAwesome5 name="hourglass" size={24} color="#000" />
              <Text style={styles.infoText}>Age</Text>
            </View>
            <Text style={styles.infoValue}>25 years</Text>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.infotwo}>
              <FontAwesome5 name="question-circle" size={24} color="#FFD700" />
              <Text style={styles.infoText}>Help</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#000" />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => handlePress('home')}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('user')}>
          <Icon name="user" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButtonContainer} onPress={() => handlePress('plus')}>
          <Icon name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('bar-chart')}>
          <Icon name="bar-chart" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('bell')}>
          <Icon name="bell" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollViewContent: {
    paddingBottom: 60, // Ensure there's space for the footer
  },
  profileContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  profile: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: '#CCC',
    borderWidth: 2,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 80,
    right: 120,
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 5,
  },
  username: {
    marginTop: 10,
    fontSize: 22,
    color: '#333',
    fontWeight: '500',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800000',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 15,
    elevation: 3,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginLeft: 10,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  infotwo: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#EEE',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
});

export default Profile;