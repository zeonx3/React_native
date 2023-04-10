import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any , any>{};

export const Pagina3Screen = ({navigation} : Props) => {
  return (
   <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Pagina 3
        </Text>
        <TouchableOpacity
              onPress={()=> navigation.pop()}
                style={{...styles.menuBoton,
                backgroundColor:'#5856D6'}}
              >
                <Text style={styles.menuTexto}> <Icon name='arrow-back' size={20} color='white'/>Volver</Text>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={()=> navigation.popToTop()}
                style={{...styles.menuBoton,
                backgroundColor:'#5856D6'}}
              >
                <Text style={styles.menuTexto}> <Icon name='home' size={20} color='white'/>Ir a Home</Text>
        </TouchableOpacity>

   </View>
  )
}
