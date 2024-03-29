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


const PlayerPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute()
  console.log(route.params);
  useEffect(() => {
  fetch('https://api.football-data.org/v4/teams/' + route.params.teamId, {
  method: 'GET',
  headers: {
    'X-Auth-Token': '02ca5ad60fff4b9c81aa6163f6f4ae09'
  },
}).then(response => response.json())
.then(json => {
  var l = json.squad;
  setData(l);
  setLoading(false);
  // for (let i =0; i<20; i++) {
  //    console.log((json.squad[i]));
  // }
  
})
.catch((error) => {
  console.error('Error fetching data:', error);
  setLoading(false);
});
}, []);

  const navigation = useNavigation();
    return (
      
      <View style={{ backgroundColor:"#181B22", height:"100%"}}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (

          
          <ScrollView  >
            {data.map((item, i) => (
              <View style={styles.listContainer} key={item.id}>
                <Text 
                onPress={()=>navigation.navigate("Stats", {playerId:item.id})}
                style={styles.listName}>{item.name}</Text>
              </View>
              
            ))}
          </ScrollView>
        )}
      </View>
    );
  

};

const styles = StyleSheet.create({
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
    width: '100%',
    color: '#DDDDDD',
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
    paddingVertical: 2.2,
    paddingHorizontal: 5,
    
    
    
    
  },
  listContainer:{
    
   
    borderWidth: 1,
    borderRadius:6, 
    marginBottom: 5,
    borderColor: '#EBBC00',
    width: "100%",
    alignSelf: "center",
  
    
  }

});

export default PlayerPage;