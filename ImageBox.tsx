import React from 'react';
import {View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import SoccerPage from './SoccerPage';
import { useNavigation } from '@react-navigation/native';

const IMAGES = [
  require('./images/soccer.png'),
  require('./images/Basketball.png'),
  require('./images/Hockey.png'),
  require('./images/UFC1.png'),
];

const SquareImageGrid = (props: any) => {
  const { width} = Dimensions.get('window');
  const imageSize = width * 0.5 - 20;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => navigation.navigate('Profile')}>
        <Image source={IMAGES[0]}  style = {{width: imageSize, height: imageSize }}/>
      </TouchableOpacity>
      <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
        <Image source={IMAGES[1]}  style = {{width: imageSize, height: imageSize }}/>
      </TouchableOpacity>
      <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
        <Image source={IMAGES[2]}  style = {{width: imageSize, height: imageSize }}/>
      </TouchableOpacity>
      <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
        <Image source={IMAGES[3]}  style = {{width: imageSize, height: imageSize }}/>
      </TouchableOpacity>
    </View>
  );
};

const Try = () => {
   console.log("Hello");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:25,
  },
  image: {
    margin: 2,
    flex:0.25,
    padding:0,
  },
});

export default SquareImageGrid;