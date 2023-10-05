import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


let contacts = [
    {
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa&pid=Api&P=0&h=220',
        username: "Zain Raza",
        message: "Love To have You ! ❤",
    },
    {
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa&pid=Api&P=0&h=220',
        username: "Amaan Raza",
        message: "Love To have You ! ❤",
    },
    {
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa&pid=Api&P=0&h=220',
        username: "Hunain Raza",
        message: "Love To have You ! ❤",
    },
    {
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa&pid=Api&P=0&h=220',
        username: "Abdullah Raza",
        message: "Love To have You ! ❤",
    },
]
const Contacts = () => {
    return (
        <View>
            <Text style={styles.heading}>Contacts</Text>

            <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding : 10 , gap : 5}}
            >
                {
                    contacts.map((item, index) => {
                        return <TouchableOpacity key={index} style={styles.contactStyle}>
                            <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            <View>
                                <Text style={styles.usernameStyle}>{item.username}</Text>
                                <Text style={styles.messageStyle}>{item?.message}</Text>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        padding: 10,
        fontWeight: "600",
    },
    contactStyle: {
        padding: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor : "#3498db",
        borderRadius : 6
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 100,
        resizeMode: 'contain'
    }
    ,
    usernameStyle: {
        fontWeight: '500',
        fontSize: 18
    },
    messageStyle: {
        fontSize: 12,
    }
})