import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: Colors.accent,
        padding: 10,
        backgroundColor: "green",
        borderRadius:30,
        marginVertical: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number:{
        color: "white",
        fontSize: 22
    }
})