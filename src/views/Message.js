
// import React, { Component } from 'react';
// import Swipeout from 'react-native-swipeout'
// import { Dimensions,Alert,FlatList ,View ,ImageBackground,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,Text,StyleSheet} from 'react-native';
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// import Entypo from 'react-native-vector-icons/dist/Entypo';
// import Feather from 'react-native-vector-icons/dist/Feather';
// import {GET_SERVICE,PATCH_SERVICE,DELETE_SERVICE} from "../shared/Backend";
// import {CustomLoader} from "../components/General/CustomLoader";
// import Toast, {DURATION} from 'react-native-easy-toast';
// import {ToastAndroid} from 'react-native';
// export default class Message extends Component {
//   constructor(props){
//     super(props);
//     this.state={  
//       iconName:"md-mail-unread",
//       markRead:"Mark as Read",
//       toggleText:false,  
//       messages:[],
//       loading: false,
//     }
//   } 




//   async componentDidMount()
//          {
//           await this.getMessages();
    
//          }
    
//       async getMessages () {
//         this.setState({loading: true});
//         const endpoint = '/v1/user/messages';
  
//         try {
//             const response = await GET_SERVICE(endpoint);
//             console.log('messagesssssssss', response);
//             this.setState({loading: false});
//             if(response.data.code === '00')
//             {
//                 this.setState({
//                     messages: response.data.data,
                    
                    
//                 })
                
//             }
//             else   
//             {
        
  
//             }
//         } catch (e) { 
          
//             return e.response;
//         }
//     };
    
      

//     toggle22=()=>{
//       let iconName= (this.state.iconName) ? "md-mail" : ""
//       let markRead=(this.state.markRead) ? "Read": ""
      
//       this.setState({
//         iconName:iconName,
//         markRead:markRead,  
       
        
//    }) 
//     }

  
  
//      toggle= async (item)=>{  
//       const endpoint = `/v1/user/messages/${item.id}?status=${item.status}`
//       console.log('this is the togle api endpoint', endpoint)
//       let iconName= (this.state.iconName) ? "md-mail" : ""
//       let markRead=(this.state.markRead) ? "Read": ""
  
  
  
//       try {
//         this.setState({loading: true});
//         const response = await PATCH_SERVICE(endpoint);
//         console.log('messageTogle', response);
//         this.setState({loading: false});
//         if(response.data.code === '204')  {
//           Alert.alert('dd',response.data)
//                this.setState({
//                iconName:iconName,
//                markRead:markRead,     
               
//           }) 
//         }
//       else   
//       {
  
//       }
//   } catch (e) { 
    
//       return e.response;
//   }
//   };
  



//   delete= async (item)=>{  
//     this.setState({loading: true});
//     const endpoint = `/v1/user/messages/${item.id}`
//     console.log('this is the delete api endpoint', endpoint)

//     try {
//       const response = await DELETE_SERVICE(endpoint);
//       console.log('Delete', response);
//       this.setState({loading:false});
//        if(response.data.code === '00')  {  
//         const messages= this.state.messages.filter(mess=>mess.id !==item.id);
//              this.setState({messages:messages}) 
//             //  this.refs.toast.show('yeiyiyqiyqiyeqi',response.data.message, 5000);
//               // Alert.alert('Delete Response',response.data.message)  
//               ToastAndroid.showWithGravityAndOffset(
//                 response.data.message,
//                 ToastAndroid.LONG,
//                 ToastAndroid.BOTTOM,
//                 25,
//                 50,
//               );
//        }
//      else   
//      {

//      }
// } catch (e) { 
  
//     return e.response;
// }
// };
    
  
//       // delete=()=>{
//       //   Alert.alert(
//       //     'Alert',
//       //     'Are you sure you want to delete ?',
//       //     [
//       //       {text:'No',onPress:()=>console.log('Cancel'), style:'cancel'},
//       //       {text: 'Yes',onPress:(item)=>this.delete(item)
  
//       //       }, 
//       //     ],
//       //     {cancelable:true}
//       //   );
  
//       // }
      
//       //  text:'Delete',type:'delete'



   

//       _renderItem(item, index) {
 
//         //   console.log('data', item);

//   // render() {

//     var swipeoutBtns = [
//       {
//         autoClose:true,
//         backgroundColor:'#3da631',
        
     

//         component: ( 
         
