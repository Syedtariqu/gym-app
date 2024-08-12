import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function Diet() {
    const [selectedTab, setSelectedTab] = useState('Today');
    const [breakfastOpen, setBreakfastOpen] = useState(false);
    const [lunchOpen, setLunchOpen] = useState(false);


    const handlePress = (name) => {
        console.log(`${name} pressed`);
    };

    // Example calorie data
    const totalCalories = 2336;
    const consumedCalories = 206;

    // Calculate the percentage of calories consumed
    const percentageConsumed = (consumedCalories / totalCalories) * 100;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Header */}
                <View style={styles.header}>
                    <Icon name="chevron-left" size={30} color="#000" />
                    <Text style={styles.title}>Today's diet</Text>
                    <Image
                        source={require('../../assets/image/profile.png')} // Replace with your image path
                        style={styles.profileImage}
                    />
                </View>

                {/* Date Selector */}
                <View style={styles.tabsContainer}>
                    {['Yesterday', 'Today', 'Tomorrow'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, selectedTab === tab && styles.activeTab]}
                            onPress={() => setSelectedTab(tab)}
                        >
                            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Calorie Meter */}
                <View style={styles.containerRound}>
                    <AnimatedCircularProgress
                        size={250}
                        width={20}
                        fill={percentageConsumed}
                        tintColor="#333"
                        backgroundColor="#f0cbbf"
                        rotation={0}
                        lineCap="round"
                    >
                        {() => (
                            <View style={styles.calorieInfo}>
                                <Text style={styles.calLeft}>{totalCalories - consumedCalories}</Text>
                                <Text style={styles.calLeftLabel}>cal left</Text>
                                <Text style={styles.consumed}>{consumedCalories}</Text>
                                <Text style={styles.consumedLabel}>consumed</Text>
                            </View>
                        )}
                    </AnimatedCircularProgress>
                </View>


                <View style={styles.mealContainer}>
                <TouchableOpacity style={styles.mealSection} onPress={()=>setBreakfastOpen(!breakfastOpen)} >
                    <Text style={styles.mealTitle}>Breakfast : 186 cal</Text>
                    <Icon name={breakfastOpen ? 'chevron-down' : 'chevron-right'} size={26} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.mealSection} onPress={()=>setLunchOpen(!lunchOpen)} >
                    <Text style={styles.mealTitle}>Lunch : 388 cal</Text>
                    <Icon name={lunchOpen ? 'chevron-down' : 'chevron-right'} size={26} color="#000" />
                
                </TouchableOpacity>
                {lunchOpen && (
                        <View style={styles.lunchItems}>
                            <View style={styles.lunchItem}>
                                <View style={styles.itemIcon}>
                                    <Icon name="circle" size={30} color="#F28E1C" />
                                </View>
                                <View style={styles.itemDetails}>
                                    <Text style={styles.itemName}>White rice</Text>
                                    <Text style={styles.itemMeasure}>25 Teaspoons</Text>
                                </View>
                                <Text style={styles.itemCal}>123</Text>
                            </View>
                            <View style={styles.lunchItem}>
                                <View style={styles.itemIcon}>
                                    <Icon name="circle" size={30} color="#F28E1C" />
                                </View>
                                <View style={styles.itemDetails}>
                                    <Text style={styles.itemName}>Fish curry</Text>
                                    <Text style={styles.itemMeasure}>1.5 cups</Text>
                                </View>
                                <Text style={styles.itemCal}>182</Text>
                            </View>
                            <View style={styles.lunchItem}>
                                <View style={styles.itemIcon}>
                                    <Icon name="circle" size={30} color="#F28E1C" />
                                </View>
                                <View style={styles.itemDetails}>
                                    <Text style={styles.itemName}>Egg omelette</Text>
                                    <Text style={styles.itemMeasure}>1 serving</Text>
                                </View>
                                <Text style={styles.itemCal}>80</Text>
                            </View>
                        </View>
                    )}
             
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
  scrollViewContent: {
    minHeight: '100%', // Ensures it takes at least the full height
    paddingBottom: 100, // To provide padding at the bottom
},

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d5801c',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
        marginVertical: 20,
        backgroundColor: '#ff8c00',
        borderRadius: 30,
        padding: 5,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: 'transparent',
    },
    activeTab: {
        backgroundColor: '#fff',
    },
    tabText: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#000',
    },
    containerRound: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calorieInfo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    calLeft: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
    },
    calLeftLabel: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
    },
    consumed: {
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 20,
    },
    consumedLabel: {
        fontSize: 15,
        color: '#000',
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
        height: 60,
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


mealSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0cbbf',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,

    // Shadow for iOS
    shadowColor: '#000',
    shadowRadius: 6,   // Decrease the radius for a more subtle shadow
    shadowOpacity: 0.1, // Lower the opacity for a softer shadow
    shadowOffset: { width: 0, height: 2 }, // Center the shadow more directly under the box

    // Elevation for Android
    elevation: 4, // Increase the elevation slightly for a better effect on Android
},

    mealTitle:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
    },

    lunchItems: {
        marginHorizontal: 20,
        // marginTop: 10,
        backgroundColor: '#FFE6DB',
        borderRadius: 10,
        // paddingVertical: 8,
    },
    lunchItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#FFC4AD',
    },
    itemIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    itemMeasure: {
        fontSize: 14,
        color: '#FF7052',
    },
    itemCal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});
