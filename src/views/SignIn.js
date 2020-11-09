import React, { Component } from 'react';

import { Text, View ,ImageBackground,TextInput,TouchableOpacity,Image,StatusBar,ScrollView, Alert,ToastAndroid, InteractionManager} from 'react-native';
import {POST_SERVICE} from "../shared/Backend";
import {CustomLoader} from "../components/General/CustomLoader" ;
import {SAVE_SESSION_ID, SAVE_FULL_NAME, SAVE_FIRST_NAME} from "../shared/Storage";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from "react-native-vector-icons/dist/Entypo";
import DeviceInfo from 'react-native-device-info';
export default class SignIn extends Component {
    state = {
        userName:'',
        customerID:'',
        passWord:'',
        secureTextEntry:true,    
        loading: false,
        deviceId: '',
    };

    async componentDidMount()
    {
        await SAVE_SESSION_ID('')
       
    }
 
    showPassword = () => {
        this.setState({
            secureTextEntry:!this.state.secureTextEntry
        });
    };



    // getdeviceId = () => {
    //     //Getting the Unique Id from here
    //     const uniqueid = DeviceInfo.getUniqueId();
    //     this.setState({ deviceId: uniqueid, });  
    //     Alert.alert(uniqueid)
    //   };


    
    login = async () => {
        const uniqueid = DeviceInfo.getUniqueId();
        this.setState({ deviceId: uniqueid, });  
        this.setState({loading: true});
        const body = {
            userName: this.state.userName + ":" + this.state.customer_ID,
            passWord: this.state.passWord,
            uniqueid:this.state.deviceId
        };
        console.log('my  body',body)
        const endpoint = '/user/signin';

        try {
            const response = await POST_SERVICE(body, endpoint);
            console.log('signin', response);
            this.setState({loading: false});
            if(response.data.code === '00')
            {
                this.saveUserDetail(response);
            }
            else
            {
                InteractionManager.runAfterInteractions(() => {
                    setTimeout(() => {
                        Alert.alert('Login Error', response.data.message);
                    });
                });
            }
        } catch (e) {
            this.setState({loading: false});
            InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {
                    Alert.alert('Login Error', "Error occurred while trying to login. Kindly check your internet connection.");
                });
            });
            return e.response;
        }
    };

    async saveUserDetail(resp){
        await SAVE_SESSION_ID(resp.data.data.token);
      const n=  await SAVE_FIRST_NAME(resp.data.data.firstName);
        await SAVE_FULL_NAME(`${resp.data.data.firstName} ${resp.data.data.lastName}`)
        this.props.navigation.navigate('Drawer');
    }

  render() {
    return (
        
        <ImageBackground source={require('../assets/images/adeolu-eletu-134758-unsplash.png')}
                         style={{width: '100%', height: '100%'}}>
            <View style={{flex:1,  backgroundColor: 'rgba(rgba(0, 30, 0, 0.6))'}}>
                <StatusBar backgroundColor='rgba(rgba(0, 30, 0, 0.6))' barStyle="light-content" />
                <View style={{marginLeft:30,marginRight:30,marginTop:40}}>  
                    <ScrollView>
                        <Image source={require('../assets/images/Shape.png')} style={{width: 30, height: 30}} />
                        <Text style={{color:'white', fontSize:30 , fontWeight:'bold', marginTop:60}}>Sign In </Text>
                        <Text style={{color:'white', fontSize:15 , fontWeight:'bold', marginTop:15,}}>Welcome to Heritage Bank Corporate Request Portal</Text>

                        <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                            <TextInput style={{flex:1,height: 50,color:'white',paddingLeft:20,backgroundColor:'#979797',borderRadius:2,borderRightColor:'#979797'}}
                                       onChangeText={(userName) => this.setState({userName})}
                                       placeholder='Username'
                                       placeholderTextColor='white'/>
                        </View>  

                        <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                            <TextInput style={{flex:1,height: 50,color:'white',paddingLeft:20,backgroundColor:'#979797',borderRadius:2,borderRightColor:'#979797'}}
                                       onChangeText={(customer_ID) => this.setState({customer_ID})}
                                       placeholder='Company ID'
                                       placeholderTextColor='white'/>
                        </View>

                        <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',backgroundColor:'#979797',paddingRight:20,paddingLeft:15}}>
                                <TextInput style={{flex:1,height: 50,color:'white',backgroundColor:'#979797',borderRadius:2,borderRightColor:'#979797'}}
                                           onChangeText={(passWord) => this.setState({passWord})}
                                           placeholder='Password'
                                           placeholderTextColor='white'
                                           secureTextEntry={this.state.secureTextEntry}/>

                                <TouchableOpacity onPress={this.showPassword}>
                                    <Ionicons name='ios-finger-print' size={25} color='white' style={{}}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{paddingTop:20,}}>
                            <TouchableOpacity
                                onPress= {this.login}
                                style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >
                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                    <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>Login</Text>
                                    <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                </View>
                            </TouchableOpacity>
                        </View>




                        
                        {/* <View style={{paddingTop:20,}}>
                            <TouchableOpacity
                                onPress= {this.getdeviceId}
                                style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >
                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                    <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>device info id</Text>
                                    <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                </View>
                            </TouchableOpacity>
                        </View> */}

                    </ScrollView>
                </View>
                {/* <ActivityIndicator size="large" color="#4fc143"  visible={this.state.loading} /> */}
                  <CustomLoader visible={this.state.loading}/> 
            </View>
        </ImageBackground>
    );
  
}}  