//           <View  style={{borderBottomColor:'#ffffff',borderBottomWidth:1,flex:1,alignItems:'center',justifyContent:'center'}}> 
//               {/* <Image source={require('../assets/images/icons/unreadmail.png')} style={{height:12,width:17 }}/> */}
//               <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}  onPress={(()=>this.toggle(item))} >
//               <Ionicons name={this.state.iconName} size={20} color='white' style={{}}/>  
//               <Text style={{color:'#ffffff',textAlign:'center',fontSize:11,paddingTop:7,fontWeight:'400'}}>{this.state.markRead} </Text>
//               </TouchableOpacity>
//             </View>
           
//           )
          
//       }
//     ]


//     var swipeouttwoBtns = [
//       {
       
//         backgroundColor:'#3da631',
//         component: (
//           <View  style={{alignItems:'center',justifyContent:'center',flex:1}}>
//                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}  onPress={(()=>this.delete(item))} >
//                 <Image source={require('../assets/icons/delete.png')} style={{height:18,width:15  }}/>
//               <Text style={{color:'#ffffff',textAlign:'center',fontSize:12,paddingTop:7,fontWeight:'400'}}>Delete </Text>
//               </TouchableOpacity>
//               <CustomLoader visible={this.state.loading}/> 

//               <Toast
//                     ref="toast"
//                     style={{backgroundColor:'red'}}
//                     opacity={0.8}
//                 />
//             </View>
//           )
        
//       }
//     ]

   

//     return (
//       <ScrollView>
//       <View style={[styles.container, styles.horizontal]}>
//          <View style={{flex:1}}>  
        
//         <Swipeout right={swipeoutBtns} >  
//            <View style={{backgroundColor:'white',height:80,paddingHorizontal:15,paddingTop:15,borderBottomColor:'white',borderBottomWidth:1,}}> 
//               <View style={{flexDirection:'row',justifyContent:'space-between'}}>   
//                  <Text style={{color:'#94b197',fontWeight:'bold',paddingLeft:55}}>TRANSFER REQUEST</Text> 
//                  <Entypo name='dots-three-vertical' size={15} color='#c4c4c4' style={{}}/>    
//               </View> 

       
           
//             <View style={{flexDirection:'row',paddingTop:5}}> 
//             <View style={{height:35,width:35,borderRadius:35,backgroundColor:'#f0fcf2',alignItems:'center',justifyContent:'center'}}>
//                 <View style={{height:10,width:10,borderRadius:10,backgroundColor:'#4fc143',marginLeft:40,position:'relative',right:5,borderColor:'white',borderWidth:2}}></View>
//                  <View style={{position:'relative',bottom:4}}>
//                    <Feather name='bell' size={20} color='#4fc143' style={{}}/> 
//                  </View>   
            
//            </View>
//            <View style={{marginRight:20}}> 
//              <Text style={{paddingLeft:17 ,paddingRight:20,color:'#2e384d',}}  numberOfLines = { 2 }> {item.body}</Text>  
//            </View>
 
//           </View>
//            </View>
//        </Swipeout>   

        

//          <Swipeout right={swipeouttwoBtns}> 
//             <View style={{backgroundColor:'white',height:80,paddingTop:50,paddingHorizontal:15,}}>   
//               <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
//                <Text style={{paddingLeft:55,color:'#bfc5d2',fontSize:12 }}>20 min ago</Text> 
//                <Entypo name='chevron-right' size={20} color='#4fc143' style={{}}/> 
//                </View> 
//             </View>   
//           </Swipeout> 

      
//      <View style={{borderColor:'lightgray',borderWidth:0.3,marginTop:0}}/>  
// </View>
//      </View>  
    
//      </ScrollView>
      
//     )
    
//   }





//       render() {
      
//       return (
        
//           <View style={{flex:1}}>
//               <FlatList
//                   extraData={this.state}
//                   data={this.state.messages}
//                   renderItem={({item, index}) => this._renderItem(item, index)}
//                   keyExtractor={(item, index) => index.toString()}
                 
//               />
//           </View>
          
//       );
//     }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   horizontal: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 0
//   }
// })









