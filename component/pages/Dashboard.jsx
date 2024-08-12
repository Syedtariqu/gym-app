import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');

const Dashboard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef(null);

  const dashboardIcons = [
    { name: 'Diet chart', icon: require('../../assets/image/diet.png') },
    { name: 'Workout chart', icon: require('../../assets/image/workout_chart.png') },
    { name: 'Attendance', icon: require('../../assets/image/attendance.png') },
    { name: 'Measurement', icon: require('../../assets/image/measurement.png') },
  ];

  const bannerData = [
    { id: '1', title: "It's time to Get stronger", level: "Entry level" },
    { id: '2', title: "Push your limits", level: "Intermediate" },
    { id: '3', title: "Achieve your goals", level: "Advanced" },
  ];

  const popularExercises = [
    { name: 'Squat Training', duration: '0hr 45min', icon: require('../../assets/image/squat.png') },
    { name: 'Dumbbell rows', duration: '1hr 20min', icon: require('../../assets/image/dumbbell.png') },
    { name: 'Cross Training', duration: '0hr 45m', icon: require('../../assets/image/cross.png') },
  ];

  const renderBannerItem = ({ item }) => (
    <View style={styles.bannerItem}>
      <Text style={styles.bannerLevel}>{item.level}</Text>
      <Text style={styles.bannerTitle}>{item.title}</Text>
      <Image source={require('../../assets/image/Dashboard_1.png')} style={styles.bannerImage} />
    </View>
  );

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveSlide(roundIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity>
            <Image source={require('../../assets/image/user.png')} style={styles.profileIcon} />
          </TouchableOpacity>
      </View>
        
        <View style={styles.iconContainer}>
        {dashboardIcons.map((item, index) => (
            <TouchableOpacity key={index} style={styles.iconItem}>
            <View style={styles.iconBackground}>
                <Image source={item.icon} style={styles.dashboardIcon} />
            </View>
            <Text style={styles.iconText}>{item.name}</Text>
            </TouchableOpacity>
        ))}
        </View>

        <View style={styles.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={bannerData}
            renderItem={renderBannerItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            getItemLayout={(data, index) => ({
              length: screenWidth - 32,
              offset: (screenWidth - 32) * index,
              index,
            })}
          />
          <View style={styles.paginationDots}>
            {bannerData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeSlide ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.membershipContainer}>
          <Text style={styles.membershipText}>Membership expire in</Text>
          <Text style={styles.membershipDays}>3 days</Text>
        </View>

        <View style={styles.popularExercisesContainer}>
          <View style={styles.popularHeader}>
            <Text style={styles.popularTitle}>Popular exercises</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularExercises.map((exercise, index) => (
              <TouchableOpacity key={index} style={styles.exerciseCard}>
                <Image source={exercise.icon} style={styles.exerciseIcon} />
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDuration}>{exercise.duration}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        {['home', 'person', 'add-circle', 'stats-chart', 'notifications-outline'].map((iconName, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Icon name={iconName} size={index === 2 ? 40 : 28} color={index === 2 ? '#FF9500' : 'gray'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFA07A',  
    backgroundColor: '#FFF5EE',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },
  dashboardIcon: {
    width: 30,
    height: 30,
  },
  iconText: {
    marginTop: 8,
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Poppins-SemiBold',
  },
  carouselContainer: {
    marginBottom: 20,
  },
  bannerItem: {
    backgroundColor: '#FF5722',
    borderRadius: 10,
    padding: 20,
    width: screenWidth - 32,
    marginHorizontal: 16,
    height: 180,
  },
  bannerLevel: {
    color: '#FFFFFF',
    fontSize: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
    maxWidth: '60%',
  },
  bannerImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 190,
    height: 190,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF5722',
  },
  inactiveDot: {
    backgroundColor: '#E0E0E0',
  },
  membershipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF3E0',
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  membershipText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  membershipDays: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#FF5722',
  },
  popularExercisesContainer: {
    padding: 16,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  popularTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  viewAllText: {
    color: '#FF5722',
    fontFamily: 'Poppins-SemiBold',
  },
  exerciseCard: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
    width: 120,
  },
  exerciseIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 4,
  },
  exerciseDuration: {
    color: '#757575',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
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

export default Dashboard;