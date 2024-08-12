import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PrevIcon from 'react-native-vector-icons/Ionicons';
import Svg, { Circle, LinearGradient, Stop } from 'react-native-svg';

const DietScreen = () => {
  const [activeDay, setActiveDay] = useState('Today');
  const [isBreakfastOpen, setIsBreakfastOpen] = useState(false);
  const [isLunchOpen, setIsLunchOpen] = useState(true);

  const [calorieData, setCalorieData] = useState({
    caloriesLeft: 2130,
    caloriesConsumed: 206
  });

  const [meals, setMeals] = useState({
    breakfast: {
      totalCalories: 186,
      foods: [
        { name: 'White rice', amount: '25 Teaspoons', calories: 123, icon: require('../../assets/image/rice.png') },
        { name: 'Fish curry', amount: '1.5 cups', calories: 182, icon: require('../../assets/image/fish.png') },
        { name: 'Egg omelette', amount: '1 serving', calories: 80, icon: require('../../assets/image/omelette.png') },
      ]
    },
    lunch: {
      totalCalories: 388,
      foods: [
        { name: 'White rice', amount: '25 Teaspoons', calories: 123, icon: require('../../assets/image/rice.png') },
        { name: 'Fish curry', amount: '1.5 cups', calories: 182, icon: require('../../assets/image/fish.png') },
        { name: 'Egg omelette', amount: '1 serving', calories: 80, icon: require('../../assets/image/omelette.png') },
      ]
    }
  });

  const toggleBreakfast = () => setIsBreakfastOpen(!isBreakfastOpen);
  const toggleLunch = () => setIsLunchOpen(!isLunchOpen);

  const renderMealSection = (mealType, isOpen, toggleFunction) => (
    <TouchableOpacity style={styles.mealContainer} onPress={toggleFunction}>
      <View style={styles.mealHeader}>
        <Text style={styles.mealTitle}>{mealType}: {meals[mealType].totalCalories} cal</Text>
        <Icon name={isOpen ? "down" : "right"} size={16} color="black" />
      </View>
      {isOpen && (
        <>
          <View style={styles.horizontalRule} />
          {meals[mealType].foods.map((food, index) => (
            <View key={index} style={styles.foodItem}>
              <Image source={food.icon} style={styles.foodIcon} />
              <View>
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodAmount}>{food.amount}</Text>
              </View>
              <Text style={styles.foodCalories}>{food.calories}</Text>
            </View>
          ))}
        </>
      )}
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity>
            <PrevIcon name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Today's diet</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/image/user.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
        
       
        <View style={styles.tabContainer}>
          {['Yesterday', 'Today', 'Tomorrow'].map((day) => (
            <TouchableOpacity 
              key={day} 
              style={[styles.tabButton, activeDay === day && styles.activeTabButton]}
              onPress={() => setActiveDay(day)}
            >
              <Text style={[styles.tabText, activeDay === day && styles.activeTabText]}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        
        <View style={styles.calorieCircle}>
          <Svg height="200" width="200" style={styles.circle}>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#FFA500" />
              <Stop offset="1" stopColor="#FF6347" />
            </LinearGradient>
            <Circle
              cx="100"
              cy="100"
              r="90"
              stroke="#FFEFD5"
              strokeWidth="15"
              fill="none"
            />
            <Circle
              cx="100"
              cy="100"
              r="90"
              stroke="url(#grad)"
              strokeWidth="15"
              fill="none"
              strokeDasharray="565"
              strokeDashoffset={565 * (1 - calorieData.caloriesConsumed / (calorieData.caloriesLeft + calorieData.caloriesConsumed))}
              strokeLinecap="round"
            />
          </Svg>
          <View style={styles.calorieTextContainer}>
            <Text style={styles.calorieNumber}>{calorieData.caloriesLeft}</Text>
            <Text style={styles.calorieText}>cal left</Text>
            <Text style={styles.consumedText}>{calorieData.caloriesConsumed} consumed</Text>
          </View>
        </View>
        
          
        {renderMealSection('breakfast', isBreakfastOpen, toggleBreakfast)}
        {renderMealSection('lunch', isLunchOpen, toggleLunch)}


      </ScrollView>
      <View style={styles.navbar}>
        {['home', 'person', 'add-circle', 'stats-chart', 'notifications-outline'].map((iconName, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <PrevIcon name={iconName} size={index === 2 ? 40 : 28} color={index === 2 ? '#FF9500' : 'gray'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold'
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#FF9500',
    padding: 4,
    borderRadius: 30,
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  activeTabButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
    
  },
  activeTabText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FF9500',
  },
  calorieCircle: {
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    position: 'relative',
  },
  calorieTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
  },
  calorieNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6347',
    fontFamily: 'Poppins-SemiBold'
  },
  calorieText: {
    fontSize: 18,
    color: 'gray',
    fontFamily: 'Poppins-Regular'
  },
  consumedText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Poppins-Light'
  },
  mealContainer: {
    backgroundColor: '#FFEFD5',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  },
  horizontalRule: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  foodIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  foodName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold'
  },
  foodAmount: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Poppins-Regular'
  },
  foodCalories: {
    marginLeft: 'auto',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold'
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
});

export default DietScreen;