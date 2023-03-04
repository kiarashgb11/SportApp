import React, {useState} from 'react';
import {
    LayoutAnimation,
    Image,
    Text,
    View,
  } from 'react-native';
import SquareImageGrid from './ImageBox'

import SearchBar from 'react-native-platform-searchbar';
const Search = () => {
    const [value, setValue] = useState('');
    const [size, setSize] = useState(20);
    
    return(<SearchBar
        //onPressIn={() => setSize("100%")}
        onFocus={() => setSize(100)}
        onBlur ={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setSize(20)}}
        value={value}
        onChangeText={setValue}
        theme={'dark'}
        platform={'ios'}
        style={{width:size+'%'}}
        inputStyle={{backgroundColor:'#946020', opacity:100}}
    />);
};
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
      <View  style={{backgroundColor:'#181B22', flex:0.07, justifyContent:'center'}}><Search/></View>
      <View  style={{backgroundColor:'#181B22', flex:0.93,}}><MainImages/></View>
    </View>);
  }

  export default MainView;
