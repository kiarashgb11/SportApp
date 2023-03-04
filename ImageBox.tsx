import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const IMAGES = [
  require('./images/soccer.png'),
  require('./images/soccer.png'),
  require('./images/soccer.png'),
  require('./images/soccer.png'),
];

const SquareImageGrid = () => {
  const { width } = Dimensions.get('window');
  const imageSize = width * 0.5 - 20;
  return (
    <View style={styles.container}>
      <Image source={IMAGES[0]} style={[styles.image, { width: imageSize, height: imageSize }]} />
      <Image source={IMAGES[1]} style={[styles.image, { width: imageSize, height: imageSize }]} />
      <Image source={IMAGES[2]} style={[styles.image, { width: imageSize, height: imageSize }]} />
      <Image source={IMAGES[3]} style={[styles.image, { width: imageSize, height: imageSize }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 2,
    flex:0.25,
    padding:0,
  },
});

export default SquareImageGrid;