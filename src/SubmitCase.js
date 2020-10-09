// src/screens/Home.js

import React from 'react'
import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert,StatusBar,ScrollView,
  KeyboardAvoidingView, 
} from 'react-native'
import { CheckBox } from 'react-native-elements'

export default class Profile extends React.Component{

    state = {
      username: '',
      checkedCoughing: false,
      checkedDifficultyBreathing: false,
      checkedNasalCongestion: false,
      checkedHeadAches: false,
      checkedFever: false,
      checkedDiarrhea: false,
    }
    
    
    render(){
            return (
                <View style={styles.container}>
                    <View style = {{alignItems: 'center', marginBottom: 20, borderBottomColor: 'white', borderBottomWidth: 2, marginBottom: 20}}>
                    <Image
                        resizeMode='contain'
                            style = {styles.logo}
                        source={require('./img/RedLogo.png')}
                        />
                        <Text style ={styles.Header}> Please check the box next to the symptoms that you are currently experiencing below</Text>
                 </View>
                        <ScrollView >
                                <View style = {styles.symptomsList}>
                                    <CheckBox
                                            
                                            
                                            checked={this.state.checkedCoughing}
                                            checkedIcon={<Image style = {styles.iconStyle} source={require('./img/checkedIcon.png')} />}
                                            uncheckedIcon={<Image style = {styles.iconStyle} source={require('./img/uncheckedIcon.png')} />}
                                            onPress={() => this.setState({checkedCoughing: !this.state.checkedCoughing})}
                                        /><Text style = {styles.symptom}> Coughing </Text>
                                        </View>

                                        <View style = {styles.symptomsList}>
                                    <CheckBox
                                            
                                            
                                            checked={this.state.checkedDifficultyBreathing}
                                            checkedIcon={<Image style = {styles.iconStyle} source={require('./img/checkedIcon.png')} />}
                                            uncheckedIcon={<Image style = {styles.iconStyle} source={require('./img/uncheckedIcon.png')} />}
                                            onPress={() => this.setState({checkedDifficultyBreathing: !this.state.checkedDifficultyBreathing})}
                                        /><Text style = {styles.symptom}> Difficulty breathing </Text>
                                        </View>

                                        <View style = {styles.symptomsList}>
                                    <CheckBox
                                            
                                            
                                            checked={this.state.checkedNasalCongestion}
                                            checkedIcon={<Image style = {styles.iconStyle} source={require('./img/checkedIcon.png')} />}
                                            uncheckedIcon={<Image style = {styles.iconStyle} source={require('./img/uncheckedIcon.png')} />}
                                            onPress={() => this.setState({checkedNasalCongestion: !this.state.checkedNasalCongestion})}
                                        /><Text style = {styles.symptom}> Nasal congestion </Text>
                                        </View>

                                        <View style = {styles.symptomsList}>
                                            <CheckBox
                                                    
                                                    
                                                    checked={this.state.checkedHeadAches}
                                                    checkedIcon={<Image style = {styles.iconStyle} source={require('./img/checkedIcon.png')} />}
                                                    uncheckedIcon={<Image style = {styles.iconStyle} source={require('./img/uncheckedIcon.png')} />}
                                                    onPress={() => this.setState({checkedHeadAches: !this.state.checkedHeadAches})}
                                                /><Text style = {styles.symptom}> Headaches </Text>
                                        </View>

                                        <View style = {styles.symptomsList}>
                                            <CheckBox
                                                    
                                                    
                                                    checked={this.state.checkedFever}
                                                    checkedIcon={<Image style = {styles.iconStyle} source={require('./img/checkedIcon.png')} />}
                                                    uncheckedIcon={<Image style = {styles.iconStyle} source={require('./img/uncheckedIcon.png')} />}
                                                    onPress={() => this.setState({checkedFever: !this.state.checkedFever})}
                                                /><Text style = {styles.symptom}> Fever </Text>
                                        </View>

                                        <View style = {styles.symptomsList}>
                                            <CheckBox
                                                    
                                                    
                                                    checked={this.state.checkedDiarrhea}
                                                    checkedIcon={<Image style = {styles.iconStyle} source={require('./img/checkedIcon.png')} />}
                                                    uncheckedIcon={<Image style = {styles.iconStyle} source={require('./img/uncheckedIcon.png')} />}
                                                    onPress={() => this.setState({checkedDiarrhea: !this.state.checkedDiarrhea})}
                                                /><Text style = {styles.symptom}> Diarrhea </Text>
                                        </View>

                                <View style ={{justifyContent: 'center', alignItems: 'center'}}>
                                        <TouchableOpacity
                                  style={styles.SubmitButton}
                                  onPress={() =>{
                                          this.props.navigation.pop()
                                  }}
                                      >
                                  <Text style={{ fontSize: 18, color: "white", margin: 10 }}>
                                      Submit 
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
  //  alignItems: 'center',
    backgroundColor: '#fe5959ff'
  },
  symptom: {
      fontSize: 20,
      color: 'white',
      marginTop: 16,
  },
  symptomsList : {
     flexDirection: 'row'
  },
  SubmitButton: {
    width: 220,
    height: 50,
    backgroundColor: "#711401ff",
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: 20,
   borderRadius:30,
   marginBottom: 20,
  },
  checkboxContainer: {
    width: 80,
    height: 40,
    backgroundColor: '#b6ff84ff',
    alignContent: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
      height: 30,
      width: 30,
  },
  checkboxText: {
    /*color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 40,
    fontSize: 18*/
  },
  CoronavirusCase: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 370
  },  

  Header: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 4,
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
    marginTop:15,
    width:180,
    height:160,
    marginBottom: 0
  },
})

