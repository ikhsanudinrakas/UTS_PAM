import React from 'react'
import { Image, StyleSheet, View, Text} from 'react-native'

export default function PembatalanScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2E86C1'}}>
            <View style={styles.tampilan}>
                <Image style={styles.image} source={require('../picture/ceklismerah.jpeg')}></Image>
                <Text style={styles.teks1}>Pesanan Dibatalkan</Text>
                <Text style={styles.teks2}>Silahkan melakukan pemesanan pada halaman beranda</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create ({
    tampilan: {
        width: 250,
        height:250,
        backgroundColor:'white',
        alignItems: 'center',
        flexDirection:'column',
        borderRadius:50,
        marginBottom:85,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius:100,
        alignItems: 'center',
        marginTop:30,
        marginBottom: 55,
    },
    teks1: {
        fontSize:13,
        fontWeight:'900',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginBottom:10,
    },
    teks2: {
        fontSize:13,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
});