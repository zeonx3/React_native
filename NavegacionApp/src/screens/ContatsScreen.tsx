import React,{useContext} from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

export const ContatsScreen = () => {
  
  const {signIn, authState} = useContext(AuthContext)
  
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {!authState.isLoggedIn  && <Button title='SignIn' onPress={signIn}
            />}
        </Text>
    </View>
  )
}
