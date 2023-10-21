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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import PlacesInfo from "../component/PlacesInfo";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";


const AvailableParkingSpotsScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const starCountRef = ref(db, "parkingData/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const places = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],

      }));
      console.log(places);
      setData(places);
  })
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
          Available parking spots: {data?.name}
        </Text>
      </View>
      <View>
        <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
          <View
            style={{
              marginTop: 10,
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
          </View>
          <View style={{ paddingHorizontal: 4, paddingVertical: 10 }}>
            <Image
              style={{ justifyContent: "space-between" }}
              source={require("../assets/filter.png")}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <Pressable >

              {data.map((item, index) => {
                return (
                  <PlacesInfo key={index} {...item} />
                )
              } )

              }
  
        </Pressable>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
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
