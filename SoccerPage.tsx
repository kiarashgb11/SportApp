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
  var l = json.standings[0].table;
  l.unshift({"team":{"name": "Teams"}, "won": "W", "draw": "D", "lost":"L", "goalsFor":"GF", "goalsAgainst":"GA", "points":"P"});
  setData(l);
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
      <View style={{backgroundColor:"#181B22", height:"100%"}}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View >
            {data.map((item, i) => (
              <View  style={styles.listContainer} key={item.id}>
                <Text style={i!==0 ? styles.listWon : styles.listWonH}>{i}</Text>
                <Text style={i!==0 ? styles.listName : styles.listNameHeading}>{item.team.name}</Text>
                <Text style={i!==0 ? styles.listWon : styles.listWonB}>{item.won}</Text>
                <Text style={i!==0 ? styles.listWon : styles.listWonB}>{item.draw}</Text>
                <Text style={i!==0 ? styles.listWon : styles.listWonB}>{item.lost}</Text>
                <Text style={i!==0 ? styles.listWon : styles.listWonB}>{item.goalsFor}</Text>
                <Text style={i!==0 ? styles.listWon : styles.listWonB}>{item.goalsAgainst}</Text>
                <Text style={i!==0 ? styles.listWon : styles.listWonB}>{item.points}</Text>

                </View>
              
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
  listNameHeading: {
    width: 160,
    color: '#ffffff',
    marginTop: 4,
    marginBottom: -4,
    paddingHorizontal: 5,
    fontWeight: "bold",
    fontSize: 18,  
  },
  listName: {
    width: 160,
    color: '#DDDDDD',
 
    borderColor: '#EBBC00',
    borderWidth: 1,
    borderRadius:6, 
    marginBottom: 5,
    marginTop: 5,
    paddingVertical: 2.2,
    paddingHorizontal: 5,
    
    
  },
  listContainer:{
    flexDirection: "row",
    justifyContent:"space-between",
    width:'100%',
    
    
  },
  listWon: {
    color: '#DDDDDD',
    width: 32,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    
    alignSelf: "center",
    
    
  },
  listWonH: {
    color: '#181B22',
    width: 32,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    
    alignSelf: "center",
    
    
  },
  listWonB: {
    color: '#ffffff',
    width: 32,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 14,  
    
    
  },

});

export default SoccerPage;
