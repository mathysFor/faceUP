import React from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


import HomeScreen from './screens/HomeScreen';
import SnapScreen from './screens/SnapScreen';
import GalleryScreen from './screens/GalleryScreen';




var BottomNavigator = () => {
  return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
 tabBarIcon: ({ color }) => {
   let iconName;
   if (route.name === 'Gallery') { 
     iconName = "file-picture-o"   
   } else if (route.name === 'Snap') {
     iconName = 'camera'
   }
   return <FontAwesome name={iconName} size={24} color={color} />
 },
})}
tabBarOptions={{
 activeTintColor: '#009788',
 inactiveTintColor: '#FFFFFF',
 style: {
  backgroundColor: '#111224',
}
}}>
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen  name="Snap" component={SnapScreen} />
      </Tab.Navigator>

  );
}


export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  // </Provider>
  );
}

;