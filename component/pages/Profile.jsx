// ProfilePage.js
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
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
      <View style={styles.profileContainer}>
        <Text style={styles.profile}>Profile</Text>
        <Image
          source={require('../../assets/image/profile.png')} // Replace with your image URL
          style={styles.profileImage}
          resizeMode={'cover'}
        />
        <View style={styles.editIconContainer}>
          <MaterialIcons name="edit" size={25} color="black" />
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
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profile: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
  },
  profileImage: {
    position: 'relative',
    width: 130, // Fixed width
    height: 130, // Fixed height
    borderRadius: 75, // Half of the width/height to make it circular
    borderColor: '#000',
    // borderWidth: 2,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 80,
    right: 120,
    backgroundColor: '#FFD700',
    borderRadius: 15,
    padding: 5,
  },
  username: {
    marginTop: 5,
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#000',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    // padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: 60,   // Adjust width to fit the icon
    height: 60,  // Adjust height to fit the icon
    marginBottom: 10, // Space between the box and the text
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8C00', // Orange color for the values
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  infoContainer: {
    marginHorizontal: 20,
    // paddingBottom:50,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 20,
    shadowRadius: 3,
    elevation: 5,
    width: '100%',   // Adjust width to fit the icon
    height: 60,  // Adjust height to fit the icon
    marginBottom: 10, // Space between the box and the text
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  infotwo: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  // footer: {
  //   position:'relative',
  //   bottom:0,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems:'center',
  //   paddingVertical: 15,
  //   backgroundColor: '#F9E5D8',
  //   borderTopWidth: 1,
  //   borderTopColor: '#eee',
  // },
  // addButtonContainer: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#C46B16',
  //   borderRadius: 25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // marginTop: -25,
  // },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#F9E5D8',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#C46B16',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
});

export default Profile;
