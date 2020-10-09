import React from 'react'
import { StyleSheet, View, Text, Image,
     Button, TouchableOpacity } from 'react-native'


function WelcomePage({navigation}){

 // render(){
        return (
            <View style={styles.container}>
               
                   
                        <Image
                        resizeMode='contain'
                            style = {styles.logo}
                        source={require('./img/DarkLogo.png')}
                        />
                <View styles = {{justifyContent: 'center', flexdirection: 'row', marginBottom: 10}}>
                        <Text style={styles.text}>Welcome to the CoronaVirus Tracker </Text>
                </View>

                <View style = {{flexDirection: 'row'}}>
                        <TouchableOpacity
                        style={styles.loginButtonStyle}
                        onPress={() =>{
                            navigation.navigate('Login')
                        }}
                            >
                        <Text style={{ fontSize: 18, color: "white" }}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.registerButtonStyle}
                        onPress={() =>{
                                navigation.navigate('Register')
                        }}
                            >
                        <Text style={{ fontSize: 18, color: "white" }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        }
//}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //textAlign: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#395ac9ff'
  },
  loginButtonStyle : {
    width: 130,
    height: 45,
    backgroundColor: "#1a2763ff",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  registerButtonStyle : {
    width: 130,
    height: 45,
    backgroundColor: "#1a2763ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop:70,
    width:300,
    height:195,
    marginBottom: 15
  },
  text: {
    color: '#101010',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Arial Black',
    textAlign: 'center',
    color: 'white',
    flexDirection: 'column',
    marginBottom: 15,
  }
})

export default WelcomePage