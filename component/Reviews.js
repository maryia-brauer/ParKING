import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Reviews = ({route}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>List of Reviews: {route?.params?.param?.reviews}</Text>
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({})