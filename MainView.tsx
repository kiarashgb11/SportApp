import React, {useState} from 'react';
import {
    
    Image,
    Text,
    View,
  } from 'react-native';
import SquareImageGrid from './ImageBox'

const SearchBar = () => {
    return;
}
const MainImages = () => {
    return(<SquareImageGrid/>);
    return (
<Image style={{width:"50%",
 height:"50%", flex:1, paddingLeft: 10,
 resizeMode:'contain', position:'absolute', top:0}} source={require("./images/soccer.png")}/>
    );
}

const MainView = () => {
    return(
    <View style={{backgroundColor:'#181', flex:1, }}>
      <View  style={{backgroundColor:'#A76B09', flex:0.07,}}></View>
      <View  style={{backgroundColor:'#181B22', flex:0.93,}}><MainImages/></View>
    </View>);
  }

  export default MainView;
