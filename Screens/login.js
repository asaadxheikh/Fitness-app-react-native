import React ,{useState}from "react";
import { 
    View,
    Text,
    StatusBar,
    StyleSheet,TouchableOpacity,
    SafeAreaView, Button,TextInput,Switch
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons' 
import Iconi from 'react-native-vector-icons/Ionicons' 
import Fonta from 'react-native-vector-icons/FontAwesome' 
import { Input, Label ,Item} from 'native-base';

function Login  ({navigation})  {

    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return( 
    <>
        <StatusBar   barStyle="dark-content" />
        <SafeAreaView style={{ 
            backgroundColor:'#fff' }}>

                <View style={{
                    width:'100%',height:'100%',
                    backgroundColor:'#fff'
                }}>
                    <View style={{
                        width:'100%',height:'15%',
                        justifyContent:'center'
                    }}>
                        <View style={{
                            height:'40%',
                            paddingHorizontal:'10%', 
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                        }}>
                            <Icon name="cancel" size={40} 
       onPress={()=> navigation.navigate('index')}/>

                            <Button 
                            title="Forgot Password ?"
                            />

                        </View>

                    </View> 

                    <View style={{
                        height:'65%',width:'100%', 
                        paddingHorizontal:'9%', 
                    }}
                    >
                        <View style={{
                            width:'100%',height:'100%',
                        }}
                        >
                            <Text style={{
                                fontSize:20,
                                padding:'1%',
                                fontWeight:'400'
                            }}
                            >
                                Welcome Back !
                            </Text>

                            <Text style={{
                                fontSize:15,
                                padding:'1%',
                                fontWeight:'300',
                                color:'#333'
                            }}
                            >
                                Enter your credentials to continue.
                            </Text>
                            <View style={{width:'100%',
                                 marginTop:'12%', flexDirection:'row',alignItems:'center',}} > 
                            <Iconi name="person-circle-outline" size={24} />
                            <Item floatingLabel style={{
                                 width:'70%',
                                 left:'3%', 
                            }}>
                             <Label style={{color:'#000'}}>Username</Label>
                            <Input />
                               </Item>
                               </View>

                               <View style={{width:'100%',
                                 marginTop:'12%', flexDirection:'row',alignItems:'center',}} > 
                            <Iconi name="md-lock-closed" size={24} />
                            <Item  floatingLabel style={{
                                 width:'70%',
                                 left:'3%', 
                            }}>
                             <Label style={{color:'#000'}}>Password</Label>
                            <Input  secureTextEntry={true} />
                               </Item>
                               <Iconi name="md-eye" size={20} />
                               </View>

                               <View style={{width:'100%',
                                 marginTop:'12%', flexDirection:'row',
                                 marginHorizontal:'2%',
                                 justifyContent:'space-between',}} >  
                              <Text style={{
                                fontSize:15,
                                padding:'1%',
                                fontWeight:'300',
                                marginTop:'2%',
                                color:'#333'
                            }}
                            >
                                Remember me next time.
                            </Text>
                            <Switch  
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                               </View>

                               <View style={{
                                   width:'60%',
                                   height:'10%',
                                   flexDirection:'row',
                                   marginTop:'20%',
                                   justifyContent:'space-around'
                               }}
                               >
                                   <View style={{
                                       width: 50,
                                       height: 50,
                                       borderRadius: 50/2,
                                       backgroundColor:'#000',
                                       justifyContent:'center',
                                       alignItems:"center"

                                   }}
                                   >
                                       <Iconi name="ios-logo-apple" color={"#fff"} size={25} />

                                   </View>
                                   <View style={{
                                       width: 50,
                                       height: 50,
                                       borderRadius: 50/2,
                                       backgroundColor:'#3b5998',
                                       justifyContent:'center',
                                       alignItems:"center"
                                   }}
                                   >

                            <Fonta name="facebook" color={"#fff"} size={25} />

                                   </View> 
                                     <View style={{
                                       width: 50,
                                       height: 50,
                                       borderRadius: 50/2,
                                       backgroundColor:'#fff',           
                                       justifyContent:'center',
                                       alignItems:"center",
                                       borderWidth:2,
                                       borderColor:'#333'

                                   }}
                                   >

                               <Iconi name="ios-logo-google" color={"#333"} size={25} />

                                   </View>
                               </View>
                          </View>

                    </View>
                    
                    <View  style={{
                        height:'20%',width:'100%', 
                        alignItems:'center'
                    }}>
  <TouchableOpacity style={{
         backgroundColor:'tomato',
         width:'70%',
         borderRadius:10,
         padding:'4%',
         
       }} 
        
       >
          <Text style={{
            textAlign:'center',
            color:'#fff',fontWeight:'500'
          }}
          
          >Login</Text>
       </TouchableOpacity>
                    </View>
                   
                </View>

                </SafeAreaView>
                </>
    )} 
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});