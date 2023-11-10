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


const StatsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute()
  console.log(route.params);
  useEffect(() => {
  fetch('https://api.football-data.org/v4/persons/' + route.params.playerId + '/matches?limit=10', {
  method: 'GET',
  headers: {
    'X-Auth-Token': '02ca5ad60fff4b9c81aa6163f6f4ae09'
  },
}).then(response => response.json())
.then(json => {
  var l = json;
//   l.unshift({"team":{"name": "Teams"}, "won": "W", "draw": "D", "lost":"L", "goalsFor":"GF", "goalsAgainst":"GA", "points":"P"});
  setData(l);
  setLoading(false);
  for (let i =0; i<20; i++) {
     console.log((json.matches[0].odds));
  }
  
})
.catch((error) => {
  console.error('Error fetching data:', error);
  setLoading(false);
});
}, []);


    return (
      
      <View style={{ backgroundColor:"#181B22", height:"100%"}}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (

          
          <ScrollView  >
           <Text style={styles.listName}>The last component of this app, requires access to a paid API. Due to budget constraints, we were unable to integrate this component into the public version available on GitHub. If you'd like to experience the full 
            functionality of the app, please contact us for a demonstration.</Text>
          </ScrollView>
        )}
      </View>
    );
  

};

const styles = StyleSheet.create({
  listName: {
    width: '100%',
    color: '#DDDDDD',
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
    paddingVertical: 2.2,
    paddingHorizontal: 5,
    alignContent: "center",
    
    
    
    
  },

});

export default StatsPage;