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
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Places from "../component/Places";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const CityScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

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
        <Text style={{ marginTop: 150, width: 350, paddingBottom: 5 }}>
          Choose a city
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            paddingVertical: 5,
            borderRadius: 8,
            border: "solid black",
            borderWidth: 0.5,
            gap: 5,
          }}
        >
          <TextInput
            style={{ fontSize: 20, width: 350 }}
            placeholder="Search"
          />
        </View>
        <View>
        <Places /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default CityScreen;

const styles = StyleSheet.create({});
