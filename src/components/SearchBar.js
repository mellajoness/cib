import React, { Component } from 'react';
import {View ,TextInput,Text} from 'react-native';
import Menue from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Anticon from 'react-native-vector-icons/dist/AntDesign';

export default class SearchBar extends Component {
  render() {
    return (
   
      <View style={{height: 50, flexDirection: 'row', width: '100%', backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: 10}}>
       <Menue name='search' size={18 } color='#3a3a3a'/> 
      <TextInput
        placeholder='Search'
        placeholderTextColor='gray'
        style={{flex: 1, marginHorizontal: 5}}
      />
 
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{paddingRight:7,paddingTop:1}}>
           <FontAwesome name='filter' size={17} color='#d3d3d3'/>
           </View>
           <View style={{paddingRight:7}}>
             <Text style={{color:'#595959',fontSize:11}}>Status</Text>
             </View>
         <View style={{paddingTop:2}}>
         <Anticon name='caretdown' size={10} color='#d8d8d8'/>
         </View>
      </View> 
    </View>
    );
  }}


