/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainView from './MainView';
import SoccerPage from './SoccerPage'
import PlayerPage from './PlayerPage'
import StatsPage from './StatsPage'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen name="Teams" 
        options={{ 
          headerStyle: { backgroundColor: '#21252e' },
          headerTitleStyle: {color: 'white'}
        }}
        component={SoccerPage}
         />
         <Stack.Screen 
          name = "Players"
          component={PlayerPage}
          options={{ 
            headerStyle: { backgroundColor: '#21252e' },
            headerTitleStyle: {color: 'white'}
          }}
         />
         <Stack.Screen 
          name = "Stats"
          component={StatsPage}
          options={{ 
            headerStyle: { backgroundColor: '#21252e' },
            headerTitleStyle: {color: 'white'}
          }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const HomeScreen = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
  };
  return (

    
    <View style={{backgroundColor:"#181B22", flex:1}}>
    <SafeAreaView style={backgroundStyle}>
      
    </SafeAreaView>
    <MainView navigate={props.navigation.navigate}/>
    </View>
  );
}

export default App;
