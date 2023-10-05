import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    function OpenWeb(web: string): void {

        Linking.openURL(web)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Blog Card</Text>


            <View style={styles.cardWrapper}>
                <Text style={styles.cardTitle}>What's New in Indus University ? - 2023</Text>
                <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.nsmv9kYcFqXLSIB_qnhw-wHaEo&pid=Api&P=0&h=220' }} style={styles.image} />
                <View style={styles.cardBody}>

                    <Text style={styles.title}>This is Title</Text>
                    <Text numberOfLines={3} style={styles.desc}>This is Description</Text>
                </View>

                <View style={styles.cardFooter}>

                    <TouchableOpacity style={styles.cardFooterButtons}
                    onPress={()=> OpenWeb("https://github.com/Zain-987/Hello-World-app/commits/main")}
                    >
                        <Text style={{color : 'blue'}}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardFooterButtons}
                    onPress={()=> OpenWeb("https://github.com/Zain-987/Hello-World-app/commits/main")}
                    >
                        <Text style={{color : 'blue'}}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        padding: 10,
        fontWeight: "500",
    },
    image: {
        height: 180,
        width: "100%",
        borderRadius : 8,
    },
    container: { alignSelf: 'center', width: Dimensions.get("screen").width * 0.96 , elevation : 4},
    cardWrapper : { backgroundColor : '#ccc' , borderRadius : 6 , padding : 10},
    cardTitle : {marginVertical : 6 , fontSize : 16 , color : 'rgba(0,0,0,0.3)' , textAlign : 'center'},
    cardBody: {
      marginVertical : 10,
      gap : 8  
    }
    ,
    title : {color : 'rgb(0,0,0)', fontWeight : '600', fontSize : 20},
    desc : {color : "rgba(0,0,0,0.5)", fontSize : 18},
    cardFooter: {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10,
    },
    cardFooterButtons : {
        width : Dimensions.get("screen").width * 1 / 2.4,
        paddingVertical : 10,
        alignItems : 'center',
    }
})