import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout'
import { Dimensions,Alert,FlatList ,View ,ImageBackground,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,Text,StyleSheet,InteractionManager} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import {GET_SERVICE,PATCH_SERVICE,DELETE_SERVICE} from "../shared/Backend";
import {CustomLoader} from "../components/General/CustomLoader";
import Toast, {DURATION} from 'react-native-easy-toast';
import {ToastAndroid} from 'react-native';


export default class Message extends Component {
  constructor(props){
    super(props);
    this.state={  
      iconName:"md-mail-unread",
      markRead:"Mark as Read",
      toggleText:false,  
      messages:[],
      messagesTwo:[],
      loading: false,
    }
  } 


  async componentDidMount()
       {
         
            await this.getMessages();
            
      this.props.navigation.addListener('didFocus', async () => {
        await this.getMessages();
   });
      
           }

   
  async componentDidUpdate(prevState){
    if(this.state.messages!==prevState.messages){
      await this.getMessages(this.state.messages)
    }
  } 


      
        async getMessages () {
          this.setState({loading: true});
          const endpoint = '/v1/user/messages';
    
          try {
              const response = await GET_SERVICE(endpoint);
              console.log('messagesssssssss', response);
              this.setState({loading: false});
              if(response.code === '00')  
              {
                  this.setState({
                      messages: response.data.data,
                      
                      
                  })
                  
              }
              else   
              {

    
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
      
        
  
      toggle22=()=>{
        let iconName= (this.state.iconName) ? "md-mail" : ""
        let markRead=(this.state.markRead) ? "Read": ""
        
        this.setState({
          iconName:iconName,
          markRead:markRead,  
         
          
     }) 
      }
  
    
    
       toggle= async (item)=>{  
        //  console.log('first console',item.status)
        // if(item.status==='unread'){ 

        //   item.status = 'readuu';
        // }
        // console.log("STATUS PASSED", item.status);
        const endpoint = `/v1/user/messages/${item.id}?status=read`
        console.log('this is the togle api endpoint', endpoint)
      
        try {
          this.setState({loading: true});
          const response = await PATCH_SERVICE(endpoint);
          console.log('messageTogle', response);
          this.setState({loading: false});
          
          
         

          if(response.status=== 204)  {
            console.log('my resstat',response.status)
            this.setState({messages: await this.getMessages()})
            
    
          }
        else   
        {
        //   InteractionManager.runAfterInteractions(() => {
        //     setTimeout(() => {
        //         Alert.alert('Failed', response.data.message);
        //     });
        // });
        }
    } catch (e) { 
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
            Alert.alert('Error', " Kindly check your internet connection.");
        });
    
        return e.response;
    })
    }};
    
  
  
  
    delete= async (item)=>{  
      this.setState({loading: true});
      const endpoint = `/v1/user/messages/${item.id}`
      console.log('this is the delete api endpoint', endpoint)
  
      try {
        const response = await DELETE_SERVICE(endpoint);
        console.log('Delete', response);
        this.setState({loading:false});
         if(response.data.code === '00')  {  
          const messages= this.state.messages.filter(mess=>mess.id !==item.id);
               this.setState({messages : messages}) 
              //  this.refs.toast.show('yeiyiyqiyqiyeqi',response.data.message, 5000);
                // Alert.alert('Delete Response',response.data.message)  
                ToastAndroid.showWithGravityAndOffset(
                  response.data.message,
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM,
                  25,
                  50,
                );
         }
       else   
       {
        InteractionManager.runAfterInteractions(() => {
          setTimeout(() => {
              Alert.alert(' Error', response.data.message);
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
      
  header= () => {
    return(
      <View style={{height: 60, width: Dimensions.get('screen').width,backgroundColor:'#4fc143',justifyContent:'center' }} >
      <View style={{flex:1}}>
        <StatusBar backgroundColor="#184414" barStyle="light-content" />

        <View style={{paddingRight:30,paddingLeft:20}}>
          <View style={{ flexDirection:'row',justifyContent:'space-between',paddingTop:15, }}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
             <Entypo name='menu' size={30} color='white' style={{}}/> 
          </TouchableOpacity>
      
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Messages</Text>
           
         <TouchableOpacity>
         {/* <Image source={require('../assets/images/FROSH.jpg')} style={{width: 30, height: 30,borderRadius:30}} /> */}
         </TouchableOpacity>
      </View>
      
    
       {/* <View style={{alignItems:'flex-end',}}>
         <View style={{height:16, width:16, borderRadius:16,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderWidth:1,position:'relative',bottom:15,left:10,borderColor:'#4fc143'}}>
         <Text style={{color:'#4fc143',fontSize:10,}}>53</Text>
         </View>
      </View> */}
    </View>
     </View> 
  </View>)
  }
    
        // onDelete=()=>{
        //   Alert.alert(
        //     'Alert',
        //     'Are you sure you want to delete ?',
        //     [
        //       {text:'No',onPress:()=>console.log('Cancel'), style:'cancel'},
        //       {text: 'Yes',onPress:(item)=>this.delete(item)
    
        //       }, 
        //     ],
        //     {cancelable:true}
        //   );
    
        // }
        
        //  text:'Delete',type:'delete'



        

        _renderItem(item, index) {

          let messageIcon;
          let messageText;

          if(item.status === "read")
          {
              messageIcon = "../assets/icons/unreadmail.png";
              messageText = "READ";
              //  this.getMessages();
          }
          else
          {
              messageIcon = "../assets/icons/read.png";
              messageText = "Mark as Read";
          }


    var swipeoutBtns = [
        {
          autoClose:true,    
          backgroundColor:'#3da631',
          component: (

              <View  style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <TouchableOpacity style={{alignItems:'center',justifyContent:'center', borderBottomColor:'#ffffff',borderBottomWidth:1, paddingBottom: 20}}  onPress={(()=>this.toggle(item)) } >
                      {/*<Ionicons name={this.state.iconName} size={20} color='white' style={{}}/>*/}
                      <Image source={require('../assets/icons/unreadmail.png')} style={{height:12,width:17 }}/>
                      <Text style={{color:'#ffffff',textAlign:'center',fontSize:11,paddingTop:7,fontWeight:'400'}}>{messageText} </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{alignItems:'center',justifyContent:'center', paddingTop: 20}}  onPress={(()=>this.delete(item))} >
                      <Image source={require('../assets/icons/delete.png')} style={{height:18,width:15  }}/>
                      <Text style={{color:'#ffffff',textAlign:'center',fontSize:12,paddingTop:7,fontWeight:'400'}}>Delete </Text>
                  </TouchableOpacity>
              </View>

            )
        }
      ]



      return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swipeout right={swipeoutBtns} >
                      <View style={{backgroundColor:'white',height:80,paddingHorizontal:15,paddingTop:15,borderBottomColor:'white',borderBottomWidth:1,}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{color:'#94b197',fontWeight:'bold',paddingLeft:55}}>{item.subject}</Text>
                           {/* <Entypo name='chevron-right' size={20} color='#4fc143' style={{}}/> */}
                          </View>

                          <View style={{flexDirection:'row',paddingTop:5}}>
                              <View style={{height:35,width:35,borderRadius:35,backgroundColor:'#f0fcf2',alignItems:'center',justifyContent:'center'}}>
                                  <View style={{height:10,width:10,borderRadius:10,backgroundColor:'#4fc143',marginLeft:40,position:'relative',right:5,borderColor:'white',borderWidth:2}}/>
                                  <View style={{position:'relative',bottom:4}}>
                                      <Feather name='bell' size={20} color='#4fc143' style={{}}/>
                                  </View>
                              </View>

                              <View style={{marginRight:20}}>
                                  <Text style={{paddingLeft:17 ,paddingRight:20,color:'#2e384d',}}  numberOfLines = { 2 }> {item.body}</Text>
                              </View>
                          </View>
                      </View>    

                      <View style={{backgroundColor:'white', paddingTop:20, paddingBottom: 20, paddingHorizontal:15}}>
                          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{paddingLeft:55,color:'#bfc5d2',fontSize:12 }}>{item.createdOn}</Text>
                              <Entypo name='chevron-right' size={20} color='#4fc143' style={{}}/>
                          </View>
                      </View>  

                      <View style={{borderColor:'lightgray',borderWidth:0.3,marginTop:0}}/>
                  </Swipeout>

              </View>
              <CustomLoader visible={this.state.loading}/>
          </View>

          
      );
  }


  

  render() {
      
    return (
      
        <View style={{flex:1}}>
            <FlatList
                extraData={this.state}
                data={this.state.messages}
                renderItem={({item, index}) => this._renderItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={this.header}
                stickyHeaderIndices={[0]}
               
            />
        </View>
        
    );
  }}


