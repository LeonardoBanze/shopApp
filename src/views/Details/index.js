import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton";
import Button from "../../components/Button"
export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Air force",
  });
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>Mt: 1200,00</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 34 }]}>Air force</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2279f4" />
          <Dot color="#ddd" />
          <Dot color="#000" />
          <Dot color="#f8f8f8" />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">
              40
            </SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>40</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Air force</Text>
          <Text style={styles.textContent}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, hendrerit
            porttitor pharetra vel nostra dis luctus, habitant facilisis
            tristique tempus morbi maecenas. Tincidunt at ad convallis torquent
            praesent libero condimentum consequat montes dapibus semper,
            sollicitudin primis mollis eleifend aenean imperdiet vehicula
            venenatis gravida.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Materia: Mesh
          </Text>
        </View>
        <Button/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent:{
    fontSize:16,
    lineHeight: 25,
    marginVertical:'2%',
    paddingHorizontal:'2%'

  },
  textTitle: {
    fontSize:22,
    marginVertical:'2%',
  },
  textList: {
    fontSize:16,
    lineHeight: 25,
  }
 
});
