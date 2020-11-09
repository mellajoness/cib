import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,TouchableOpacity,Image,StatusBar,Text,StyleSheet} from 'react-native';
import Menue from 'react-native-vector-icons/dist/Feather';
import {TEXT_COLOR} from "../../shared/Colors";
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import ApprovedTransfer from "../../components/Transfer/ApprovedTransfer";
import AwaitingTransfer from "../../components/Transfer/AwaitingTransfer";
import PendingTransfer from "../../components/Transfer/PendingTransfer";
import SearchBar from "../../components/SearchBar";


export default class TransferScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{flex:1 ,backgroundColor:'#f8f8f8' }}>
      <View style={{width: '100%'}}>
     <ImageBackground source={require('../../assets/images/kimon-maritz.png')}
           style={{height: 150, width: Dimensions.get('screen').width }} resizeMode='cover'>
               <View style={{flex:1}}>
                 <StatusBar backgroundColor="#184414" barStyle="light-content" />

          <View>  
                 <View style={{ flexDirection:'row',justifyContent:'space-between',paddingTop:15,paddingRight:20,paddingLeft:20 }}>
                   <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
                      <Menue name='menu' size={25} color='white' style={{}}/>
                   </TouchableOpacity>

{/*  
                  <TouchableOpacity>
                  <Image source={require('../../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:30}} />
                  </TouchableOpacity> */}
               </View>

{/* 
                <View style={{alignItems:'flex-end',}}>
                  <View style={{height:16, width:16, borderRadius:16,backgroundColor:'white',borderColor:'#3d5937',justifyContent:'center',alignItems:'center',borderWidth:2,position:'relative',bottom:15,right:10}}>
                  <Text style={{color:'#25801b',fontSize:10,}}>53</Text>
                  </View>
               </View> */}
           </View>
 
             <View style={{flexDirection:'row',paddingLeft:20,paddingTop:15}}>
             <Image source={require('../../assets/icons/transfericonwhite.png')} style={{width: 27, height: 27}} />
                  {/* <Menue name='folder' size={25} color='white' style={{}}/> */}
                  <Text style={{color:'white',fontSize:19,fontWeight:'bold',paddingLeft:10}}>Transfers</Text>
              </View>

              <View style={{flexDirection:'row',paddingLeft:20,paddingTop:10}}>
                  <Text style={{color:'#fff'}}>Fast & Convenient Transfers</Text>
               </View>

              </View>
           </ImageBackground>

           </View>

        <ScrollableTabView
             style={{marginHorizontal:10, }}
             initialPage={0}
             tabBarActiveTextColor={TEXT_COLOR}
             tabBarInactiveTextColor='#c4c4c4'
             tabBarUnderlineStyle={styles.underlineStyle}
             tabBarTextStyle={styles.tabBarTextStyle}
             renderTabBar={() => <DefaultTabBar />}
         >
             <PendingTransfer tabLabel="Pending" navigation= {this.props.navigation} />
             <ApprovedTransfer tabLabel="Approved" navigation= {this.props.navigation} />
             {/* <AwaitingTransfer tabLabel="Awaiting" navigation= {this.props.navigation} /> */}
         </ScrollableTabView> 
              
          </View>
            
    )
  }
} 


const styles = StyleSheet.create({
  underlineStyle: {
    height: 3,
    backgroundColor: '#0c891d',
    borderRadius: 3,
    // width: 15,  
  },

  tabBarTextStyle:{
    fontSize: 15,
    fontWeight: 'bold', 
  }
  
})


