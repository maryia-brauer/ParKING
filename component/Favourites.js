import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import PlacesInfo from "./PlacesInfo";
import ProfileFavourite from "./ProfileFavourite";

const Favourites = () => {
  const navigation = useNavigation();
  return (
    <View
      onPress={() => navigation.navigate("ParkingSpots")}
      style={{ flexDirection: "colomn" }}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={["#FB9938", "#FB9938", "#FF544F"]}
          style={styles.container}
        >
          <ScrollView>
            <Pressable>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Favourites
              </Text>
            </Pressable>
         
          <View>
            <ProfileFavourite />
            <ProfileFavourite />
            <ProfileFavourite />
          </View>
          </ScrollView>
        </LinearGradient>
      </View> 
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 120,
    flexShrink: 0,
    borderRadius: 8,
  },
});
