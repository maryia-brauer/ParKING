import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const PlacesInfo = ({data, name, available}) => {
    const navigation = useNavigation();
 
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate("ParkingSpot", {param : data})}
        >
        <View >
        <View style={{ paddingHorizontal: 10}}>
        <Text style={{fontWeight: "bold", fontSize:20 }}>{name}</Text>
        <Text>Available spots: {available}</Text>
        </View>
        <View style={{ paddingHorizontal: 250, bottom: 45}}>
        <Image  source={require("../assets/eye.png")}/>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default PlacesInfo

const styles = StyleSheet.create({})