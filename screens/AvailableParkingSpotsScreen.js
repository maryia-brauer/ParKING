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



const AvailableParkingSpotsScreen = () => {
  const navigation = useNavigation();
  const [parkingData, setData] = useState([]);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

   useEffect(() => {
    fetch('http://rhomeserver.ddns.net:8086/api/parking/get/all')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
    console.log(parkingData);
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
          flexDirection: "column",
          backgroundColor: "#E7E7E7",
          paddingVertical: 15,
          borderRadius: 9,
          borderColor: "black",
          borderWidth: 1,
          margin: 5,
          width: 355,
        }}
      >
        <Pressable>
          {parkingData.map((data, i) => {
            return (
              <PlacesInfo
                key={i}
                data={data}
                name={data.address}
                maxSpotsCount={data.maxSpotsCount}
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
