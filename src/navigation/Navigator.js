import React, { Component, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert,StatusBar,ScrollView,
  KeyboardAvoidingView
} from 'react-native'

import WelcomeScreen from '../WelcomePage'
import LoginScreen from '../Login'
import Homescreen from '../Main'
import ProfileScreen from '../Profile'
import SubmitCaseScreen from '../SubmitCase'
import RegisterScreen from '../Register'

    const Tab  = createBottomTabNavigator()
    const Stack = createStackNavigator()

 const CoronaStack = () => (
      <Stack.Navigator screenOptions={{
        headerShown: false
        }}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name= 'SubmitCase' component={SubmitCaseScreen} />
    
    </Stack.Navigator>

    )

const mainStack = ({navigation: stackNavigation}) =>(
   
             <Tab.Navigator
            

             tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
             >
                <Tab.Screen name="Home" component={Homescreen} 
                 initialParams={{stackNavigation}}
                />
                <Tab.Screen name="Profile" component={CoronaStack} />
             </Tab.Navigator>
   
    )

   


export default () => (
   
        <NavigationContainer >
              <Stack.Navigator screenOptions={{
                  headerShown: false
                  }}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name = 'Register' component = {RegisterScreen} />
                <Stack.Screen name= 'Login' component={LoginScreen} />
                <Stack.Screen name = 'mainStack' component={mainStack} />
              </Stack.Navigator>
    
          
    
        </NavigationContainer>
      
)

const styles = StyleSheet.create({
  tabs: {
    
  },

})