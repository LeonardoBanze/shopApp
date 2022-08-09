import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function Shoes(props) {

    function filterList (desc){
        if(desc.length < 27){
            return desc;
        }

        return `${desc.substring(0, 22)}...`
    }
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image source={props.img} style={styles.shoesImg} />
        <Text style={styles.shoesText}>{filterList(props.children)}</Text>
        <View opacity={0.4}>
          <Text style={styles.shoesText}>{props.cost}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16,
  },
});
