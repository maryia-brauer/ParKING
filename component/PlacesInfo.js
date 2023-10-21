import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const PlacesInfo = ({route}) => {
    const navigation = useNavigation();
    const data = route?.params?.param;
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate("ParkingSpot", {param : data})}
        >
        <View style={{
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "#E7E7E7",
            paddingVertical: 10,
            borderRadius: 8,
            border: "solid black",
            gap: 5,
            width: 350,
            flex: 1,
            }}>
        <View style={{ paddingHorizontal: 10}}>
        <Text style={{fontWeight: "bold", fontSize:20 }}>Zvejnieku iela 13</Text>
        <Text>Available spots: 10</Text>
        </View>
        <View style={{ paddingHorizontal: 100}}>
        <Image  source={require("../assets/eye.png")}/>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default PlacesInfo

const styles = StyleSheet.create({})