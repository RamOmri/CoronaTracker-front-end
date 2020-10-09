// src/screens/Home.js

import React from 'react'
import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert,StatusBar,ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import { NavigationActions } from 'react-navigation';
import * as api from './APIEndpoint.js'


export default class Login extends React.Component{

    state = {
      username: '',
      password: '',
    }

    login = () =>{
      const user = {
        email: this.state.username,
        password: this.state.password
      }
      fetch(`${api.endPoints.loc}:8000/api/auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
      }).then((response)=> response.json().then(data => ({status: response.status, body: data}))).then((resJSON) =>{
        if(JSON.stringify(resJSON.status) !== '200'){ return alert('error ' + JSON.stringify(resJSON.status))}
        else{
          this.props.navigation.navigate('mainStack', {params: {id: resJSON.body._id}, screen: 'Home'})
        }
      }).catch(err=>alert("error connecting to server. Please try again later or contact support " + err))

    }
  render(){
      return (
        <View style={styles.container}>
          <Image
                            resizeMode='contain'
                                style = {styles.logo}
                            source={require('./img/DarkLogo.png')}
                              />
                              
              <View style = {styles.input_box}>
                  <TextInput style={styles.iteminput}
                                                  underlineColorAndroid="transparent"
                                                  placeholder="Email"
                                                  placeholderTextColor="#1795e6"
                                                  autoCapitalize="none"          
                                                  onChangeText={username => this.setState({ username })}

                                                  //  this.state.data = require('./test.json');
                                                    
                                                  value={this.state.username}
                                              />
              </View>

              
              <KeyboardAvoidingView
                  style={styles.input_box}
                  behavior='padding'
                >
              <TextInput style={styles.iteminput}
                                              underlineColorAndroid="transparent"
                                              placeholder="Password"
                                              placeholderTextColor="#1795e6"
                                              autoCapitalize="none"  
                                              secureTextEntry = {true}        
                                              onChangeText={password => this.setState({ password })}

                                              //  this.state.data = require('./test.json');
                                                
                                              value={this.state.password}
                                          />
              </KeyboardAvoidingView>

                <TouchableOpacity
                          style={styles.loginButtonStyle}
                          onPress={() =>{
                                 this.login()
                                 // this.props.navigation.navigate('mainStack',{ params: {id: '5e949e44b9b1f5343c5baecb'}, screen: 'Home'})
                          }}
                              >
                          <Text style={{ fontSize: 18, color: "white" }}>
                             Login
                          </Text>
                      </TouchableOpacity>
        </View>
      )
    }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //textAlign: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#395ac9ff'
  },
  iteminput: {
    flex: 1,
    width: "80%",
    //paddingLeft: 20,
    fontSize: 22,
    color:'#1795e6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonStyle : {
    width: 130,
    height: 45,
    backgroundColor: "#1a2763ff",
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: 50
  },
  input_box: {
    justifyContent:'center',
    width:220,
    height:50,
    backgroundColor:'#f2f6f9',
    borderRadius:25,
    marginBottom:20,
    color:'#1795e6',
    alignItems: 'center',
    alignContent:'center',
  },
  logo: {
    marginTop:45,
    width:300,
    height:195,
    marginBottom: 30
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

