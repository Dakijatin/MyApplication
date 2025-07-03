import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screen/home'
import Profile from './src/screen/profile';
import Search from './src/screen/search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="Search" component={Search}/>
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarStyle: {
          height: 80
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon name="home" color="#000" size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Feather name="users" color="#000" size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Fontisto name="search" color="#000" size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})