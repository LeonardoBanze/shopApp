import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Shoes from "../../components/Shoes/";

import {useNavigation} from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Tenis</Text>
        <Text style={[styles.text, {color:'#CECECF'}]}>.</Text>
        <Text style={[styles.text, {color:'#CECECF'}]}>MASCULINO</Text>

        <TouchableOpacity
          style={{ position: "absolute", right: 0, alignSelf: "center" }}
        >
          <MaterialIcons name="filter-list" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.line}/>

      <ScrollView>
        <Text style={styles.text}>Lancamentos</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/1.png')} cost='Mt: 1200,00' onClick={() => {navigation.navigate('Detail')}}> Air force</Shoes>
          <Shoes img={require('../../assets/2.png')} cost='Mt: 1400,00' onClick={() => {navigation.navigate('Detail')}}> Air force pro</Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/3.png')} cost='Mt: 1200,00' onClick={() => {navigation.navigate('Detail')}}> Air force</Shoes>
          <Shoes img={require('../../assets/4.png')} cost='Mt: 3400,00' onClick={() => {navigation.navigate('Detail')}}> Air force pro</Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/5.png')} cost='Mt: 3200,00' onClick={() => {navigation.navigate('Detail')}}> Air force</Shoes>
          <Shoes img={require('../../assets/6.png')} cost='Mt: 4400,00' onClick={() => {navigation.navigate('Detail')}}> Air force pro</Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },

  textContainer:{
    flexDirection:'row',
    marginVertical:'5%',
    marginHorizontal: '5%'
  },

  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal:'1%'
  }, 
  line:{
    borderBottomColor:'#D8D8d8',
    borderBottomWidth: 2
  }
});
