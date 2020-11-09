import React, { Component } from 'react'
import {
    Dimensions,
    FlatList,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Text,
    Modal,
    Alert,
    InteractionManager
} from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import PhotoUpload from 'react-native-photo-upload';
import {GET_SERVICE} from "../shared/Backend";
import {GET_FIRST_NAME} from "../shared/Storage";
import {connect} from "react-redux";
import {logoutUser} from "../store/actions";
import {CustomLoader} from "../components/General/CustomLoader";
class Profile extends Component {

    state = {
        modalVisible: false,
        profileData: {},
        name:''
    }

      async componentDidMount()
      {
          await this.profile();

          this.props.navigation.addListener('didFocus', async () => {
              await this.profile();
          });
      }

    async profile() {
      this.setState({loading: true});
        const first_name = await GET_FIRST_NAME();
        const endpoint = '/v1/user/details/view?username=' + first_name;
        this.setState({loading: false});
        console.log(endpoint)
        try { 
            const response = await GET_SERVICE(endpoint);
            console.log('profile', response);

            if(response.data.code === null)  
            {
                this.setState({profileData: response.data.data})  
            }
            else
            {
                InteractionManager.runAfterInteractions(() => {
                    setTimeout(() => {
                        Alert.alert('Failed', response.data.message);
                    });
                });
            }
        } catch (e) {
            return e.response;
        }    
    };   

