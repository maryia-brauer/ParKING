import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Reviews = ({data, partnerId}) => {
  const navigation = useNavigation();
  return (
    <View>
    {data.id === partnerId ? (   
      <View>
      <Text style={{paddingHorizontal:10}}> {data.description}</Text>
      </View>
      ): (
        <Text style={{paddingHorizontal:10}}>No reviews yet!</Text>
      )} 
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({})