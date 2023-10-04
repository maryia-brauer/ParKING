import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import {React, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
}, []);

  return (
    <SafeAreaView     
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
    <View style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "20%", backgroundColor: "orange" }}>
    <Image  source={require("../assets/rect3.png")}/>
     </View>
    <View style={{ top: 130 }}>
      <Text style={{color:'white', fontSize:50}}>Profile</Text>
    </View>
    <View style={{alignItems: "center"}}>
      <Text 
      style={{
              fontSize: 30,
              marginTop: 300,
              width: 350,
              fontWeight: "bold",
              alignItems:'center',
            }}>PlaceHolder name</Text>
    </View>
    <View>
      <Text>Place for favourites</Text>
    </View>
    <View>
      <Pressable onPress={()=> navigation.navigate("Login")}>
        <Image
          style={{ top: 200, width: 300, borderRadius: 20 }}
          source={require("../assets/logout.png")}
        />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


export default ProfileScreen

const styles = StyleSheet.create({})