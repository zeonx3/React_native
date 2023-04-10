import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  
    const { width } = useWindowDimensions();

    return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent' : 'front' }
      drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView    >

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>
      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Text style={ styles.menuTexto }><Icon name="navigate" size={20} colo="#5856D6" /> Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Text style={ styles.menuTexto }><Icon name="settings" size={20} colo="#5856D6" /> Ajustes</Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
}