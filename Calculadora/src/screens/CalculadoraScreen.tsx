import React from 'react';
import {Text, View } from 'react-native/';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

const{ numero,
        lastnumero,
        limpiar,
        posiNega,
        btnDelete,
        btnDivi,
        armarNumero,
        btnMulti,
        btnRestar,
        btnSumar,
        btnResul,} = useCalculadora();

  return (



    <View style={styles.calculadoraContainer}>
        {
            (lastnumero !== '0') && (<Text style={styles.resultadoOld}>{lastnumero}</Text>)
        }
        
        <Text style={styles.resultado} numberOfLines={1}>{numero}</Text>
        <View style={styles.fila}>
            <BotonCalc texto="C" color="#A5A5A5" onPress={limpiar}/>
            <BotonCalc texto="+/-" color="#A5A5A5" onPress={posiNega}/>
            <BotonCalc texto="del" color="#A5A5A5" onPress={btnDelete}/>
            <BotonCalc texto="/" color="#FF9427" onPress={btnDivi}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="7"  onPress={armarNumero}/>
            <BotonCalc texto="8"  onPress={armarNumero}/>
            <BotonCalc texto="9"  onPress={armarNumero}/>
            <BotonCalc texto="X" color="#FF9427" onPress={btnMulti}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="4"  onPress={armarNumero}/>
            <BotonCalc texto="5"  onPress={armarNumero}/>
            <BotonCalc texto="6"  onPress={armarNumero}/>
            <BotonCalc texto="-" color="#FF9427" onPress={btnRestar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="1"  onPress={armarNumero}/>
            <BotonCalc texto="2"  onPress={armarNumero}/>
            <BotonCalc texto="3"  onPress={armarNumero}/>
            <BotonCalc texto="+" color="#FF9427" onPress={btnSumar}/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto="0" ancho onPress={armarNumero}/>
            <BotonCalc texto="."  onPress={armarNumero}/>
            <BotonCalc texto="=" color="#FF9427" onPress={btnResul}/>
        </View>
    </View>
  )
}
