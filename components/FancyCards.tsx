import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
    return (
        <View>
            <Text style={styles.heading}>Trending Places</Text>
            <View style={{alignItems : 'center'}}>
            <View style={styles.cardContainer}>
                <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.7TvnrHazTFPYkVkOniKoMgAAAA&pid=Api&P=0&h=220' }} style={styles.image} />
                <View style={styles.cardBody}>
                    <Text style={styles.title}>Indus University </Text>
                    <Text style={styles.desc} numberOfLines={2}>This is Some of the Major Card  Description which we have Further More will be Given later On</Text>
                    <Text style={styles.footer}> 20 min away</Text>
                    
                </View>
            </View>
            </View>
        </View>
    )
}

export default FancyCards

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        padding: 10,
        fontWeight: "500",
    },
    image: {
        height: 200,
        width : '100%',
        borderRadius: 4,
    },
    cardContainer : {
        alignItems : 'center',
        width : Dimensions.get("screen").width * 0.94,
        elevation : 4,
    },
    cardBody: {
        backgroundColor: '#ccc',
        padding: 10,
        width : '100%',
        gap : 6,
    },
    title: {
        fontWeight: '600',
        fontSize: 20
    },
    desc: {
        fontSize: 16,
    },
    footer: {
        fontSize: 12,
        color: "green"
    }
})