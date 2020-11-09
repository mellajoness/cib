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
    Alert,
    FlatList,
    ActivityIndicator
} from 'react-native';

// import { white } from 'ansi-colors';
// import Tv from 'react-native-vector-icons/dist/Feather';
 import Menue from 'react-native-vector-icons/dist/AntDesign';
import {PRIMARY_COLOR} from "../../shared/Colors";
import {GET_SERVICE} from "../../shared/Backend";
import {SAVE_PENDING_TRANSFER} from '../../shared/Storage';
import {CustomLoader} from "../General/CustomLoader";

export default class PendingTransfer extends Component {

    state = {
        pendingTransferList: [],
        isLoading: true,
        loading: false,
      };

  async componentDidMount()
  {
      await this.pendingTransfer();

      this.props.navigation.addListener('didFocus', async () => {
           await this.pendingTransfer();
      });
  }

    async pendingTransfer () {
        this.setState({loading: true});
        const endpoint = '/v1/transfer/request/awaiting';

        try {
            const response = await GET_SERVICE(endpoint);
            console.log('pending', response);
            this.setState({loading: false});
            if(response.data.code === '00')
            {
                this.setState({
                    pendingTransferList: response.data.data,
                    
                    
                })
                
            }
            else   
            {
                // this.setState({isLoading:false})
                //  Alert.alert('Failed', response.data.message);
                      
            //   return(
            //    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
            //           <Text>ghghghghhhhhhhhhhhh</Text>
            //           <Text>ghghghghhhhhhhhhhhh</Text>
            //           <Text>ghghghghhhhhhhhhhhh</Text>
            //           <Text>ghghghghhhhhhhhhhhh</Text>
            //           <TouchableOpacity onPress= {this.PendingTransfer} >
            //               RETRY
            //           </TouchableOpacity>
            //       </View>
            //   )

            }
        } catch (e) { 
          
            return e.response;
        }
    };

    transferInfo(data){
    //   save data in local storage
      SAVE_PENDING_TRANSFER(data);
      console.log(data)
      console.log(this.props)
      this.props.navigation.navigate('TransferReq')
    }

    _renderItem(item, index) {
 
        console.log('data', item);
        
      
        return (
            <TouchableOpacity onPress={() => this.transferInfo(item)}>
            <View> 
            <View style={{marginTop: 20, backgroundColor: 'white', borderTopLeftRadius: 5, borderTopRightRadius: 5,
               borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                <View style={{flexDirection: 'column', justifyContent: 'space-between', marginStart: 15}}>
                    <View style={{marginBottom: 10, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'#504f4f',fontSize:16, paddingTop:10,fontWeight:'bold'}}>
                                N {item.amount}</Text>

                            <Text style={{color:'#9c9c9c',fontSize:14, marginTop: 10}}>
                                {item.remarks}</Text>
                        </View>
  
                        <View style={{backgroundColor:'#f8f8f8', height:30, borderTopRightRadius:5, 
                            borderBottomLeftRadius:5,flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                            <View > 
                            <Image source={require('../../assets/icons/transfericon.png')} style={{width: 15, height: 15, }} />
                            </View>
 
                            <View style={{paddingLeft:5}}>   
                                <Text style={{color:'#25801b',fontSize:10, fontWeight: 'bold'}}>TRANSFER</Text>
                            </View>
                        </View>
                    </View>
                   </View>
                 </View>  
                 


   
                     <View style={{flexDirection:'row', backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5,paddingVertical:10,justifyContent:'space-between'
                     }}>
 
                        <View style={{flexDirection:'row',alignItems:'center',paddingLeft:15}} > 
                            <Image source={require('../../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:25}} />
                            <Text style={{color:'#9c9c9c', paddingLeft:10,fontSize:12,paddingRight:200}}   numberOfLines = { 1 } >{item.beneficiaryAccountName}</Text>
                        </View>

                       
                        
             

                    </View>


                    <View style={{alignItems:'center',alignItems:'flex-end',}}>
                        <View style={{flexDirection:'row',position:'absolute',bottom:15,paddingRight:10}}>
                            <Text style={{paddingRight:10,color:'#504f4f',fontSize:13}}>Status</Text>
                            <Menue name='right' style={{paddingTop: 2}} size={12} color='#4fc143'/> 
                        </View>
                    </View>
                        
                    
                    {/* <Text style={{paddingRight:200}} numberOfLines = { 1 }>   
                       This is the Sample Ellipsis Text for Ellipsis from End.
                    </Text> */}

                     {/* <View style={{flexDirection:'row', backgroundColor:'white', justifyContent:'space-between',
                        paddingBottom: 15, marginTop: 10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:25}} />
                            <Text style={{color:'#9c9c9c', paddingLeft:10, fontSize:12}}>{item.beneficiaryAccountName}</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{paddingRight:10,color:'#504f4f',fontSize:14}}>Status</Text>
                            <Menue name='right' style={{paddingTop: 3}} size={14} color='#4fc143'/>
                        </View>
                    </View>  */}

                <CustomLoader visible={this.state.loading}/>

            </View>
             </TouchableOpacity>
        );
    }

  render() {
    return (
      
        <View style={{flex:1}}>
            <FlatList
                extraData={this.state}
                data={this.state.pendingTransferList}
                renderItem={({item, index}) => this._renderItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
                
                // ItemSeparatorComponent={Divider}
            />
        </View>
        
    );
  }
}
