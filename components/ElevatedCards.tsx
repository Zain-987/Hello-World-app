import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


let ele = ["#1abc9c" , "#3498db" , "#9b59b6" , "#34495e" , "#e74c3c", "#e67e22"]
const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
{
    ele.map((item , index) => {
        return <Pressable style={[styles.box , {backgroundColor : item}]} key={index}>
            <Text> Box </Text>
        </Pressable>
    })
}
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    heading : { 
        fontSize : 24 ,
        padding : 10,
        fontWeight : "600",
      },
      box : {
        height : 100,
        width : 100 ,
        margin : 8,
        flex : 1,
        alignItems : 'center',
        justifyContent : "center",
        elevation : 4,
        borderRadius : 4
      }
})