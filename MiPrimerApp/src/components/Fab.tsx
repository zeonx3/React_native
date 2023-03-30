import React from 'react'
import {View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props{
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}



export const Fab = ({title, onPress, position = 'br'} : Props) => {


  return (
    <View style={[style.fabLocation,
        position === 'br' ? style.right : style.left]}>
        <TouchableNativeFeedback
        onPress={onPress}
        background={
            TouchableNativeFeedback.Ripple('grey',false,30)
        }>
        <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
        </View>
    </TouchableNativeFeedback>
    </View>
    
  )
}

const style = StyleSheet.create({
    
    fabLocation:{
        position:'absolute',
        bottom: 25,
    },
    right:{
        right: 25
    },
    left:{
        left: 25
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 4.95,

        elevation: 8,
    },
    fabText:{
        alignSelf:'center',
        color:'white',
        fontSize:25,
        fontWeight: 'bold',
        top:10,
    }
})
