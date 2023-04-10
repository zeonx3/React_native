import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any , any>{};

export const Pagina1Screen = ({navigation} : Props) => {
  return (
   <View style={styles.globalMargin}>
        <Text style={styles.title}>
            <Icon name='home' size={20} color={colores.primary}/> Pagina 1
        </Text>
  
        <TouchableOpacity
        onPress={() => navigation.navigate('Pagina2Screen')}
        style={{...styles.menuBoton,
        backgroundColor:'#5856D6'}}
      >
        <Text style={styles.menuTexto}> <Icon name='arrow-redo' size={20} color='white'/>Ir pagina 2</Text>
      </TouchableOpacity>
       
      <Text style={{marginVertical:20,
      fontSize:20, marginLeft:5}}>Navegar con argumentos</Text>
    <View style={{
      flexDirection:'row'
    }}>
      <TouchableOpacity
        onPress={()=> navigation.navigate('PersonaScreen', {
          id:1,
          name:'Pedro'
        })}
        style={{...styles.botonGrande,
        backgroundColor:'#5856D6'}}
      >
        <Text style={styles.botonGrandeTexto}> <Icon name='man' size={20} color='white'/>Pedro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=> navigation.navigate('PersonaScreen', {
          id:2,
          name:'Maria'
        })}
        style={{...styles.botonGrande,
          backgroundColor:'#F0A23B'}}
      >
        <Text style={styles.botonGrandeTexto}><Icon name='woman' size={20} color='white'/>Maria</Text>
      </TouchableOpacity>
    </View>
      

   </View>
  )
}
