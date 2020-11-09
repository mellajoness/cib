import React, { Component } from 'react';
import {
    Dimensions,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Text,
    Alert, FlatList, InteractionManager,
} from 'react-native';
 import AntDesign from 'react-native-vector-icons/dist/AntDesign';
 import Menue from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {GET_SERVICE} from "../../shared/Backend";

export default class AwaitingCheque extends Component {
    constructor(props){
        super(props);
        this.state = {
            awaitingChequeList: [],
        }
    }

    async componentDidMount()
    {
        await this.awaitingCheque();
    }

    async awaitingCheque () {
        const endpoint = '/v1/cheques/request/awaiting';

        try {
            const response = await GET_SERVICE(endpoint);
            console.log('awaiting', response);

            if(response.data.code === '00')
            {
                this.setState({awaitingChequeList: response.data.data})
            }
            else
            {
                InteractionManager.runAfterInteractions(() => {
                    setTimeout(() => {
                        Alert.alert('Nothing to display', response.data.message);
                    });
                });
            }
        } catch (e) {
            return e.response;
        }
    };

    _renderItem(item, index) {

        console.log('data', item);
        return (
            <View style={{marginTop: 20, backgroundColor: 'white', borderTopLeftRadius: 5, borderTopRightRadius: 5,
            borderBottomColor:'#f8f8f8',borderBottomWidth:1}}> 
                <View style={{flexDirection: 'column', justifyContent: 'space-between', marginStart: 15}}>
                    <View style={{marginBottom: 10, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'#504f4f',fontSize:16, paddingTop:10,fontWeight:'bold'}}>
                                N {item.amount}</Text>

                            <Text style={{color:'#9c9c9c',fontSize:14, marginTop: 10}}>
                                {item.accountNumber}</Text>
                        </View>

                        <View style={{flexDirection:'column',alignItems:'center'}}>
                        <View style={{backgroundColor:'#f8f8f8', height:30, borderTopRightRadius:5, 
                            borderBottomLeftRadius:5,flexDirection:'row',alignItems:'center',paddingHorizontal:14}}>
                            <View > 
                                <Menue name='save' size={18} color='#4fc143' style={{}}/>
                            </View>
 
                            <View style={{paddingLeft:14}}>   
                                <Text style={{color:'#25801b',fontSize:10, fontWeight: 'bold'}}>CHEQUE</Text>
                            </View>
                        </View>  

                        <View style={{   
                                flexDirection:'row',alignItems:'center',paddingTop:12,paddingHorizontal:10}}>
                              <View style={{paddingLeft:5}}>
                                <FontAwesome name='hourglass-3' size={13} color='#ff9922'/>
                              </View>
 
                                <View style={{paddingLeft:5}}>
                                    <Text style={{fontSize:12,paddingLeft:5}}>Approved</Text>
                                </View>
                       </View>

       
                            {/* <View style={{backgroundColor:'#f8f8f8', height:30, borderTopRightRadius:5,
                                borderBottomLeftRadius:5,flexDirection:'row',alignItems:'center'}}>
                                <View style={{paddingLeft:10}}>
                                    <FontAwesome name='hourglass-3' size={13} color='#ff9922'/>
                                </View>

                                <View style={{paddingLeft:10}}>
                                    <Text style={{fontSize:14}}>Approved</Text>
                                </View>
                            </View> */}


                        </View>
                    </View>

                    <View style={{height: 1, backgroundColor: '#f8f8f8', marginEnd: 14}}>

                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'white', justifyContent:'space-between',
                        paddingBottom: 15, marginTop: 10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:25}} />
                            <Text style={{color:'#9c9c9c', paddingLeft:10, fontSize:12}}>{item.beneficiaryAccountName}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingHorizontal:10}}>
                          <View style={{paddingRight:5}}>   
                            <Menue name='calendar' size={13} color='#b5b4b4'/>
                          </View>
                            <Text style={{paddingRight:0,color:'#8e8b8b',fontSize:12}}>09/04/019</Text>
                        </View> 
                    </View>

                </View>

            </View>
        );
    }

  render() {
    return (
        <View style={{flex:1}}>
            <FlatList
                data={this.state.awaitingChequeList}
                renderItem={({item, index}) => this._renderItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
                // ItemSeparatorComponent={Divider}
            />
        </View>
    );
  }
}
