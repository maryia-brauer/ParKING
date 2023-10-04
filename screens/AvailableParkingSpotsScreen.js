import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PlacesInfo from "../component/PlacesInfo";

const AvailableParkingSpotsScreen = ({ route }) => {
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
        <Text style={{ marginTop: 150, width: 350, paddingBottom: 5 }}>
          Available parking spots: {data?.name}
        </Text>
      </View>
      <View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 7,
            border: "solid black",
            borderWidth: 0.5,
          }}
        >
          <TextInput
            style={{
              fontSize: 20,
              width: 300,
              backgroundColor: "white",
              paddingVertical: 10,
            }}
            placeholder="Search"
          />
          <Image
            style={{ justifyContent: "space-between" }}
            source={require("../assets/filter.png")}
          />
        </View>
      </View>
      <ScrollView>
        <View>
          <PlacesInfo />
        </View>
      </ScrollView>

      <View         
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
        <Pressable
          onPress={() => navigation.navigate("AddPlace")}
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

export default AvailableParkingSpotsScreen;

const styles = StyleSheet.create({});
