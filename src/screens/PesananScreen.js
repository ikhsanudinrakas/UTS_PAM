import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function PesananScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#2E86C1'}}>
            <Text style={styles.teks}>Daftar Pemesanan</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    teks:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginTop:10,
    },
});