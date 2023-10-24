import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Places = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Available")}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "#E7E7E7",
            paddingVertical: 10,
            borderRadius: 8,
            border: "solid black",
            gap: 5,
            width: 350,
          }}
        >
          <Text style={{ padding: 10 }}>Valmiera</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Places;

const styles = StyleSheet.create({});
