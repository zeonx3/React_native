import React, { useState } from 'react'
import { View,Text, TouchableOpacity, StyleSheet } from "react-native" ;
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0)

  return (
  <View style={style.container}>
    <Text style={style.title}>
        Contador: {contador}
    </Text>
    <Fab
        title="+1"
        position='br'
        onPress={()=>setContador(contador + 1)}
    />
    <Fab
        title="-1"
        position='bl'
        onPress={()=>setContador(contador - 1)}
    />
    {/* <TouchableOpacity
        onPress={()=>setContador(contador - 1)}
        style={style.fabLocationBL}
    >
        <View style={style.fab}>
            <Text style={style.fabText}>-1</Text>
        </View>
    </TouchableOpacity> */}
  </View>
  )
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        fontSize: 40,
        textAlign: 'center',
        top: -10
    },
})