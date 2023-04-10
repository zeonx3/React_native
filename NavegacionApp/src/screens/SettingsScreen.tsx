import React,{useContext} from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext)

  return (
    <View style={{...styles.globalMargin,
     margintop: insets.top + 20}}>
        <Text  style={styles.title}>Settings</Text>
        <Text>{JSON.stringify(authState,null,5)}</Text>

        {
          authState.favoriteIcon && 
          (
            <Icon
            name={authState.favoriteIcon}
            size={150}
            color={colores.primary}
          />)
        }
        
    </View>
    )
}
