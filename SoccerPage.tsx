import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import { useNavigation , useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image, 
  Dimensions, 
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const IMAGES = [
//   {imageUri: require('./images/PL.png')
//   ,backgroundColor: 'red'},
//   require('./images/LaLiga.png'),
//   require('./images/SerieA.png'),
//   require('./images/Ligue1.png'),
// ];

// import MainView from './MainView';

// const SoccerPage = () => {
//     const isDarkMode = useColorScheme() === 'dark';
  
//     const backgroundStyle = {
//       backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
//     };
//     return (
  
      
//       <View style={{backgroundColor:"#181B22", flex:1}}>  
//       <LeaguesGrid />
//       </View>
      
//     );
//   }

//   const LeaguesGrid = (props: any) => {
//     const { width} = Dimensions.get('window');
//     const imageSize = width * 0.5 - 20;
//     const navigation = useNavigation();
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => navigation.navigate("Leagues")} >
//           <Image source={IMAGES[0]}  style = {{width: imageSize, height: imageSize}}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
//           <Image source={IMAGES[1]}  style = {{width: imageSize, height: imageSize }}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
//           <Image source={IMAGES[2]}  style = {{width: imageSize, height: imageSize }}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={ [ styles.image, {width: imageSize, height: imageSize }]} onPress={() => Try()}>
//           <Image source={IMAGES[3]}  style = {{width: imageSize, height: imageSize }}/>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center',
      
//       paddingBottom:25,
//     },
//     image: {
//       margin: 2,
//       flex:0.25,
//       padding:0,
//     },
//   });



const IMAGES = [
  {
    imageUri: require('./images/PL.png'),
    backgroundColor: '#1CE200',
    text: 'Premier League',
    onPress: () => console.log('Image 1 clicked')
    
  },
  {
    backgroundColor: '#1CE200',
    imageUri: require('./images/LaLiga.png'),
    onPress: () => console.log('Image 2 clicked')
  },
  {
    imageUri: require('./images/NewProject(1).png'),
    backgroundColor: '#1CE200',
    onPress: () => console.log('Image 3 clicked')
  },
  {
    imageUri: require('./images/Bundesliga.png'),
    backgroundColor: '#1CE200',
    onPress: () => console.log('Image 4 clicked')
  },
  {
    imageUri: require('./images/SerieA.png'),
    backgroundColor: '#1CE200',
    onPress: () => console.log('Image 5 clicked')
  }
];

const SoccerPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute()
  console.log(route.params);
  useEffect(() => {
  fetch('https://api.football-data.org/v4/competitions/' + route.params.league + '/standings', {
  method: 'GET',
  headers: {
    'X-Auth-Token': '02ca5ad60fff4b9c81aa6163f6f4ae09'
  },
}).then(response => response.json())
.then(json => {
  setData(json.standings[0].table);
  setLoading(false);
  // for (let i =0; i<20; i++) {
  //   (json.standings[0].table[i].team.name);
  // }
  
})
.catch((error) => {
  console.error('Error fetching data:', error);
  setLoading(false);
});
}, []);


    // return (
    //   <View style={styles.container}>
    //     {t.map((ti) => (
    //       <TouchableOpacity key={index} onPress={image.onPress}>
    //         <View style={[styles.imageContainer, { backgroundColor: image.backgroundColor }]}>
    //           <Image source={image.imageUri} style={styles.image} />
    //         </View>
    //       </TouchableOpacity>
    //     ))}
    //   </View>
      
    // );

    return (
      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.listItem}>
            {data.map((item) => (
              <Text key={item.id}>{item.team.name}</Text>
            ))}
          </View>
        )}
      </View>
    );
  

  // return (
    
  //   <View style={styles.container}>
  //     {IMAGES.map((image, index) => (
  //       <TouchableOpacity key={index} onPress={image.onPress}>
  //         <View style={[styles.imageContainer, { backgroundColor: image.backgroundColor }]}>
  //           <Image source={image.imageUri} style={styles.image} />
  //         </View>
  //       </TouchableOpacity>
  //     ))}
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#181B22',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:7,  
  },
  listItem: {
    width: 400,
    height: 400,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SoccerPage;
