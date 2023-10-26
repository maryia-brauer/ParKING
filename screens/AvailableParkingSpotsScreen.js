import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import PlacesInfo from "../component/PlacesInfo";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "../firebase";

const AvailableParkingSpotsScreen = () => {
  const navigation = useNavigation();
  const [parkingData2, setData2] = useState([]);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const getAvailableParkingSpots2 = async () => {
    const spotsCollection = collection(db, "parking");
    let filteredQuery = spotsCollection;

    selectedFilters.forEach((filter) => {
      filteredQuery = query(filteredQuery, where(filter.field, filter.operator, filter.value));
    });

    const querySnapshot = await getDocs(filteredQuery);
    const parking = querySnapshot.docs.map((doc) => doc.data());
    setData2(parking);
  };

  useEffect(() => {
    getAvailableParkingSpots2();
  }, [selectedFilters]);

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const handleFilterAction = (filterType) => {
    let filter = {};
    switch (filterType) {
      case "zeroCost":
        filter = { field: "price", operator: "==", value: 0 };
        break;
      case "payPerHour":
        filter = { field: "price", operator: ">", value: 0 };
        break;
      case "forDisabled":
        filter = { field: "HandicapSpots", operator: ">=", value: 1 };
        break;
      case "clearAllFilters":
        setSelectedFilters([]);
        break;
      default:
        break;
    }

    if (filter.field) {
      setSelectedFilters([...selectedFilters, filter]);
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
              borderColor: "black",
              borderWidth: 1,
              marginLeft: 30,
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
          <View style={{ marginRight: 20, paddingHorizontal: 5, paddingVertical: 0}}>
            <TouchableOpacity onPress={toggleFilterModal} style={{ marginTop: 10 }}>
              <Image
                style={{ justifyContent: "space-between" }}
                source={require("../assets/filter.png")}
              />
            </TouchableOpacity>
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
        {parkingData2.map((data, i) => {
          return (
            <PlacesInfo
              key={i}
              data={data}
              name={data.name}
              available={data.spotsAvailable}
            />
          );
        })}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
                  isVisible={isFilterModalVisible}
                  onBackdropPress={() => isFilterModalVisible(false)}
        visible={isFilterModalVisible}
        onRequestClose={toggleFilterModal}

      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: 327,
              height: 362,
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
              Filter By:
            </Text>
            <TouchableOpacity
              onPress={toggleFilterModal}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <Image
                source={require("../assets/filterCloseButton.png")}
                style={{ width: 16, height: 16 }}
              />
            </TouchableOpacity>
            {}
            <TouchableOpacity
              style={styles.filterButtonContainer}
              onPress={() => handleFilterAction("zeroCost")}
            >
              <Image
                source={require("../assets/zeroCostButton.png")}
                style={{ width: 301, height: 63 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButtonContainer}
              onPress={() => handleFilterAction("payPerHour")}
            >
              <Image
                source={require("../assets/payperhourButton.png")}
                style={{ width: 301, height: 63 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButtonContainer}
              onPress={() => handleFilterAction("forDisabled")}
            >
              <Image
                source={require("../assets/forDisabledButton.png")}
                style={{ width: 301, height: 63 }}
              />
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                style={styles.clearAllFilterContainer}
                onPress={() => handleFilterAction("clearAllFilters")}
              >
                <Image
                  source={require("../assets/clearAllFilter.png")}
                  style={{ width: 301, height: 43 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        <Pressable onPress={() => navigation.navigate("AddPlace")}>
          <Image source={require("../assets/add.png")} />
        </Pressable>
        <Pressable
          style={{ paddingHorizontal: 20 }}
          onPress={() => navigation.navigate("CityScreen")}
        >
          <Image source={require("../assets/back.png")} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filterButtonContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  clearAllFilterContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default AvailableParkingSpotsScreen;
