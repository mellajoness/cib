import React, { Component } from 'react';
import { Dimensions, View ,ImageBackground,Alert,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,Text,} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import TransferInformation from "../../components/Transfer/TransferInformation";
import TransferApprovalRequired from "../../components/Transfer/ApprovalRequired";


export default class TransferRequestScreen extends Component {
    state = {
        // username:"",
        // password:"",
    };

    goBack(){
        this.props.navigation.navigate('Transfer')
        //  Console.log(this.prop)
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex:1 ,backgroundColor:'#f8f8f8' }}>
                    <View style={{width: '100%'}}>
                        <ImageBackground source={require('../../assets/images/kimon-maritztwo.png')}
                                         style={{height: 115, width: Dimensions.get('screen').width }} resizeMode='cover'>
                            <View style={{flex:1}}>
                                <StatusBar backgroundColor="#184414" barStyle="light-content" />

                                <View style={{paddingRight:30,paddingLeft:20}}>
                                    <View style={{ flexDirection:'row',justifyContent:'space-between',paddingTop:15, }}>
                                        <TouchableOpacity  onPress={()=>this.goBack()}>
                                            <Entypo name='chevron-left' size={25} color='white' style={{}}/>
                                        </TouchableOpacity>

                                        <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Transfer Request</Text>

                                        <TouchableOpacity>
                                            {/* <Image source={require('../../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:30}} /> */}
                                        </TouchableOpacity>
                                    </View>


                                    {/* <View style={{alignItems:'flex-end',}}>
                                        <View style={{height:16, width:16, borderRadius:16,backgroundColor:'white',borderColor:'#3d5937',justifyContent:'center',alignItems:'center',borderWidth:2,position:'relative',bottom:15,left:10}}>
                                            <Text style={{color:'#25801b',fontSize:10,}}>53</Text>
                                        </View>
                                    </View> */}
                                </View>   

                            </View>
                        </ImageBackground>

                    </View>


                    <View>
                        <View style={{paddingLeft:15,paddingRight:15,position:'relative',bottom:50 }}>
                            <TransferInformation/>
                        </View>

                        <View style={{paddingLeft:15,paddingRight:15,position:'relative',bottom:30 }}>
                            <TransferApprovalRequired navigation= {this.props.navigation}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }}