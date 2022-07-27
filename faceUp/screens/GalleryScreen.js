import {React} from 'react' ;
import {View,ScrollView} from 'react-native' ;
import {Text, Card, Badge } from 'react-native-elements'


function GalleryScreen(props) {




return(

 <View style= {{flex: 1}}>


<ScrollView contentContainerStyle={{ alignItems:'center',justifyContent:'center'}} style={{ flex:1 , marginTop:50 }}>

<Text h1 style={{fontWeight:'bold'}} h1Style={{marginBottom: 20 }}>Jhon's Gallery</Text>

<Card containerStyle={{width: '90%',margin:0,padding:0, marginBottom:20}}>
  <Card.Image source={require('../assets/picture-1.jpg')}/>
  <View style={{alignItems:'center',justifyContent:'center'}}>
  <Badge value="Homme" status="success"/>
  <Badge value="70 ans" status="success"/>
  <Badge value="Barbe" status="success"/>
  <Badge value="Joyeux" status="success"/>
  <Badge value="heveux gris" status="success"/>

  </View>




</Card>

<Card containerStyle={{width: '90%',margin:0,padding:0,}}>
  <Card.Image source={require('../assets/picture-1.jpg')}/>
  <View style={{alignItems:'center',justifyContent:'center'}}>
  <Badge value="Homme" status="success"/>
  <Badge value="70 ans" status="success"/>
  <Badge value="Barbe" status="success"/>
  <Badge value="Joyeux" status="success"/>
  <Badge value="heveux gris" status="success"/>

  </View>




</Card>


</ScrollView>

 </View>

        )
    
}

export default GalleryScreen ;