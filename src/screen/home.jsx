import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={{ margin: 20, fontSize: 20, fontWeight: 500 }}>Home</Text>
      <Button title="Profile" onPress={() => navigation.navigate("Profile", { id: 1, name: "lolu" })} />
      <Text style={{ margin: 20, fontSize: 20, fontWeight: 500, textAlign: "center" }}>Welcome to Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})