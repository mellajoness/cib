import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Text,
    Alert,
    ToastAndroid, InteractionManager
} from 'react-native';
 import {Divider} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {GET_AWAITING_TRANSFER,GET_PENDING_TRANSFER} from '../../shared/Storage';
import {POST_SERVICE} from "../../shared/Backend";
import {CustomLoader} from "../General/CustomLoader";

export default class TransferApprovalRequired extends Component {

    state = {
        ButtonStateHolder : false,
        toggle:true,
        bgOne:'red',
        pendingData:{},
        body: {},
        loading: false
    };

  async componentDidMount()
  {
      const data = await GET_PENDING_TRANSFER();
      console.log('saved data', data)
      const body = {
        tranReqId: data.id,
        token: "0",
        role: null,
        awaitingAuthorizerId: data.awaitingAuthorizerId,
      }

      console.log('request body', body)
      this.setState({body: body})
  }
   
    async finalAction (action) { 
        this.setState({loading: true});

        const endpoint = '/v1/transaction/status';

        let body = this.state.body;

        if(action === "approve")
        {
            body['comments'] = "Approve this transaction";
            body['authStatus'] = "APPROVED";
        }
        else
        {
            body['comments'] = "Decline this transaction";
            body['authStatus'] = "DECLINED";
        }

        console.log('body', body)
        try {
            const response = await POST_SERVICE(this.state.body, endpoint);
            this.setState({loading: false});

            console.log('response', response)
            if(response.data.code === '00')
            {
                // ToastAndroid.showWithGravityAndOffset(
                //     response.data.message,
                //     ToastAndroid.LONG,
                //     ToastAndroid.BOTTOM,
                //     25,
                //     50,
                // );

                InteractionManager.runAfterInteractions(() => {
                    setTimeout(() => {
                        Alert.alert(
                            'Transaction Action',
                            response.data.message,
                            [
                                {text: 'OK', onPress: () => this.props.navigation.navigate("Transfer")},
                            ],
                            {cancelable: false},
                        );
                    });
                });
            }
            else
            {
                InteractionManager.runAfterInteractions(() => {
                    setTimeout(() => {
                        Alert.alert('', response.data.message);
                    });
                });
            }
        } catch (e) {
            this.setState({loading: false});
            InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {
                    Alert.alert('Error', " Kindly check your internet connection.");
                });
            });
            return e.response;
        }
    };

    transferAction(action)
    {
        let title, body, act;
        if(action === "approve")
        {
            title = "Approval";
            act = "approve";
            body = "Are you sure you want to approve?";
        }
        else
        {
            title = "Decline";
            act = "decline";
            body = "Are you sure you want to decline?";
        }

        Alert.alert(
            title,
            body,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => this.finalAction(act)},
            ],
            {cancelable: false},
        );
    }

  render() {
    //   const {toggle} =this.state  
    //  let  color =ButtonStateHolder ? "#4fc143":'gray',
    return (
        <ScrollView>
             <View style={{flex:1}}>
                <View style={{backgroundColor:'white',borderRadius:10}}>

                    <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                      <Text style={{color:'#b3b2b2',paddingLeft:15,paddingTop:10,paddingBottom:10,fontSize:12,fontWeight:'bold'}}>APPROVAL REQUIRED</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,
                        marginBottom: 20, marginStart: 10, marginEnd: 10}}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image source={require('../../assets/images/user.png')} style={{width: 40, height: 40,
                                borderRadius:30}} />

                            <View style={{flexDirection: 'column', marginStart: 15}}>
                                <Text style={{color:'#393939',fontSize:14, fontWeight:'bold',paddingRight:200}}  numberOfLines = { 1 } >Samson Olukoya ,mellfhghuyuyutyjiyiyiyiyiytyrdd</Text>
                                <Text style={{fontSize:13,color:'#848484'}}>Administrator</Text>
                            </View>
                        </View>
              
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',position:'absolute',top:12,right:0 }}>
                            <View style={{backgroundColor:'#f8fafb',borderRadius:10,width:80,height:20,alignItems:'center'}}>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <View style={{height:10,width:10,borderRadius:10,backgroundColor:'#ffab2b'}}/>
                                    <Text style={{paddingLeft:5,fontSize:12,color:'#4a4a4a'}}>Pending</Text>
                                </View>
                            </View>

                            <View style={{height:20, width:20, borderRadius:20, backgroundColor:'#e8f9eb',
                                alignItems:'center',justifyContent:'center', marginStart: 10}}>
                                <FontAwesome name='bell' size={14} color='#4fc143'/>
                            </View>
                        </View>

                    </View>

                    <Divider/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,
                        marginBottom: 20, marginStart: 10, marginEnd: 10}}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                            <Image source={require('../../assets/images/user.png')} style={{width: 40, height: 40,
                                borderRadius:30}} />
{/*\*/}
                            <View style={{flexDirection: 'column', marginStart: 15}}>
                                <Text style={{color:'#393939',fontSize:14, fontWeight:'bold'}}>Bidemi Bodunde</Text>
                                <Text style={{fontSize:13,color:'#848484'}}>Signatory1</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{backgroundColor:'#f8fafb',borderRadius:10,width:80,height:20,alignItems:'center'}}>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <View style={{height:10,width:10,borderRadius:10,backgroundColor:'#ffab2b'}}/>
                                    <Text style={{paddingLeft:5,fontSize:12,color:'#4a4a4a'}}>Pending</Text>
                                </View>
                            </View>

                            <View style={{height:20, width:20, borderRadius:20, backgroundColor:'#e8f9eb',
                                alignItems:'center',justifyContent:'center', marginStart: 10}}>
                                <FontAwesome name='bell' size={14} color='#4fc143'/>
                            </View>
                        </View>

                    </View>

                    <Divider/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,
                        marginBottom: 20, marginStart: 10, marginEnd: 10}}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image source={require('../../assets/images/user.png')} style={{width: 40, height: 40,
                                borderRadius:30}} />

                            <View style={{flexDirection: 'column', marginStart: 15}}>
                                <Text style={{color:'#393939',fontSize:14, fontWeight:'bold'}}>Lucy Igbokedi</Text>
                                <Text style={{fontSize:13,color:'#848484'}}>Signatory2</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{backgroundColor:'#f8fafb',borderRadius:10,width:80,height:20,alignItems:'center'}}>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                    <View style={{height:10,width:10,borderRadius:10,backgroundColor:'#4fc143'}}/>
                                    <Text style={{paddingLeft:5,fontSize:12,color:'#4a4a4a'}}>Approved</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <Divider/>       
    
     <TouchableOpacity onPress={() => this.transferAction('approve')}  disabled={this.state.ButtonStateHolder} style={{paddingLeft:15,paddingRight:15, marginTop: 10}}>
      <View style={{flexDirection:'row',height:50,backgroundColor:'#4fc143',borderRadius:3,alignContent:'center',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
         <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Approve</Text>
         <Entypo name='chevron-with-circle-right' size={22} color='white' style={{}}/>
      </View>
     </TouchableOpacity>



     <TouchableOpacity onPress={() => this.transferAction('decline')} style={{paddingLeft:15,paddingRight:15,paddingTop:15}}>
      <View style={{flexDirection:'row',height:50,backgroundColor:'white',borderWidth:1,borderRadius:3,alignContent:'center', borderColor:'rgba(167, 16, 16, 0.5)', justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
         <Text style={{color:'#ba2e2c',fontWeight:'bold',fontSize:17}}>Decline</Text>
         <FontAwesome name='trash-o' size={22} color='#ba2e2c' style={{}}/>
      </View>
     </TouchableOpacity>


        </View>
     </View>

            <CustomLoader visible={this.state.loading}/>
        </ScrollView>
    );
  }}