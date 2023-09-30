import React from 'react';
import {View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import SoccerPage from './SoccerPage';
import { useNavigation } from '@react-navigation/native';


const IMAGES = [
  
  {
    imageUri: require('./images/PL.png'),
    backgroundColor: '#EBBC00',
    onPress: () => console.log('Image 1 clicked'),
    place: "Leagues",
    name:"PL"
    
  },
  {
    backgroundColor: '#EBBC00',
    imageUri: require('./images/LaLiga.png'),
    onPress: () => console.log('Image 2 clicked'),
    place: "Leagues",
    name:"PD"
  },
  {
    imageUri: require('./images/SerieA.png'),
    backgroundColor: '#EBBC00',
    onPress: () => console.log('Image 5 clicked'),
    place: "Leagues",
    name:"SA"
  }
];

const SquareImageGrid = (props: any) => {

  const navigation = useNavigation();
  
  return (

    <View style={styles.container}>
      {IMAGES.map((image, index) => (
        <TouchableOpacity key={index} onPress={()=>navigation.navigate(image.place, {league:image.name})}>
          <View style={[styles.imageContainer, { backgroundColor: image.backgroundColor }]}>
            <Image source={image.imageUri} style={styles.image} />
            
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#181B22',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
    
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius:7,  
  }
});
//   const { width} = Dimensions.get('window');
//   const imageSize = width * 0.5 - 20;
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => navigation.navigate("Leagues")} >
//         <Image source={IMAGES[0]}  style = {{width: imageSize, height: imageSize}}/>
//       </TouchableOpacity>
//       <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
//         <Image source={IMAGES[1]}  style = {{width: imageSize, height: imageSize }}/>
//       </TouchableOpacity>
//       <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
//         <Image source={IMAGES[2]}  style = {{width: imageSize, height: imageSize }}/>
//       </TouchableOpacity>
//       <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
//         <Image source={IMAGES[3]}  style = {{width: imageSize, height: imageSize }}/>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom:25,
//   },
//   image: {
//     margin: 2,
//     flex:0.25,
//     padding:0,
//   },
// });

export default SquareImageGrid;