import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


export const Pagina2Screen = () => {

  const navigator = useNavigation()

  useEffect(()=>{
    navigator.setOptions({
      title:'Hola Mundo',
      headerBackTitle:'Atras',
    })
  })

  return (
   <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Pagina 2
        </Text>
      <TouchableOpacity
        onPress={() => navigator.navigate('Pagina3Screen')}
        style={{...styles.menuBoton,
        backgroundColor:'#5856D6'}}
      >
        <Text style={styles.menuTexto}> <Icon name='arrow-redo' size={20} color='white'/>Ir pagina 3</Text>
      </TouchableOpacity>

   </View>
  )
}
