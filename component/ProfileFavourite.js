import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const ProfileFavourite = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity >
    <Pressable >
    <View style={styles.favourite}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        Ielas nosaukums
      </Text>
      <Text>Available spots:</Text>
    </View>
  </Pressable>
  </TouchableOpacity>
  )
}

export default ProfileFavourite

const styles = StyleSheet.create({
    favourite: {
        paddingBottom: 15,
        marginTop: 10,
        flexDirection: "colomn",
        backgroundColor: "#E7E7E7",
        paddingVertical: 5,
        borderRadius: 9,
        border: "solid black",
        gap: 5,
        width: 270,
        alignSelf: "center",
      },
})