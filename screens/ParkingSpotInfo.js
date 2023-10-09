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
  Radio,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import Reviews from "../component/Reviews";
//import axios from 'axios';

const ParkingSpotInfo = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  const [price, setPrice] = useState("free");
  const [pricePerHour, setPricePerHour] = useState("");
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Free",
        value: "option1",
      },
      {
        id: "2",
        label: "Paid",
        value: "option2",
      },
    ],
    []
  );

  const handlePriceChange = (value) => {
    setPrice(value);
    if (value === "paid") {
      setPricePerHour("");
    }
  };

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

      <View
        style={{
          backgroundColor: "#D3D3D3",
          width: 350,
          paddingBottom: 10,
          marginTop: 150,
          flex: 1,
        }}
      >
        <View style={{ paddingHorizontal: 10 }}>
          <View>
            <Text
              style={{
                paddingTop: 10,
                fontWeight: "bold",
                paddingHorizontal: 10,
                fontSize: 20,
              }}
            >
              Ielas nosaukums
            </Text>
          </View>
          <View style={{ paddingHorizontal: 50, paddingVertical: 10 }}>
            <Image source={require("../assets/report.png")} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 300,
              backgroundColor: "white",
              top: 10,
              left: 10,
              bottom: 10,
              right: 10,
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Price:</Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Owned by:</Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Spots available:
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Handicap spots:
              </Text>
            </View>
            <TouchableOpacity>       
            <View style={{ paddingHorizontal: 140, paddingVertical: 40}}>
              <Image source={require("../assets/fav.png")} />
            </View>
            </TouchableOpacity> 
          </View>
        </View>
        <View
          style={{
            width: 300,
            backgroundColor: "white",
            top: 20,
            left: 10,
            bottom: 10,
            right: 10,
            paddingTop: 10 
          }}
        >
          <Reviews/>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 100,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Available")}
            style={{ paddingVertical: 40, paddingHorizontal: 10 }}
          >
            <Image source={require("../assets/here.png")}></Image>
          </Pressable>
          <Pressable
            style={{ paddingHorizontal: 10, paddingVertical: 40 }}
            onPress={() => navigation.navigate("Available")}
          >
            <Image style={{}} source={require("../assets/reserve.png")}></Image>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Available")}
          style={{ paddingVertical: 50, paddingHorizontal: 35 }}
        >
          <Image source={require("../assets/review.png")}></Image>
        </Pressable>
        <Pressable
          style={{ paddingHorizontal: 35, paddingVertical: 50 }}
          onPress={() => navigation.navigate("Available")}
        >
          <Image style={{}} source={require("../assets/back.png")}></Image>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ParkingSpotInfo;

const styles = StyleSheet.create({});
