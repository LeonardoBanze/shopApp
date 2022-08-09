import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'

export default function Dot(props) {
  return (
    <View style={[styles.container, {backgroundColor:props.color}]}>
     
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    width: Dimensions.get('window').width * 0.050,
    height:Dimensions.get('window').width * 0.050,
    borderRadius:Dimensions.get('window').width * 0.050 /2,
    marginHorizontal:'2.5%',
    elevation:5

  }

}) 