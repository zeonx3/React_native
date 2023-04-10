import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';
import { TochableIcon } from '../components/TochableIcon';



export const Tab1Screen = () => {

  useEffect(()=> {
    console.log('Tab1Screen effect');
  },[])


  return (
   <View style={{...styles.globalMargin,
          marginTop:20}}>
        <Text style={styles.title}>
            Iconos
        </Text>
        <Text>
          <TochableIcon iconName="airplane-sharp"/>
          <TochableIcon iconName="barbell" />
          <TochableIcon iconName="alert" />
          <TochableIcon iconName="basketball" />
          <TochableIcon iconName="bonfire" />
          <TochableIcon iconName="car-sport" />
          <TochableIcon iconName="alarm" />
          <TochableIcon iconName="language" />
        </Text>
        
   </View>
  )
}
