import React from "react";
import { 
    View,
    Text,
    StyleSheet,TouchableOpacity
} from "react-native";

const Signup = ({navigation}) => (
    <View style={styles.container}>
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
    </View>
    )
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});