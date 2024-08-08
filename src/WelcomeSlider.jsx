import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Gym1 from '../component/pages/Gym1';
import Gym2 from '../component/pages/Gym2';
import Gym3 from '../component/pages/Gym3';

const slides = [
  {
    key: 'one',
    component: Gym1,
  },
  {
    key: 'two',
    component: Gym2,
  },
  {
    key: 'three',
    component: Gym3,
  },
];

const { width } = Dimensions.get('window');

const WelcomeSlider = () => {
  const _renderItem = ({ item }) => {
    const Component = item.component;
    return <Component />;
  };

  const _renderPagination = (activeIndex) => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      showNextButton={false}
      showDoneButton={false}
      renderPagination={_renderPagination}
      activeDotStyle={styles.activeDot}
    />
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 15,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 25,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fcb045', // Active dot color
  },
});

export default WelcomeSlider;
