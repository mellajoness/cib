import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView,Text} from 'react-native';
import {LIGHTER_COLOR} from './shared/Colors';
import LinearGradient from "react-native-linear-gradient";
import {BoldText, RegularText} from "./components/General";
import {GET_FIRST_NAME,CLEAR_SESSION_ID} from "./shared/Storage";
import {logoutUser} from "./store/actions";
import {connect} from "react-redux";

class Drawer extends Component {

    state = {
        first_name: ''
    };

    async componentDidMount()
    {
        const first_name = await GET_FIRST_NAME();

        this.setState({first_name: first_name});

    }

    _navigate(pageName) { 
        this.props.navigation.navigate(pageName);
        this.props.navigation.closeDrawer();
        // this.props.activateActiveComponent(pageName);
    }

   async logoutButton() {
        this.props.logoutUser(true);
    }

    render() {

        return (
            <LinearGradient colors={[  '#4fc143', '#0c891d' ]} style={{flex:1}} >
                <ScrollView>
                    <View>

                        <SafeAreaView >
                            <View>
                                <View style={{alignItems:'flex-end',paddingRight:20,paddingTop:20}}>
                                    <Image source={require('./assets/images/Shape.png')} style={{width: 30, height: 30}} />
                                </View>

                                {/*
                <PhotoUpload
                  onPhotoSelect={avatar => {
                  if (avatar) {
                  console.log('Image base64 string: ', avatar)
                            } }}> */}

                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./assets/images/user.png')} style={{width:90, height: 90,borderRadius:90, borderColor:'white',borderWidth:0}} />
                                    {/* <View style={{height:25,width:25,borderRadius:25,backgroundColor:'green',alignItems:'center',justifyContent:'center',position:'relative',bottom:30,
                }}>
                    {/* <Entypo name='edit' size={15} color='white' style={{}}/>  */}
                                    {/* </View> */}
                                    {/* </PhotoUpload>  */}

                                </View>
                            </View>


                            <View >

                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingTop:10}}>{this.state.first_name}</Text>
                                </View>

                                <View style={{marginHorizontal:90,borderRadius:5,paddingTop:10}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(rgba(9, 62, 17, 0.48))',borderRadius:10}}>
                                        <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>Authorizer</Text>
                                    </View>
                                </View>


                                <View style ={{marginTop:23}}>
                                    <TouchableOpacity style={styles.row} onPress={() => this._navigate('Profile')}>
                                        <Image source={require('./assets/icons/user-person-avtar-profile-picture-dp.png')} style={{width: 25, height:25, }} />
                                        <RegularText label='Profile' size={17} color={LIGHTER_COLOR}
                                                     style={{marginLeft: 50}}/>
                                    </TouchableOpacity>

                                    <View style={{borderColor:'gray',borderWidth:0.2,marginTop:0}}/>
                                    {/* <Divider/> */}

                                    <TouchableOpacity style={styles.row} onPress={() => this._navigate('Transfer')}>
                                        <Image source={require('./assets/icons/money.png')} style={{width: 27, height:18, }} />
                                        <RegularText label='Transfers' size={17} color={LIGHTER_COLOR}
                                                     style={{marginLeft: 45}}/>
                                    </TouchableOpacity>


                                    {/*<View style={{borderColor:'gray',borderWidth:0.2,marginTop:0}}/>*/}
                                    {/*/!* <Divider/> *!/*/}

                                    {/*<TouchableOpacity style={styles.row}  onPress={() => this._navigate('Cheque')}>*/}
                                        {/*<Image source={require('./assets/icons/payment.png')} style={{width: 29, height:25, }} />*/}
                                        {/*<RegularText label='Cheques' size={17} color={LIGHTER_COLOR}*/}
                                                     {/*style={{marginLeft: 45}}/>*/}
                                    {/*</TouchableOpacity>*/}



                                    <View style={{borderColor:'gray',borderWidth:0.2,marginTop:0}}/>
                                    {/* <Divider/> */}

                                    {/* <TouchableOpacity style={styles.row} onPress={() => this._navigate('Loan')}>
                        <Image source={require('./assets/icons/Vector(5).png')} style={{width: 25, height:25, }} />
                            <RegularText label='Loans' size={17} color={LIGHTER_COLOR}
                                         style={{marginLeft: 50}}/>
                        </TouchableOpacity> */}


                                    <View style={{borderColor:'gray',borderWidth:0.2,marginTop:0}}/>
                                    {/* <Divider/> */}

                            <TouchableOpacity style={styles.row} onPress={() => this._navigate('Message')}>
                            <Image source={require('./assets/icons/Vector(4).png')} style={{width: 20, height:25, }} />
                                <RegularText label='Messages' size={17} color={LIGHTER_COLOR}
                                             style={{marginLeft: 55}}/>
                            </TouchableOpacity>
   

                                    {/*<View style={{borderColor:'gray',borderWidth:0.2,marginTop:0}}/> */}



                                </View>
                            </View>

                        </SafeAreaView>




                    </View>


                </ScrollView>

                <LinearGradient   colors={['#1a982d','#2cc51d']} style={{marginTop:90}}>
                    <View style={{ padding: 10,justifyContent:'space-between',}}>
                        <TouchableOpacity style={styles.row2} onPress={() => this.logoutButton()}>
                            <BoldText label='LogOut' size={18} color={LIGHTER_COLOR}/>
                            <Image source={require('./assets/icons/Shape.png')} style={{width: 30, height: 30, }} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    row2: {
        flexDirection: 'row',
        justifyContent:'space-between', 
        // alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 13
    }
});

const mapStateToProps = (state) => {
    return state.authData;
};

export default connect(mapStateToProps, {logoutUser})(Drawer);