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
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';

const AddParkingScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  const [price, setPrice] = useState("free");
  const [pricePerHour, setPricePerHour] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [isChecked, setChecked] = useState(false);

  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Free',
        value: 'option1'
    },
    {
        id: '2',
        label: 'Paid',
        value: 'option2'
    }
]), []);

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
      <View
        style={{ backgroundColor: "#D3D3D3", width: 350, paddingBottom: 10 }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ paddingTop: 10 }}>Where is the spot located?</Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "white",
              paddingVertical: 2,
              borderRadius: 10,
              border: "solid black",
              borderWidth: 1,
            }}
          >
            <TextInput
              style={{ fontSize: 17, width: 200 }}
              placeholder="Add a street address"
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ paddingTop: 10 }}>
            How many vehicles can be parked there?
          </Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "white",
              paddingVertical: 2,
              borderRadius: 10,
              border: "solid black",
              borderWidth: 1,
            }}
          >
            <TextInput
              style={{ fontSize: 17, width: 200 }}
              placeholder="Add a street address"
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ paddingTop: 10 }}>
            Is the parking for free or paid?
          </Text>
          <RadioGroup
            layout="row"
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
        {selectedId === '2' && (
          <View>          
           <Text style={{ paddingTop: 10 }}>
            How much per hour?
          </Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "white",
              paddingVertical: 2,
              borderRadius: 10,
              border: "solid black",
              borderWidth: 1,
            }}
          >

            <TextInput
              style={{ fontSize: 17, width: 200 }}
              placeholder="Add price"
            />
          </View>
          </View>
          )}
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
            }}
          >
          <Checkbox  color={isChecked ? 'grey' : 'black'} value={isChecked} onValueChange={setChecked}/>
            <Text style={{paddingLeft: 10}} >There are disabled-designed spots</Text>
          </View>
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
          style={{ paddingVertical: 50 }}
        >
          <Image source={require("../assets/confirm.png")}></Image>
        </Pressable>
        <Pressable
          style={{ paddingHorizontal: 15, paddingVertical: 50 }}
          onPress={() => navigation.navigate("Available")}
        >
          <Image style={{}} source={require("../assets/back.png")}></Image>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddParkingScreen;

const styles = StyleSheet.create({});
