import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ElevatedCards from '../components/ElevatedCards'
const MainPage = () => {
  return (
    <ScrollView>
      
      <FlatCards/>
      <ElevatedCards/>
    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({})