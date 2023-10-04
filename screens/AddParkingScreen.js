import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
//import axios from 'axios';

const AddParkingScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ top: 100 }}
          source={require("../assets/mainLogo.png")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 28,
            marginTop: 150,
            fontWeight: "bold",
            paddingBottom: 10,
          }}
        >
          ADD A PARKING SPOT
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "grey", width: 350, paddingBottom: 5 }}> 
      <Text style={{paddingTop: 10}}>Where is the spot located?</Text>
      </View>
      <View         
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
        <Pressable
          onPress={() => navigation.navigate("Available")}
        >
          <Image
            style={{ bottom: 100 }}
            source={require("../assets/add.png")}
          ></Image>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("CityScreen")}>
          <Image
            style={{ bottom: 100 }}
            source={require("../assets/back.png")}
          ></Image>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddParkingScreen;

const styles = StyleSheet.create({});
