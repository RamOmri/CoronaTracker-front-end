// src/screens/Home.js

import React from 'react'
import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert,StatusBar,ScrollView,
  KeyboardAvoidingView,  BackHandler, Platform,
} from 'react-native'

import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';


const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const haversine = require('../node_modules/haversine')

export default class Profile extends React.Component{

  
    ///////////////////////////////////////////////////////////////////////
    constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    
          this.state = {
            username: '',
           
          }
                     
    }  
    
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    
        
    }
    
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    
        Geolocation.clearWatch(this.watchID)
    }
    //function below determines what happens when back button is pressed on this screen 
    handleBackButtonClick() {
      this.props.navigation.navigate('Home')
      
      return true;
    }


    
    render(){
            return (
                <View style={styles.container}>
                  <View style = {styles.Header}>
                  <Image
                        resizeMode='contain'
                            style = {styles.logo}
                        source={require('./img/LightLogo.png')}
                        />
                        
                  </View>
                
                      <View style = {styles.CoronavirusCase}>

                     

                          <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginRight: 20, textAlign:'center'}}>
                            Please press the button below if you suspect that you have the Coronavirus
                            </Text>

                          <TouchableOpacity
                                  style={styles.CoronaCaseButtonStyle}
                                  onPress={() =>{
                                          this.props.navigation.navigate('SubmitCase')
                                  }}
                                      >
                                  <Text style={{ fontSize: 18, color: "white", margin: 10 }}>
                                      Submit coronavirus case
                                  </Text>
                              </TouchableOpacity>
                    </View>
                </View>

                
            )
        }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //textAlign: 'center',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#aed3daff'
  },
  map: {
    width: 200,
    height: 350
  },
  CoronavirusCase: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
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
  CoronaCaseButtonStyle : {
    width: 250,
    height: 60,
    backgroundColor: "#fe5959ff",
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: 10,
   borderRadius:30,
  },
  Header: {
    marginTop: 10,
    marginLeft: 10
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
 
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  logo: {
    width:100,
    height:90,
    marginBottom: 5
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
})

