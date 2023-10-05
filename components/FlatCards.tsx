import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ele = ["Blue","Green","Gray"] 
const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text> 
      <View style={styles.boxHeader}>

        {
          ele.map((item, index) =>{
            return <Pressable style={[styles.box, {backgroundColor : item.toLowerCase()}]} key={index}>
            <Text>{item}</Text>
          </Pressable>
          })
        }
            </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
  heading : { 
    fontSize : 24 ,
    padding : 10,
    fontWeight : "600",
  },
  boxHeader : {
    flexDirection : 'row',
    gap : 8,
    padding : 10,
  },
  box : {
    height : 100,
    // width : Dimensions.get("screen").width ,
    flex : 1,
    alignItems : 'center',
    justifyContent : "center",
    borderWidth : 0.5,
    borderColor : 'white',
    borderRadius : 4
  }
})