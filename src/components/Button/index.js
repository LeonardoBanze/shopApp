import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}>Comprar</Text>


        </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center'
    },

    btnContainer: {
        width:'98%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius:5,
        marginVertical:'5%',
        justifyContent:'center',
        alignItems: 'center',


    },

    title: {
        fontSize:17,
        color:'#fff',
        
    }
})