import React from 'react'
import { View,Image, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import Navigation from '../navigation/navigation'

export default function BerandaScreen({navigation}) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#2E86C1'}}>
            <View style={{flex:1.3}}>
                <Image style={styles.image} source={require('../picture/logo.jpg')}></Image>
                <Text style={styles.NameApp}>FerryAccess</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.teks1}>Pelabuhan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Pelabuhan Awal"/> 
                </View>
                <Text style={styles.teks1}>Pelabuhan Tujuan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Pelabuhan Tujuan"/> 
                </View>
                <Text style={styles.teks1}>Kelas</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Layanan"/> 
                </View>
                <Text style={styles.teks1}>Tanggal Masuk Keberangkatan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Tanggal Keberangkatan"/> 
                </View>
                <Text style={styles.teks1}>Jam Masuk Keberangkatan</Text>
                <View style = { styles.inputView } >
                    <TextInput style = { styles.TextInput }
                    placeholder = "Pilih Jam Masuk"/> 
                </View>
                <TouchableOpacity style = { styles.Btn } onPress={()=>navigation.navigate('DetailPesanan')}>
                    <Text style = { styles.SubmitTeks }>Cari Jadwal</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 51,
        width: 147,
        borderRadius:0,
        alignItems: 'center',
        marginBottom: 5,
    },
    NameApp: {
        fontSize:17,
        fontWeight:'bold',
        fontFamily: 'cursive',
        marginBottom:15,
    },
    form: {
        flex:5,
        width: "90%",
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent: 'center',
        borderRadius:5,
        marginBottom:5,
    },
    teks1: {
        fontSize:13,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginLeft:55,
    },
    inputView: {
        backgroundColor: "#dddddb",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 15,
        alignItems: "center",
        marginLeft:50,
    },
    TextInput: {
        height: 50,
        width: "90%" ,
        flex: 1,
        padding: 10,
    },
    Btn: {
        width: 100,
        borderRadius:5,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff8c00",
        marginLeft:50,
    },
    SubmitTeks: {
        color: "#FFFFFF",
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'monospace',
    },
});