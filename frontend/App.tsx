import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CarouselPage from './components/CarouselPage';
import AppTitle from './components/AppTitle';
import ToggleSwitch from './components/ToggleButton';
import ContinueButton from './components/ContinueButton';

const carouselData = [...new Array(2).keys()];

const title = "Financial coaching and education in your pocket";
const subTitle = "Upgrade to get the most out of Parthean";



const App: React.FC = () => {

  const [isAnnually, setIsAnnually] = useState(false);

  const handleToggleChange = (value: boolean) => {
    setIsAnnually(value);
  };

  const handleContinuePress = () => {
    console.log('pressed');
  };


  return (
    <View style={styles.container}>
      <AppTitle title={title} subtitle={subTitle} />
      <ToggleSwitch onValueChange={handleToggleChange} />
      <CarouselPage data={carouselData} toggle={isAnnually} />
      <ContinueButton onPress={handleContinuePress} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

});

export default App;

