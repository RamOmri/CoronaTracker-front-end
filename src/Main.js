// src/screens/Home.js

import React from 'react'
import {
  StyleSheet,
  Text, TextInput,
  View, Button, ImageBackground,
  Image, TouchableOpacity,
  Alert,StatusBar,ScrollView,
  KeyboardAvoidingView, BackHandler,
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



export default class Home extends React.Component{

    state = {
      username: '',
      ID: 'getMyParam(this.props.navigation, ',
      coronavirusCases: '',
      coronavirusDeaths: '',

      
        latitude: LATITUDE,
        longitude: LONGITUDE,
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        coordinate: new AnimatedRegion({
          latitude: LATITUDE,
          longitude:LONGITUDE,
          latitudeDelta:0,
          longitudeDelta: 0
        })
    }


///////////////////////////////////////////////////////////////////////
    constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state.ID = this.props.route.params.id 
     
    }  
    
    
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    
    }
    //function below determines what happens when back button is pressed on this screen 
    handleBackButtonClick() {
      this.props.navigation.navigate('Profile')
      
      return true;
    }
//////////////////////////////////////////////////////////////////////

    componentDidMount(){


     // this.timer = setInterval(()=> this.sendCoordinates(), 5000)
    
      ////////////////// this sets the deaths and cases values using api from the internet/////
        fetch('https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true', { 
            method: 'GET',
            
          }).then((response) => {
            const status = response.status;
            const data = response.json();
            return Promise.all([status, data])
          }).then(([res, data]) => {
               if(res == '400'){
                 alert(res + " could not retrieve covid-19 data")
                 return;
               }
              this.setState({coronavirusCases: JSON.stringify(data.infectedByRegion[4].infectedCount)})
              this.setState({coronavirusDeaths: JSON.stringify(data.infectedByRegion[4].deceasedCount)})
        
               
          });

          BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick); // handles back button presses
    
          ////////////////////////////// tracks users and sets map ///////////////////////////////
          const { coordinate } = this.state
         this.watchID = Geolocation.watchPosition(
           position => {
             const { routeCoordinates, distanceTravelled } = this.state
             const { latitude, longitude } = position.coords
   
             const newCoordinate = {
               latitude,
               longitude
             }
             if(Platform.OS === 'android'){
              
               if(this.marker) {
                 this.marker._component.animateMarkerToCoordinate(
                   newCoordinate, 500)
               }
             }
                 this.setState({
                 latitude,
                 longitude,
                 routeCoordinates:
                   routeCoordinates.concat([newCoordinate]),
                   distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
                   prevLatLng: newCoordinate
               })
               this.forceUpdate()
           },
           error=> alert(error),
             {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10}
   
         )
           
      
    }
calcDistance = (newLatLng) => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
      };

      getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      });
      

      sendDelayedCoordinates=()=>{

        setTimeout(function(){

          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
          sendCoords ={ 
            userID: this.state.ID,
            route: this.state.routeCoordinates }
            this.state.routeCoordinates = []
          fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendCoords)
          }).then((response)=> {
            if(JSON.stringify(response.status) !== '200') alert('error ' + JSON.stringify(response.status))
            else this.props.navigation.navigate('Home')
          }).catch(err=>alert(err))
        }, 5000);


      }

   
  render(){
      return (  
          <View style = {styles.container}>
            <Text style = {styles.Header}> Location: Utrecht</Text>
            <View style = {{borderBottomColor: 'white', borderBottomWidth: 2, flexDirection:'row', marginTop: 5,}}>
             <Image
                        resizeMode='contain'
                            style = {styles.logo}
                        source={require('./img/DarkLogo.png')}
                        />
                
                <Text style = {styles.information}><Text style = {styles.Header}>Cases  </Text>
                {this.state.coronavirusCases}</Text>

                <Text style = {styles.information}><Text style = {styles.Header}>Deaths {"\n"} </Text>
                {this.state.coronavirusDeaths}</Text>

            </View>

            <View style = {{alignItems: 'center'}}>

              
                         <MapView
                          style = {styles.map}
                          showsUserLocation
                          followsUserLocation
                          loadingEnabled
                          region = {this.getMapRegion()}
                        >
                          
                            <Marker.Animated ref = {marker =>{
                                this.marker = marker
                            }}
                            coordinate = {this.state.coordinate}
                            />
                          </MapView> 


            </View>
            
        </View>
      )
    }
    }
const styles = StyleSheet.create({
  container: {
      height: '100%',
    //flex: 1,
    //textAlign: 'center',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#395ac9ff'
  },
  Header :{
    marginLeft: 100,
    fontSize: 15,
    color: 'white',
  },
  information: {
        marginTop:15,
        marginLeft: 30,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
  },  
  map: {
    marginTop: 10,
    width: 200,
    height: 350
  },  
  logo: {
    width:100,
    height:90,
    marginBottom: 5
  },
  
})

