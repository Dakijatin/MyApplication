import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screen/home'
import Profile from './src/screen/profile';
import Search from './src/screen/search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="Search" component={Search}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
   <NavigationContainer>
      <StackNavigator/>
   </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})