import { useLinkProps } from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {StackParamList} from './router';

type DetailProps = {navigation: NativeStackNavigationProp<StackParamList, 'Detail'>};


const Detail:React.FC<DetailProps>=({navigation}) => {
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source = {require('../assets/img/arrow-left.png')} style ={{width: 24, height: 24}}/>
                </TouchableOpacity>
                <Text style ={{ fontSize: 20, color: '#2F2D2C', fontWeight: 600, textAlign: 'center' }}>Detail</Text>
                <Image source ={require('../assets/img/Heart2.png')} style ={{width: 24, height: 24}}/>
            </View>
            <Image source = {require('../assets/img/minuman1.jpg')} style={styles.imageCapp}/>
            <Text style={{ fontWeight: 600, fontSize:24, color: '#2F2D2C' }}>Red Velvet</Text>
            <Text style ={{ fontSize: 14, fontWeight: 400, color: '#9B9B9B', lineHeight: 25 }}>Minuman lembut</Text>
            <View style={styles.ratingContainer}>
            <Text style={styles.rating}>
                  <Text style={styles.star}>★</Text> 4.9 <Text style={{ color: '9B9B9B', fontWeight:400, fontSize:14 }}>(230)</Text>
            </Text>
            <View style = {{ backgroundColor: '#F9F9F9', padding: 10, borderRadius:15 }}><Image source= {require('../assets/img/bean.png')} style={{width: 24, height: 24}}/></View>
            <View style = {{ backgroundColor: '#F9F9F9', padding: 10, borderRadius:15 }}><Image source= {require('../assets/img/milk.png')} style={{width: 24, height: 24}}/></View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 600, color: '#2F2D2C', paddingVertical: 10 }}>Description</Text>
            <Text style ={{ fontSize: 14, fontWeight: 400, textAlign:'justify', lineHeight: 20, paddingBottom: 10 }}>Red velvet adalah minuman lembut dan lezat yang mirip dengan kue <Text style ={{ fontWeight: 'bold', color: '#C67C4E' }}>Read More</Text></Text>
            <Text style ={{ fontWeight: 600, fontSize: 20, color:'#2F2D2C', paddingVertical: 5 }}>Size</Text>
            <View style = {styles.sizeCon}>
                <View style={styles.s}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight:'bold' }}>S</Text>
                </View>
                <View style={styles.m}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight:'bold', color:"#C67C4E" }}>M</Text>
                </View>
                <View style={styles.l}>
                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight:'bold' }}>L</Text>
                </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#EAEAEA', width:'auto', height:1, marginVertical: 10 }}></View>
            <View style={styles.price}>
                <View style={styles.priceText }>
                <Text style ={{ fontSize: 20 }}>Harga</Text>
                <Text style ={{ fontSize: 20, color: '#C67C4E', fontWeight: 'bold' }}>Rp. 35.000</Text>
                </View>
                <TouchableOpacity onPress={() =>navigation.navigate('Order')} style={{ width: 180, height: 60, backgroundColor: '#C67C4E', padding: 10, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Buy Now</Text></TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        marginBottom: 10,
    }, 
    imageCapp: {
        width: 'auto',
        height: 250,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10
    },
    ratingContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#EAEAEA',
        paddingBottom:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rating: {
        color: '#2F2D2C',
        fontWeight: 'bold',
        fontSize: 20,
        marginEnd: 120
    }, 
    star: {
        color: 'gold',
        fontSize: 22
    },
    sizeCon : {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    s: {
        borderWidth: 2,
        borderColor: '#DEDEDE',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center'
    },
    m: {
        borderWidth: 2,
        borderColor: '#C67C4E',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#FFF5EE'
    },
    l: {
        borderWidth: 2,
        borderColor: '#DEDEDE',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center'
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        alignItems: 'center'

    },
    priceText: {

    }
})
