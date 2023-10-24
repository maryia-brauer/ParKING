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
  Button,
} from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import Reviews from "../component/Reviews";
import Modal from "react-native-modal";
import Slider from "@react-native-community/slider";

const ParkingSpotInfo = ({ route }) => {
  const navigation = useNavigation();
  const parkingData = route?.params?.param;
  const [price, setPrice] = useState("free");
  const [pricePerHour, setPricePerHour] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalReviewVisible, setModalReviewVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [icon, setIcon] = useState(require("../assets/starB.png"));

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalReview = () => {
    setModalReviewVisible(!isModalReviewVisible);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
    if (value === "paid") {
      setPricePerHour("");
    }
  };

  const handleLikeButtonPress = () => {
    if (!isLiked) {
      setIcon(require("../assets/starF.png"));
    } else {
      setIcon(require("../assets/starB.png"));
    }

    setIsLiked(!isLiked);
    console.log(isLiked);
    // Add the place to favorites
    // ...
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

      <View
        style={{
          backgroundColor: "#D3D3D3",
          width: 350,
          paddingBottom: 10,
          marginTop: 150,
          flex: 1,
        }}
      >
        <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
          <View>
            <Text
              style={{
                paddingTop: 10,
                fontWeight: "bold",
                paddingHorizontal: 10,
                fontSize: 22,
              }}
            >
              Ielas nosaukums:
            </Text>
            <Text
              style={{
                paddingTop: 10,
                fontWeight: "bold",
                paddingHorizontal: 10,
                fontSize: 18,
              }}
            >
              {route?.params?.param?.name}
            </Text>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Image source={require("../assets/report.png")} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 300,
              backgroundColor: "white",
              top: 10,
              left: 10,
              bottom: 10,
              right: 10,
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Price: {route?.params?.param?.price} Euro
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Owned by: {route?.params?.param?.owner}
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Spots available: {route?.params?.param?.spotsAvailable}
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Handicap spots: {route?.params?.param?.HandicapSpots}
              </Text>
            </View>
            <TouchableOpacity onPress={handleLikeButtonPress}>
              <View style={{ paddingHorizontal: 70, paddingVertical: 40 }}>
                <Image source={icon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 300,
            backgroundColor: "white",
            top: 20,
            left: 10,
            bottom: 10,
            right: 10,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingLeft: 10,
              paddingVertical: 10,
            }}
          >
            Reviews:
          </Text>
          <Text style={{ paddingLeft: 10 }}>
            {route?.params?.param?.reviews}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 100,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Available")}
            style={{ paddingVertical: 50, paddingHorizontal: 10 }}
          >
            <Image source={require("../assets/here.png")}></Image>
          </Pressable>

          {/*Reserve button*/}

          <TouchableOpacity
            style={{ paddingHorizontal: 10, paddingVertical: 50 }}
          >
            <Pressable onPress={toggleModal}>
              <Image
                style={{}}
                source={require("../assets/reserve.png")}
              ></Image>
              <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                style={{ width: 300, alignSelf: "center" }}
              >
                <View style={{ backgroundColor: "white" }}>
                  <View style={{ alignSelf: "center", paddingVertical: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      Reserve:
                    </Text>
                  </View>
                  <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      Parking space address[placeholder]
                    </Text>
                  </View>
                  <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontSize: 11, paddingVertical: 7 }}>
                      How long are you going to stay there?
                    </Text>
                  </View>
                  <Slider
                    style={{ width: 200, height: 30, alignSelf: "center" }}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#E7DFDA"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="orange"
                  />

                  <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontSize: 11, paddingVertical: 18 }}>
                      2h | $6.80 [placeholders]
                    </Text>
                  </View>
                  <View style={{ alignSelf: "center", paddingVertical: 5 }}>
                    <Pressable
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 10,
                        paddingHorizontal: 54,
                        borderRadius: 12,
                        elevation: 2,
                        backgroundColor: "#FE8F4E",
                        bottom: 10,
                        shadowColor: "black",
                      }}
                      onPress={{}}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          lineHeight: 16,
                          fontWeight: "bold",
                          letterSpacing: 0.25,
                          color: "#0F0C0A",
                        }}
                      >
                        PAY
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>

      {/*Review button */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={toggleModalReview}
          style={{ paddingVertical: 50, paddingHorizontal: 35 }}
        >
          <Image source={require("../assets/review.png")}></Image>
          <Modal
            isVisible={isModalReviewVisible}
            onBackdropPress={() => setModalReviewVisible(false)}
            style={{ backgroundColor: "white", alignItems: "center" }}
          >
            <View style={{ backgroundColor: "white" }}>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Write a review
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,

                backgroundColor: "grey",
                paddingVertical: 8,
                borderRadius: 8,
                border: "solid black",
                borderWidth: 0.5,
                gap: 5,
              }}
            >
              <View style={{ width: 300, paddingVertical: 10 }}>
                <TextInput
                  placeholder="Title"
                  style={{ fontWeight: "bold", fontSize: 15 }}
                />
              </View>
            </View>
            <View style={{ backgroundColor: "grey" }}>
              <View style={{ width: 300, paddingVertical: 20 }}>
                <TextInput
                  placeholder="Review message..."
                  style={{ fontWeight: "bold", fontSize: 15 }}
                />
              </View>

              <View
                style={{
                  alignSelf: "center",
                  paddingVertical: 5,
                  bottom: -100,
                }}
              >
                <Pressable
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 54,
                    borderRadius: 12,
                    elevation: 2,
                    backgroundColor: "#FE8F4E",

                    shadowColor: "black",
                  }}
                  onPress={{}}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      lineHeight: 16,
                      fontWeight: "bold",
                      letterSpacing: 0.25,
                      color: "#0F0C0A",
                    }}
                  >
                    Submit
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </Pressable>

        {/*Review */}

        <Pressable
          style={{ paddingHorizontal: 35, paddingVertical: 50 }}
          onPress={() => navigation.navigate("Available")}
        >
          <Image style={{}} source={require("../assets/back.png")}></Image>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ParkingSpotInfo;

const styles = StyleSheet.create({});
