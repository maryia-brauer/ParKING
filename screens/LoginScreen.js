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
} from "react-native";
import React, { useState } from "react";
import {useNavigation} from '@react-navigation/native';
//import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  navigation.replace("Main");

/*  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("CityScreen");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
  };
*/
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
      <KeyboardAvoidingView>
        <View>
          <Text
            style={{
              fontSize: 30,
              marginTop: 200,
              width: 350,
              fontWeight: "bold",
            }}
          >
            Welcome!
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            backgroundColor: "white",
            paddingVertical: 5,
            borderRadius: 8,
            border: "solid black",
            borderWidth: 2,
            gap: 5,
          }}
        >
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ fontSize: 20, width: 350 }}
            placeholder="Email Address"
          />
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            backgroundColor: "white",
            paddingVertical: 5,
            borderRadius: 8,
            gap: 5,
            border: "solid black",
            borderWidth: 2,
          }}
        >
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!passwordVisible}
            style={{ fontSize: 20, width: 350 }}
            placeholder="Password"
          />
          <TouchableOpacity>
          <Image
            style={{ position: "absolute", right: 5, height:32 }}
            source={require("../assets/eye.png")}
            onPress={togglePasswordVisibility}
          />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 20, width: 350, color: "#FE8F4E" }}>
            {" "}
            Forgot password?
          </Text>
        </View>
      </KeyboardAvoidingView>
      <View>
      <Pressable onPress={()=> navigation.navigate("CityScreen")}>
        <Image
          style={{ top: 30, width: 300, borderRadius: 20 }}
          source={require("../assets/login.png")}
        />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
