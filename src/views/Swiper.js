import React, { Component } from 'react';
import { StyleSheet,Text,View,Image,ImageBackground ,TouchableOpacity,StatusBar,Alert} from 'react-native';
import Entypo from "react-native-vector-icons/dist/Entypo";
import Swiper from 'react-native-swiper';

export default class SwiperScreen extends Component {

    render(){
        return (
            <ImageBackground source={require('../assets/images/mitya-ivanov-1449972-unsplash.png')}style={{width: '100%', height: '100%'}}>
                <StatusBar backgroundColor='rgba(rgba(0, 30, 0, 0.6))' barStyle="light-content" />
                <Swiper style={styles.wrapper} autoplay={true}
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
                        activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
                        showsButtons={false}  bounces={true}>

                    <View style={styles.slide1}>
                        <View style={{alignItems:'center',paddingRight:20,paddingTop:40}}>
                            <Image source={require('../assets/images/Shape.png')} style={{width: 45, height: 40}} />
                        </View>
                        <View style={{flex: 1, alignItems: 'center',paddingTop:140}}>
                            <Text style={styles.text}>Review Requests</Text>  
                            <Text style={{color:'white',fontWeight:'bold',paddingTop:10}}>Quickly review  transfer and </Text>
                            <Text style={{color:'white',fontWeight:'bold',paddingTop:0}}> cheque requests easily</Text>

                            <View style={{width:'80%',paddingTop:70}}>
                                <TouchableOpacity  onPress= {() => this.props.navigation.navigate('SignIn')}
                                                   style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >
                                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                        <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>Get Started</Text>
                                        <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.slide1}>
                        <View style={{alignItems:'center',paddingRight:20,paddingTop:40}}>
                            <Image source={require('../assets/images/Shape.png')} style={{width: 45, height: 40}} />
                        </View>
                        <View style={{flex: 1, alignItems: 'center',paddingTop:140}}>
                            <Text style={styles.text}>Review Requests</Text>
                            <Text style={{color:'white',fontWeight:'bold',paddingTop:10}}>Approve requests on the go</Text>

                            <View style={{width:'80%',paddingTop:80}}>
                                <TouchableOpacity   onPress= {() => this.props.navigation.navigate('SignIn')}
                                                    style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >
                                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                        <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>Get Started</Text>
                                        <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.slide1}>
                        <View style={{alignItems:'center',paddingRight:20,paddingTop:40}}>
                            <Image source={require('../assets/images/Shape.png')} style={{width: 45, height: 40}} />
                        </View>
                        <View style={{flex: 1, alignItems: 'center',paddingTop:140}}>
                            <Text style={styles.text}>Review Requests</Text>
                            <Text style={{color:'white',fontWeight:'bold',paddingTop:10}}>Save time</Text>

                            <View style={{width:'80%',paddingTop:80}}>
                                <TouchableOpacity onPress= {() => this.props.navigation.navigate('SignIn')}
                                                  style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >
                                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                        <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>Get Started</Text>
                                        <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.slide1}>
                        <View style={{alignItems:'center',paddingRight:20,paddingTop:40}}>
                            <Image source={require('../assets/images/Shape.png')} style={{width: 45, height: 40}} />
                        </View>
                        <View style={{flex: 1, alignItems: 'center',paddingTop:140}}>
                            <Text style={styles.text}>Review Requests</Text>
                            <Text style={{color:'white',fontWeight:'bold',paddingTop:10}}>Easy to use</Text>

                            <View style={{width:'80%',paddingTop:80}}>
                                <TouchableOpacity    onPress= {() => this.props.navigation.navigate('SignIn')}
                                                     style={{backgroundColor:'#4fc143',height:50,borderRadius:3}} >
                                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingTop:15}}>
                                        <Text style={{color:'white',alignItems:'center',fontSize:16,fontWeight:'bold'}}>Get Started</Text>
                                        <Entypo name='chevron-with-circle-right' size={20} color='white' style={{}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Swiper>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        backgroundColor: 'rgba(rgba(0, 30, 0, 0.7))',

        //   justifyContent: 'center',
        //   alignItems: 'center',
        //
    },


    // slide2: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#97CAE5',
    // },
    // slide3: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#92BBD9',
    // },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})