import React from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContex';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';

export const AlbumsScreen = () => {

  const {logOut, authState} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {authState.isLoggedIn  === true ? <Button title='LogOut' onPress={logOut}
            /> : ''}
        </Text>
    </View>
  )
}
