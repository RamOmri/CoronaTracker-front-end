// src/screens/Home.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function MakeProfile() {
  return (
    <View style={styles.container}>
      <Image
                        resizeMode='contain'
                            style = {styles.logo}
                        source={require('./img/DarkLogo.png')}
                        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },logo: {
    marginTop:70,
    width:300,
    height:195,
    marginBottom: 15
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default MakeProfile