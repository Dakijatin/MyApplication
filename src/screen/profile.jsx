import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation}) => {
  return (
    <View>
      <Text style={{ margin: 20, fontSize: 20, fontWeight: 500 }}>Profile</Text>
      <Text style={{ margin: 20, fontSize: 20, fontWeight: 500 }}></Text>
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
      <Text style={{ margin: 20, fontSize: 20, fontWeight: 500, textAlign: "center" }}>Welcome to Profile</Text>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})