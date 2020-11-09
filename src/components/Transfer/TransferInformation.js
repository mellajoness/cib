import React, { Component } from 'react';
import { View,Image,Text} from 'react-native';
 import {GET_AWAITING_TRANSFER,GET_PENDING_TRANSFER} from '../../shared/Storage';

export default class TransferInformation extends Component {

    state = {
        awaitingTransferData:{},
    };

  async componentDidMount()
  {
      const data = await GET_PENDING_TRANSFER();
      this.setState({awaitingTransferData: data})
      console.log('saved data', data)
  }


  render() {
    return (
      
     <View style={{flex:1}}>
        <View style={{backgroundColor:'white',borderRadius:10}}>
            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
              <Text style={{color:'#b3b2b2',paddingLeft:15,paddingTop:10,paddingBottom:10,fontSize:12,fontWeight:'bold'}}>TRANSFER INFORMATION</Text>
            </View>

          

           <View>
            <View style={{paddingLeft:15,paddingTop:5,paddingBottom:5,}}>
                <Text style={{fontSize:13,color:'#848484'}}>Amount</Text>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5}}>{this.state.awaitingTransferData.amount}</Text>
            </View>
            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>
           </View>


          
         {/* <View>
            <View style={{paddingLeft:15,paddingTop:5,paddingBottom:5,}}>
                <Text style={{fontSize:13,color:'#848484'}}>Monthly Rate</Text>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5}}>12%</Text>
            </View>
            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>
           </View>  */}


         
           {/* <View>
            <View style={{paddingLeft:15,paddingTop:5,paddingBottom:5,}}>
                <Text style={{fontSize:13,color:'#848484'}}>Time Frame</Text>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5}}>5 months</Text>
            </View>
            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>
           </View>  */}


           <View style={{flexDirection:'row',paddingLeft:15,paddingTop:5,paddingRight:20,paddingBottom:5,alignItems:'center',justifyContent:'space-between'}}>

            <View style={{paddingTop:5,paddingBottom:5,paddingRight:100}}>
                <Text style={{fontSize:13,color:'#848484'}}>Sending Account</Text>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5}} numberOfLines = {1} >GMC Billing Exututyrtreterweweqjghhggggjjjjgf</Text>
          <Text style={{fontSize:13,color:'#848484', marginTop: 5}}>{}</Text>

              </View>

     
              <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#f8f8f8',position:'absolute',right:20}}>
                <View style={{padding:8}}> 
              <Image source={require('../../assets/icons/XMLID.png')} style={{width: 15, height: 15}} />
              </View>
             </View>
          </View>

            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>
          


          <View style={{flexDirection:'row',paddingLeft:15,paddingTop:5,paddingRight:20,paddingBottom:5,alignItems:'center',justifyContent:'space-between'}}>

            <View style={{paddingTop:5,paddingBottom:5, paddingRight:100}}>
                <Text style={{fontSize:13,color:'#848484'}}>Recieving Account</Text>
                       
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5}}  numberOfLines = { 1 }  >{this.state.awaitingTransferData.beneficiaryAccountName}</Text>
               
                <Text style={{fontSize:13,color:'#848484', marginTop: 5}}>{this.state.awaitingTransferData.beneficiaryAccountNumber}</Text>  

              </View>   

              <View style={{position:'absolute',right:20}}>
    <Text style={{fontSize:12,color:'#135c0b'}}>{this.state.awaitingTransferData.beneficiaryBank}</Text> 
             </View>
          </View>
          <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>



          <View>
            <View style={{paddingLeft:15,paddingTop:5,paddingBottom:5,paddingRight:40}}>
                <Text style={{fontSize:13,color:'#848484'}}>Remark</Text>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5, }} numberOfLines = { 2 }>{this.state.awaitingTransferData.remarks}  </Text>
            </View>
            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>
           </View> 

                     {/* <View>
            <View style={{paddingLeft:15,paddingTop:5,paddingBottom:5,}}>
                <Text style={{fontSize:13,color:'#848484'}}>Recipient Account Name</Text>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold', marginTop: 5}}>Charles Ndojie</Text>
            </View>
            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15}}/>
           </View> */}

               {/* <View style={{flexDirection:'column',alignItems:'flex-end',marginRight:20,}}>
                    <View style={{height:40,width:40,borderRadius:40,backgroundColor:'red'}}></View>
                </View> */}

            <View style={{borderBottomColor:'#f8f8f8',borderBottomWidth:1,marginHorizontal:15,}}/>

            <View style={{flexDirection:'row',paddingLeft:15,paddingTop:5,paddingBottom:5,alignItems:'center'}}>
                   <Image source={require('../../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:30}} />
               <View style={{paddingLeft:15,paddingTop:5,paddingBottom:5,}}>
                <Text style={{color:'#393939',fontSize:13,fontWeight:'bold'}}>Bankole Adeshina</Text>
                <Text style={{fontSize:13,color:'#848484', marginTop: 5}}>Requested</Text>

            </View>
           </View>


        </View>
     </View>
   
    );
  }}