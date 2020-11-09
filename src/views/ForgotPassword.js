import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native';
import Entypo from "react-native-vector-icons/dist/Entypo";
import {CustomLoader} from "../components/General/CustomLoader";
import {POST_SERVICE} from "../shared/Backend";
// import { white } from 'ansi-colors';
// import Power from 'react-native-vector-icons/dist/Feather';
export default class ForgotPassword extends Component {

    state = {
        secureTextEntry:true,
        iconName:"eye",
        emailAddress: '',
        loading: false,
    };

    forgotPasswordButton = async () => {
        // this.setState({loading: true});

        const body = {
            emailAddress: this.state.emailAddress,
        };

        const endpoint = '/user/signin';

        this.props.navigation.navigate('OtpConfirmation');

        // try {
        //     console.log('body', body)
        //     const response = await POST_SERVICE(body, endpoint);
        //     console.log('signin', response);
        //
        //     this.setState({loading: false});
        //
        //     if(response.data.code === '00')
        //     {
        //         this.props.navigation.navigate('OtpConfirmation');
        //     }
        //     else
        //     {
        //         Alert.alert('Failed', response.data.message);
        //     }
        // } catch (e) {
        //     return e.response;
        // }
    };

  render() {  
    return (
      <ImageBackground source={require('../assets/images/joel-filipe-207435-unsplash.png')}
            style={{width: '100%', height: '100%',}}>
               <StatusBar backgroundColor="#184414" barStyle="light-content" />
               <View style={{flex:1, backgroundColor: 'rgba(0,30,0,0.4)'}}>
                  <View style={{marginLeft:30,marginRight:30,marginTop:40}}>
                    <ScrollView>
                        <Image source={require('../assets/images/Shape.png')} style={{width: 30, height: 30}} />
                         <Text style={{color:'white', fontSize:25 , fontWeight:'bold', marginTop:60}}>Forgot Password </Text>
                         <Text style={{color:'white', fontSize:15 , marginTop:15}}>Provide Email Address</Text>

                         <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                              <TextInput style={{flex:1,height: 50,color:'white',paddingLeft:20,backgroundColor:'#979797',borderRadius:2,borderRightColor:'#979797'}}
                                   placeholder='Email Address'
                                   placeholderTextColor='white'
                                   keyboardType='email-address'
                                   onChangeText={(emailAddress) => this.setState({emailAddress})}/>
                         </View>

                        <View style={{paddingTop:20,}}>
                            <TouchableOpacity onPress={this.forgotPasswordButton}
                               style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >

                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                    <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>Next</Text>
                                    <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                </View>
                            </TouchableOpacity>
                       </View>

                    </ScrollView>
                </View>

                   <CustomLoader visible={this.state.loading}/>
               </View>
      </ImageBackground>


    );
  }
}
