import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ElevatedCards from '../components/ElevatedCards'
import FancyCards from '../components/FancyCards'
import ActionCard from '../components/ActionCard'
import Contacts from '../components/Contacts'
const MainPage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ActionCard/>
      <Contacts/>
    </ScrollView>
  )
}

export default MainPage

const styles = StyleSheet.create({})