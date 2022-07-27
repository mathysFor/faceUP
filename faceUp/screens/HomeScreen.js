import React,{useState} from 'react' ;
import {StyleSheet,ImageBackground, Text} from 'react-native' ;
import {Button, Input} from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';




function HomeScreen(props) {


const [pseudo, setPseudo] = useState('') ;

return(

    <ImageBackground source={require('../assets/home.jpg')} style={styles.container}>


<Input
     onChangeText= {(value)=>setPseudo(value)}
           containerStyle = {{marginBottom: 25, width: '70%'}}
           inputStyle={{marginLeft: 10}}
           placeholder=' Username'
           leftIcon= { <Icon
            name='user'
            size={24}
            color="#009788"
            />}
           value={pseudo}
           
           />
<Button
 buttonStyle={{
    backgroundColor:'#009788'
 }}
color="error"
title="Go to Gallery"
type="solid"
onPress={() => {
props.navigation.navigate('BottomNavigator' , {screen: 'Gallery'})
}}

/>
</ImageBackground>
        )
    
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
   });

export default HomeScreen ;