    logout(){
       this.props.logoutUser(true);
    }
     
       
          render() {
            console.log('profile data', this.state.profileData)
            // let prof =this.state.profileData.map((val, key) =>{

           
        return (
         <ScrollView>
               <View style={{flex:1  }}>
               <View style={{width: '100%'}}>
               <ImageBackground source={require('../assets/images/kimon-maritztwo.png')}
                     style={{height: 150, width: Dimensions.get('screen').width }} resizeMode='cover'>
                    <View style={{flex:1}}>
                      <StatusBar backgroundColor="#184414" barStyle="light-content" />
     
                <View style={{paddingRight:30,paddingLeft:20}}>
                      <View style={{ flexDirection:'row',justifyContent:'space-between',paddingTop:15, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                           <Entypo name='menu' size={30} color='white' style={{}}/> 
                        </TouchableOpacity>
                    
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Profile</Text>



                       <TouchableOpacity>
                       {/* <Image source={require('../assets/images/user.png')} style={{width: 30, height: 30,borderRadius:30}} /> */}
                       </TouchableOpacity>




                    </View>
                    
                  
                     <View style={{alignItems:'flex-end',}}>
                       {/* <View style={{height:16, width:16, borderRadius:16,backgroundColor:'white',borderColor:'#3d5937',justifyContent:'center',alignItems:'center',borderWidth:2,position:'relative',bottom:15,left:10}}>
                        <Text style={{color:'#25801b',fontSize:10,}}>53</Text>
                       </View> */}
                     </View>
                    </View>
                   </View> 
                 </ImageBackground>
                
                </View>
    
    
           <View style={{position:'relative', bottom:25,}}>
              <View style={{alignItems:'center',position:'relative', }}>



                  <Image source={require('../assets/images/user.png')} style={{width:90, height: 90,borderRadius:90,borderWidth:0, bottom: 30}} />


                <View style={{alignItems:'center',position:'relative',bottom:10}}>
                  <Text style={{fontSize:15,color:'#4a4a4a',fontWeight:'bold'}} >{this.state.profileData.firstName}</Text>
                  <Text style={{color:'#959595',fontWeight:"700",paddingTop:5}} >{this.state.profileData.phoneNumber}</Text>
                </View>
              </View>
              <View style={{borderColor:'lightgray',borderWidth:0.3,marginTop:10}}/>
            
            <View>
               <View style={{paddingHorizontal:25,paddingVertical:15}}>
                  <Text style={{color:'#8a8a8a',fontSize:13}}>Email Address</Text>
                  <Text style={{color:'#5f5f5f',paddingTop:10,fontSize:13,fontWeight:'bold'}}>{this.state.profileData.email}</Text>
               </View>
               <View style={{borderColor:'lightgray',borderWidth:0.3,marginTop:0}}/>
            </View>
    
            
            {/*<View>*/}
               {/*<View style={{paddingHorizontal:25,paddingVertical:15}}>*/}
                  {/*<Text style={{color:'#8a8a8a',fontSize:13}}>Company</Text>*/}
                  {/*<Text style={{color:'#5f5f5f',paddingTop:10,fontSize:13,fontWeight:'bold'}}>Roofing.com</Text>*/}
               {/*</View>*/}
               {/*<View style={{borderColor:'lightgray',borderWidth:0.3,marginTop:0}}/>  */}
            {/*</View>*/}
    
    
            <View>
               <View style={{paddingHorizontal:25,paddingVertical:15}}>
                  <Text style={{color:'#8a8a8a',fontSize:13}}>Phone Number</Text>
                  <Text style={{color:'#5f5f5f',paddingTop:10,fontSize:13,fontWeight:'bold'}}>{this.state.profileData.phoneNumber}</Text>
               </View>
               <View style={{borderColor:'lightgray',borderWidth:0.3,marginTop:0}}/>
            </View>
    
    
            <TouchableOpacity style={{paddingLeft:20,paddingRight:20, paddingTop:15}}    onPress={() => {
                this.logout();
 }}>
               <View style={{flexDirection:'row',height:50,backgroundColor:'#4fc143',borderRadius:3,alignContent:'center',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
                 <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Log Out</Text>
                 <Image source={require('../assets/icons/Shape.png')} style={{width: 30, height: 30, }} />
               </View>
            </TouchableOpacity>
           </View>
    
         
    
         {/* <Modal
               visible={this.state.modalVisible}
               onRequestClose={() => modalVisible()}
               transparent
               animationType='fade'
    >
    
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
    <TouchableOpacity style={{flex: 1}} onPress={() =>{ this.setModalVisible(!this.state.modalVisible);}} />
    
    <View style={{backgroundColor: 'white', paddingVertical:20,borderTopLeftRadius:10,borderTopRightRadius:10}}>
       <View style={{paddingHorizontal:150}}>
         <View style={{borderColor:'#f0f0f0',borderWidth:3,borderRadius:5}}/>
        </View>
      
      <View style={{paddingHorizontal:30,}}>
      <View style={{flexDirection:'row',paddingTop:15,}}>
            <View style={{height:30,width:30,borderRadius:30,backgroundColor:'#f0fcf2',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <Feather name='chevron-left' size={22} color='#1f6019'/> 
            </View>
         
        
           <View style={{flexDirection:'column',alignItems:'center', flex: 1}}>
             <Text style={{color:'#4a4a4a',justifyContent:'center',fontSize:18}}>Edit information</Text>
             <Text style={{color:'#9f9f9f',justifyContent:'center',fontSize:13}}>Update information</Text>
             
         </View>
      </View>
    
    
    
    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <View style={{alignItems:'center',paddingTop:10}}>
                  <Image source={require('../../../cib_images/user.png')} style={{width:70, height: 70,borderRadius:70, borderColor:'white',borderWidth:2,}} />
                  <View style={{height:25,width:25,borderRadius:25,backgroundColor:'#64c53d',alignItems:'center',justifyContent:'center',position:'relative',left:30,bottom:35}}>
                    <Entypo name='camera' size={15} color='white'/> 
                  </View>
    
      </View>
    
    
    
              <View style={{paddingTop:0,flexDirection:'row',justifyContent:'center',alignItems:'center', }}>
                              <TextInput style={{flex:1,height: 50,color:'#9f9f9f',paddingLeft:20,backgroundColor:'#f7f7f7',borderRadius:3,borderRightColor:'#979797'}}
                               placeholder='Email Address'
                               placeholderTextColor='#9f9f9f' 
                               keyboardType='email-address'
                               />
              </View>
    
              <View style={{paddingTop:15,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                              <TextInput style={{flex:1,height: 50,color:'#9f9f9f',paddingLeft:20,backgroundColor:'#f7f7f7',borderRadius:3,borderRightColor:'#979797'}}
                               placeholder='Phone Number'
                               placeholderTextColor='#9f9f9f' 
                               keyboardType="phone-pad"
                            
                               />
              </View>
        </View>
    
            <TouchableOpacity style={{paddingTop:15}}>
              <View style={{flexDirection:'row',height:50,backgroundColor:'#4fc143',borderRadius:3,alignContent:'center',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
              <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Save Changes</Text>
              <Entypo name='chevron-with-circle-right' size={22} color='white' style={{}}/> 
              </View>
           </TouchableOpacity>
    
    
             
    
      
    </View>
     </View>
     </View>
     </Modal> */}
    
     </View>
     <CustomLoader visible={this.state.loading}/>
    </ScrollView>
    
        );
      }
    
         
     
  }

const mapStateToProps = (state) => {
    return state.authData;
};

export default connect(mapStateToProps, {logoutUser})(Profile);