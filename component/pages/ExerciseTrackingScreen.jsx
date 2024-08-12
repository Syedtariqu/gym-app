import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExerciseCard = ({ icon, title, value, unit, time }) => (
  <View style={styles.card}>
  <View style={styles.iconTitleContainer}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
  <View style={styles.cardContent}>
    <Text style={styles.cardValue}>{value}{unit && <Text style={styles.cardUnit}> {unit}</Text>}</Text>
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  </View>
</View>
);

const ExerciseTrackingScreen = () => {
  const exerciseData = [
    { icon: require('../../assets/image/walking.png'), title: 'Walking', value: 9329, unit: 'Steps', time: 'Today 11:45 am' },
    { icon: require('../../assets/image/workout.png'), title: 'Workout', value: 45, unit: 'min', time: 'Today 7:00 am' },
    { icon: require('../../assets/image/cycling.png'), title: 'Cycling', value: 18, unit: 'km', time: 'Today 9:00 am' },
    { icon: require('../../assets/image/pushups.png'), title: 'Push ups', value: 120, unit: '', time: 'Today 1:00 pm' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Today's exercise</Text>
        <Image source={require('../../assets/image/user.png')} style={styles.profilePic} />
      </View>
      
      <View style={styles.tabContainer}>
        {['Today', 'This week', 'This month'].map((tab, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.tab, index === 0 && styles.activeTab]}
          >
            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scrollView}>
        {exerciseData.map((exercise, index) => (
          <ExerciseCard key={index} {...exercise} />
        ))}
      </ScrollView>

      <View style={styles.navbar}>
        {['home', 'person', 'add-circle', 'stats-chart', 'notifications-outline'].map((iconName, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Icon name={iconName} size={index === 2 ? 40 : 28} color={index === 2 ? '#FF9500' : 'gray'} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#FF9500',
  },
  tabText: {
    color: 'gray',
    fontFamily: 'Poppins-Regular'
  },
  activeTabText: {
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF5E6',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  iconTitleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  cardContent: {
    alignItems: 'flex-end',
  },
  cardTitle: {
    fontSize: 15,
    color: '#555',
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  },
  cardValue: {
    fontSize: 24,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold'
  },
  cardUnit: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Poppins-Light'
  },
  timeContainer: {
    backgroundColor: '#003366',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 4,
  },
  timeText: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins-Light'
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 7,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center'
  },
  navItem: {
    alignItems: 'center',
  },
  orangeBtn:{
    fontSize: 50,
  }
});

export default ExerciseTrackingScreen;