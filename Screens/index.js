import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    StatusBar,SafeAreaView,Dimensions,ScrollView,ImageBackground,
    Button, TouchableOpacity
} from "react-native";



const url = require('../images/bg.jpeg') ;
function index ({navigation}) {
    const { width, height } = Dimensions.get('window');
    
    return(
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ 
        backgroundColor:'#999' }}>
      <ImageBackground style={{
        width:'100%',
        height:'100%',
        backgroundColor:'#333',
          resizeMode: 'cover',
          
      }}
      source={url}
      
      >
      <View style={{

        width:'100%',
        height:'100%',
       backgroundColor: 'rgba(0,0,0,.4)'
      }}>

      <View style={{
        height:'30%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
      }}>
      <Text style={{fontSize:50,color:'#eee'}}>
        Beruit
      </Text>
      <Text style={{fontSize:70,color:'#eee'}}>
        .
      </Text>

      </View>
      <View style={{
        width:'100%',height:'70%',
        justifyContent:'flex-end'
      }}>
      <View style={{
        height:'50%',width:'100%', 
        
      }}>
      <Text  style={{
        height:'40%',width:'100%',
        fontSize:28,color:'#eee', 
        paddingHorizontal:'10%',

        paddingVertical:'5%',letterSpacing:0.8
      }}> Get Fit {"\n"} Don't Quite </Text>
 <View style={{
        height:'50%',width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:'5%'
      }}>
       
       <TouchableOpacity style={{
         backgroundColor: 'rgba(52, 52, 52, 0.6)',
         width:'35%',
         borderRadius:8,
         padding:'3%',
         
       }} 
       onPress={()=> navigation.navigate('login')}
       >
          <Text style={{
            textAlign:'center',
            color:'#eee'
          }}
          
          >Login</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={{
         backgroundColor:'tomato',
         width:'35%',
         borderRadius:8,
         padding:'3%',
         
       }} 
       
       onPress={()=> navigation.navigate('signup')}
       >
          <Text style={{
            textAlign:'center',
            color:'#eee'
          }}
          
          >Signup</Text>
       </TouchableOpacity>
       
      </View>

      </View>

      </View>




      </View>


       
  

      </ImageBackground>
      
    </SafeAreaView>
  </>
    )
    };
export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});