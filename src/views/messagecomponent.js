import React, { Component } from 'react';
import { Dimensions,Alert, View ,ImageBackground,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,Text,} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import Message from '../views/Message'
import Profile from '../views/Profile'
import AwaitingTransfer from '../components/Transfer/AwaitingTransfer'


export default class MessageComponent extends Component {

   
  render(){
    return (
           

       <View >
        <View style={{height: 60, width: Dimensions.get('screen').width,backgroundColor:'#4fc143',justifyContent:'center' }} >
           <View style={{flex:1}}>
             <StatusBar backgroundColor="#184414" barStyle="light-content" />

             <View style={{paddingRight:30,paddingLeft:20}}>
               <View style={{ flexDirection:'row',justifyContent:'space-between',paddingTop:15, }}>
               <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
                  <Entypo name='menu' size={30} color='white' style={{}}/> 
               </TouchableOpacity>
           
           <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Messages</Text>
                
              <TouchableOpacity>
              {/* <Image source={require('../assets/images/FROSH.jpg')} style={{width: 30, height: 30,borderRadius:30}} /> */}
              </TouchableOpacity>
           </View>
           
         
            {/* <View style={{alignItems:'flex-end',}}>
              <View style={{height:16, width:16, borderRadius:16,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderWidth:1,position:'relative',bottom:15,left:10,borderColor:'#4fc143'}}>
              <Text style={{color:'#4fc143',fontSize:10,}}>53</Text>
              </View>
           </View> */}
         </View>
          </View> 
       </View>
       <Message />
             {/* <Profile /> */}
       {/* <AwaitingTransfer/> */}
       </View>
    );
  }}