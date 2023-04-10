import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    texto:string;
    color?:string;
    onPress: (numText: string) => void;
    ancho?:boolean;
}

export const BotonCalc = ({texto,color = '#2D2D2D',onPress, ancho=false}:Props) => {
  return (
    <TouchableOpacity
        onPress={ () => onPress(texto)}
    >
        <View style={{...styles.boton, backgroundColor:color,
        width:(ancho) ? 180 : 80
        }}>
            <Text style={{...styles.botonTexto,
                color: (color === '#A5A5A5') ? 'black' : 'white'
            }}>
            {texto}
            </Text>
        </View>
    </TouchableOpacity>
    
  )
}
