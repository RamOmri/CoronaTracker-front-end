// src/screens/Home.js

import React from 'react'
import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert,StatusBar,ScrollView,
  KeyboardAvoidingView,  BackHandler,
} from 'react-native'
import { NavigationActions } from 'react-navigation';
import * as api from './APIEndpoint.js'

export default class Profile extends React.Component{

    state = {
      fullName: '',
      Email: '',
      password: '',
      reenterPassword: ''
    }
    
    createUser = () => {
        /* let user = `{
          "name": ${this.state.fullName},
          "email": ${this.state.Email},
          "password": ${this.state.password}
        }` */

        const user = {
          name: this.state.fullName,
          email: this.state.Email,
          password: this.state.password
        }
        fetch(`${api.endPoints.loc}:8000/api/users`, {
          method: 'POST',
          headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json',
             
          },
          body: JSON.stringify(user)
        }).then((response)=>{
            const status = response.status;
           const data = response.json();
           return Promise.all([status, data])
        }).then(([res, data]) =>{
          if(JSON.stringify(res) !== '200'){ return alert('error ' + JSON.stringify(res) + JSON.stringify(data))}
          else{
            alert('registration success ')
            this.props.navigation.navigate('mainStack', {params: {screen: 'Home'}})
          }
        }).catch(err=>alert("error " + err + JSON.stringify(res)))

    }

    render(){
            return (
                <View style={styles.container}>
                    <View style = {{width: '100%', alignItems: 'center', marginBottom: 20, borderBottomColor: 'white', borderBottomWidth: 2, marginBottom: 20,}}>
                        <Image
                                resizeMode='contain'
                                    style = {styles.logo}
                                source={require('./img/LightLogo.png')}
                                />
                                <Text style ={styles.Header}>Please enter your details below</Text>
                    </View>
                        
                <ScrollView style = {{width: '100%',}}>
                    <KeyboardAvoidingView style = {{alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>

                        <Text style = {styles.textHeading}> Full Name </Text>
                <View style = {styles.input_box}>
                  <TextInput style={styles.iteminput}
                                                  underlineColorAndroid="transparent"
                                                  placeholder=""
                                                  placeholderTextColor="#1795e6"
                                                  autoCapitalize="none"          
                                                  onChangeText={fullName => this.setState({ fullName })}

                                                  //  this.state.data = require('./test.json');
                                                    
                                                  value={this.state.fullName}
                                              />
                        </View>

                        <Text style = {styles.textHeading}> Email address </Text>
                    <View style = {styles.input_box}>
                  <TextInput style={styles.iteminput}
                                                  underlineColorAndroid="transparent"
                                                  placeholder=""
                                                  placeholderTextColor="#1795e6"
                                                  autoCapitalize="none"          
                                                  onChangeText={Email => this.setState({ Email })}

                                                  //  this.state.data = require('./test.json');
                                                    
                                                  value={this.state.Email}
                                              />
                        </View>

                        <Text style = {styles.textHeading}> Password </Text>
                        <View style = {styles.input_box}>
                  <TextInput style={styles.iteminput}
                                                  underlineColorAndroid="transparent"
                                                  placeholder=""
                                                  placeholderTextColor="#1795e6"
                                                  autoCapitalize="none"          
                                                  onChangeText={password => this.setState({ password })}
                                                  secureTextEntry = {true}  
                                                  //  this.state.data = require('./test.json');
                                                    
                                                  value={this.state.password}
                                              />
                        </View>
                        <Text style = {styles.textHeading}> Re-enter Password </Text>
                        <View style = {styles.input_box}>
                  <TextInput style={styles.iteminput}
                                                  underlineColorAndroid="transparent"
                                                  placeholder=""
                                                  placeholderTextColor="#1795e6"
                                                  autoCapitalize="none"          
                                                  onChangeText={reenterPassword => this.setState({ reenterPassword })}
                                                  secureTextEntry = {true}  
                                                  //  this.state.data = require('./test.json');
                                                    
                                                  value={this.state.reenterPassword}
                                              />
                        </View>
                </KeyboardAvoidingView>
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                                style={styles.registerButtonStyle}
                                onPress={() =>{
                                    if(this.state.password !== this.state.reenterPassword){
                                        alert('Please make sure that the passwords you entered are matching')
                                    }
                                    else{
                                        this.createUser()
                                        
                                    }
                                }}
                                    >
                                <Text style={{ fontSize: 18, color: "white" }}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
              
          
                
                  
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
    backgroundColor: '#aed3daff'
  },
  textHeading: {
   // marginLeft: 20,
    color: '#1795e6',
    fontSize: 20
  },    
  registerButtonStyle : {
    width: 170,
    height: 50,
    backgroundColor: "#1a2763ff",
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: 50,
   borderRadius: 20,
  },
  iteminput: {
    flex: 1,
    width: "80%",
    //paddingLeft: 20,
    fontSize: 20,
    color:'#1795e6',
   // justifyContent: 'center',
   // alignItems: 'center'
  },
  Header: {
    marginLeft: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginLeft: 20, 
    marginRight: 20, 
    textAlign:'center'
  },
  input_box: {
    justifyContent:'center',
    width:220,
    height:45,
    backgroundColor:'#f2f6f9',
    borderRadius:25,
    marginBottom: 10,
    color:'#1795e6',
    alignItems: 'center',
    alignContent:'center',
  },
  logo: {
    width:120,
    height:150,
    marginTop: 5
  },
})

