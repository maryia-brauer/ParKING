import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import {React, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Favourites from '../component/Favourites';
import { authFire } from "../firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = authFire.currentUser;

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
              left: 84,
            }}> {user?.email} </Text>
            <Image source={{uri: user?.photoURL}} style={{width: 100, height: 100}}/>
    </View>
    <View>
      <Favourites/>
    </View>
    <View>
      <Pressable onPress={()=> navigation.replace("Login")}>
        <Image
          style={{ top: 100, width: 300, borderRadius: 20 }}
          source={require("../assets/logout.png")}
        />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


export default ProfileScreen

const styles = StyleSheet.create({})