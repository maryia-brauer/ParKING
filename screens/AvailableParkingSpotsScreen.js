import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import PlacesInfo from "../component/PlacesInfo";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import firestore from "@react-native-firebase/firestore";
import { collection, addDocs, getDocs } from "../firebase";

const AvailableParkingSpotsScreen = () => {
  const navigation = useNavigation();
  const [parkingData2, setData2] = useState([]);

  const getAvailableParkingSpots2 = async () => {
    const querySnapshot = await getDocs(collection(db, "parking"));
    const parking = querySnapshot.docs.map((doc) => doc.data());
    console.log(parking);
    setData2(parking);
  };

  useEffect(() => {
    getAvailableParkingSpots2();
  }, []);

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
          Available parking spots:
        </Text>
      </View>
      <View>
        <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
          <View
            style={{
              marginTop: 14,
              borderRadius: 7,
              border: "solid black",
              borderWidth: 1,
            }}
          >
            <TextInput
              style={{
                fontSize: 18,
                width: 300,
                backgroundColor: "white",
                paddingVertical: 8,
              }}
              placeholder="Search"
            />
          </View>
          <View style={{ paddingHorizontal: 4, paddingVertical: 10 }}>
            <Image
              style={{ justifyContent: "space-between" }}
              source={require("../assets/filter.png")}
            />
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          paddingBottom: 10,
          marginTop: 30,
          flexDirection: "colomn",
          backgroundColor: "#E7E7E7",
          paddingVertical: 15,
          borderRadius: 9,
          border: "solid black",
          gap: 5,
          width: 355,
        }}
      >
        <Pressable>
          {parkingData2.map((data, i) => {
            return (
              <PlacesInfo
                key={i}
                data={data}
                name={data.name}
                available={data.spotsAvailable}
              />
            );
          })}
        </Pressable>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 150,
          position: 'absolute",',
        }}
      >
        <Pressable onPress={() => navigation.navigate("AddPlace")}>
          <Image
            style={{ bottom: 100 }}
            source={require("../assets/add.png")}
          ></Image>
        </Pressable>
        <Pressable
          style={{ paddingHorizontal: 20 }}
          onPress={() => navigation.navigate("CityScreen")}
        >
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
