import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ElevatedCards from '../components/ElevatedCards'
import FancyCards from '../components/FancyCards'
const MainPage = () => {
  return (
    <ScrollView>
      
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({})