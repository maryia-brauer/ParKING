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
import {useNavigation} from '@react-navigation/native';
import Places from '../component/Places';


const CityScreen = () => {
const [places, setData] = useState(data); 
const navigation = useNavigation();

useEffect(() => {
 // fetch('http://192.168.8.162:3001/zoo')
  //.then(res => res.json())
  //.then(data => setData(data))
  //.catch(err => console.log(err));
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
        <Text style={{marginTop: 150, width: 350, paddingBottom: 5}}>Choose a city</Text>
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
          }}>
        <TextInput style={{ fontSize: 20, width: 350 }} placeholder="Search"/>
      </View>
      <View>
        {places.map((data, i) => {
          return (
            <Places
              key={i}
              name={data.city}
              data={data}
            />
          )
        })}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// example test adata
const data = [
  {
    "city": "San Francisco",
    "parkingSpaces": [
      {
        "address": "123 Main Street",
        "name": "Union Square Garage",
        "type": "public",
        "price": 25,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 Market Street",
        "name": "Embarcadero Center Garage",
        "type": "private",
        "price": 30,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  },
  {
    "city": "San Francisco",
    "parkingSpaces": [
      {
        "address": "123 Main Street",
        "name": "Union Square Garage",
        "type": "public",
        "price": 25,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 Market Street",
        "name": "Embarcadero Center Garage",
        "type": "private",
        "price": 30,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  },
  {
    "city": "San Francisco",
    "parkingSpaces": [
      {
        "address": "123 Main Street",
        "name": "Union Square Garage",
        "type": "public",
        "price": 25,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 Market Street",
        "name": "Embarcadero Center Garage",
        "type": "private",
        "price": 30,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  },
  {
    "city": "San Francisco",
    "parkingSpaces": [
      {
        "address": "123 Main Street",
        "name": "Union Square Garage",
        "type": "public",
        "price": 25,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 Market Street",
        "name": "Embarcadero Center Garage",
        "type": "private",
        "price": 30,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  },
  {
    "city": "San Francisco",
    "parkingSpaces": [
      {
        "address": "123 Main Street",
        "name": "Union Square Garage",
        "type": "public",
        "price": 25,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 Market Street",
        "name": "Embarcadero Center Garage",
        "type": "private",
        "price": 30,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  },
  {
    "city": "San Francisco",
    "parkingSpaces": [
      {
        "address": "123 Main Street",
        "name": "Union Square Garage",
        "type": "public",
        "price": 25,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 Market Street",
        "name": "Embarcadero Center Garage",
        "type": "private",
        "price": 30,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  },
  {
    "city": "New York City",
    "parkingSpaces": [
      {
        "address": "1 Times Square",
        "name": "Times Square Garage",
        "type": "public",
        "price": 40,
        "image": "https://example.com/parking-garage.jpg"
      },
      {
        "address": "456 5th Avenue",
        "name": "Rockefeller Center Garage",
        "type": "private",
        "price": 50,
        "image": "https://example.com/parking-garage.jpg"
      }
    ]
  }
]

export default CityScreen

const styles = StyleSheet.create({})