import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
export const BoxObjectModelScreen = () => {
  return (
   <View style={styles.container}>
        <Text style={styles.title}>
            Box Object Model
        </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red'
  },
  title:{
    fontSize:20,
    borderWidth:10
  }
})