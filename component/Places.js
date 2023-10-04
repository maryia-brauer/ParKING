import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Places = ({name, data}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate("Available", {param : data})}
        >
        <View style={{
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "#E7E7E7",
            paddingVertical: 10,
            borderRadius: 8,
            border: "solid black",
            gap: 5,
            width: 350
            }}>
        <Text style={{padding: 10}}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Places;

const styles = StyleSheet.create({})