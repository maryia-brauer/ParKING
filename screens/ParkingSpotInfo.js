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
import React, { useState, useMemo, useEffect } from "react";
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
  const [reviewData, setReviewData] = useState([]);
  const [starRating, setStarRating] = useState(0);
  const [isReportModalVisible, setReportModalVisible] = useState(false);

  

  const url = 'http://rhomeserver.ddns.net:8086/api/review/get/all';

  useEffect(() => {
    const userId = route?.params?.param?.partnerId;
    fetch('http://rhomeserver.ddns.net:8086/api/review/get/all')
    .then(res => res.json())
    .then(data => setReviewData(data))
    .catch(err => console.log(err));
    console.log(reviewData);
    console.log(userId);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalReview = () => {
    setModalReviewVisible(!isModalReviewVisible);
  };
  const toggleReportModal = () => {
    setReportModalVisible(!isReportModalVisible);
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
              {route?.params?.param?.address}
            </Text>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
          <TouchableOpacity onPress={toggleReportModal}>
              <Image source={require("../assets/report.png")} />
            </TouchableOpacity>
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
                Owned by: {route?.params?.param?.partnerId}
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Spots taken: {route?.params?.param?.spotsTaken}
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                Handicap spots available: {route?.params?.param?.isDisabled ? "Yes" : "No"}
              </Text>
              <Text style={{ paddingTop: 10, paddingLeft: 10 }}>
                IsPremium: {route?.params?.param?.isPremium ? "Yes" : "No"}
              </Text>
            </View>
            <TouchableOpacity onPress={handleLikeButtonPress}>
              <View style={{ paddingHorizontal: 50, paddingVertical: 40 }}>
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
          
            {reviewData.map((data, i) => {
              return (
                <Reviews
                  key={i}
                  data={data}
                  partnerId={route?.params?.param?.partnerId}/>
            );
            })}
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
                      Parking space address
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
                      2h | $6.80 
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
  animationType="slide"
  isVisible={isModalReviewVisible}
  onBackdropPress={() => setModalReviewVisible(false)}
  style={{
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    borderRadius: 10,
  }}
>
  <TouchableOpacity
    onPress={toggleModalReview}
    style={{
      position: "absolute",
      top: 15,
      right: 15,
    }}
  >
    <Image
      source={require("../assets/filterCloseButton.png")}
      style={{ width: 16, height: 16 }}
    />
  </TouchableOpacity>
  <View style={{ backgroundColor: "white" }}>
    <View style={{ paddingVertical: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 22 }}>
        Write a review
      </Text>
    </View>
  </View>

  <View
    style={{
      marginTop: 20,
      backgroundColor: "#D9D9D9",
      paddingVertical: 8,
      borderRadius: 8,
      gap: 5,
    }}
  >
    <View style={{ width: 300, paddingVertical: 10 }}>
      <TextInput
        placeholder="Title"
        style={{ fontSize: 15, paddingLeft: 10 }}
      />
    </View>
  </View>
  <View style={{ backgroundColor: "#D9D9D9", borderRadius: 8, marginTop: 10 }}>
    <View style={{ width: 300, height: 170, paddingVertical: 30 }}>
      <TextInput
        placeholder="Review message..."
        style={{ fontSize: 15, paddingLeft: 10, paddingTop: 20 }}
      />
    </View>
  </View>
  {/* Star Rating */}
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 40,
      marginLeft: -20,
    }}
  >
    <TouchableOpacity onPress={() => setStarRating(1)}>
      <Image
        source={starRating >= 1 ? require("../assets/starF.png") : require("../assets/starB.png")}
        style={{ width: 33, height: 33, marginRight: 5 }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setStarRating(2)}>
      <Image
        source={starRating >= 2 ? require("../assets/starF.png") : require("../assets/starB.png")}
        style={{ width: 33, height: 33, marginRight: 5 }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setStarRating(3)}>
      <Image
        source={starRating >= 3 ? require("../assets/starF.png") : require("../assets/starB.png")}
        style={{ width: 33, height: 33, marginRight: 5 }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setStarRating(4)}>
      <Image
        source={starRating >= 4 ? require("../assets/starF.png") : require("../assets/starB.png")}
        style={{ width: 33, height: 33, marginRight: 5 }}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setStarRating(5)}>
      <Image
        source={starRating >= 5 ? require("../assets/starF.png") : require("../assets/starB.png")}
        style={{ width: 33, height: 33, marginRight: 5 }}
      />
    </TouchableOpacity>
     <View
        style={{
          alignSelf: "center",
          paddingVertical: 5,
          bottom: -50,
          marginLeft:-160,
        }}
      >
        <Pressable
          style={{
            paddingVertical: 10,
            borderRadius: 12,
            backgroundColor: "#FE8F4E",
          }}
          onPress={() => {
            // Handle report submission
            // You can make an API call or perform any necessary actions
            setModalReviewVisible(false); // Close the modal after submission
          }}
        >
          <Image source={require("../assets/submit.png")} style={{ width: 132, height: 28}} />
    </Pressable>
     </View>
  </View>
</Modal>
        </Pressable>
        <Modal
          animationType="slide" // You can change the animation type as per your preference
          transparent={true}
          isVisible={isReportModalVisible}
          onBackdropPress={() => isReportModalVisible(false)}
          onRequestClose={() => {
            // Handle modal closing (optional)
            setReportModalVisible(false);
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
                Write a report
              </Text>
            <View style={{ backgroundColor: "white" }}>
              <Text style={{ fontWeight: "bold", fontSize: 12, paddingLeft: 10, paddingVertical: 10 }}>
                Quick report
              </Text>
                            <TouchableOpacity
                              onPress={toggleReportModal}
                              style={{
                                position: "absolute",
                                top: -40,
                                right: 0,
                              }}
                            >
                              <Image
                                source={require("../assets/filterCloseButton.png")}
                                style={{ width: 16, height: 16 }}
                              />
                            </TouchableOpacity>
                            {}
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ padding: 0 }}>
                  <TouchableOpacity>
                    <Image source={require("../assets/spaceTaken.png")} style={{ width: 110, height: 40,marginBottom:10 }} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={require("../assets/brokenParking.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>
                </View>

                <View style={{ padding: 0 }}>
                  <TouchableOpacity>
                    <Image source={require("../assets/safetyConcerns.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={require("../assets/spaceFree.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ padding: 0 }}>
                  <TouchableOpacity>
                    <Image source={require("../assets/lackSigns.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={require("../assets/damagedPavement.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>
                </View>

                <View style={{ padding: 0 }}>
                  <TouchableOpacity>
                    <Image source={require("../assets/construction.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={require("../assets/poorLightning.png")} style={{ width: 110, height: 40, marginBottom:10 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ padding: 5 }}>
                  <TouchableOpacity>
                    <Image source={require("../assets/falseSpot.png")} style={{ width: 233, height: 40 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
              {/* Add your report form fields or content here */}
              {/* For example: */}
              <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
                Write a report
              </Text>
              <TextInput
                placeholder="More info.. (optional)"
                style={{ borderWidth: 1, borderColor: "gray", padding: 10, height: 71, borderRadius: 10, backgroundColor: "D9D9D9",}}
                // Add onChangeText and value props to handle input
              />
              <TouchableOpacity
                onPress={() => {
                  // Handle report submission
                  // You can make an API call or perform any necessary actions
                  toggleReportModal(); // Close the modal after submission
                }}
              >
                <Image source={require("../assets/submit.png")} style={{ width: 154, height: 31, alignSelf: "center", marginTop: 20}} />
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

        

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
