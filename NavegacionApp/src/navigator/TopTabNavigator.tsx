import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContatsScreen } from '../screens/ContatsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top:paddingtop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{paddingtop}}
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle:{
                backgroundColor:colores.primary,
            },
            tabBarStyle:{
                borderTopColor:colores.primary,
                borderTopWidth: 0,
                elevation:0
            },
            tabBarActiveTintColor:colores.primary,
            tabBarIcon:({color, focused})=>{
                let iconName : string = '';
      
                switch(route.name)
                {
                  case 'ChatScreen':
                    iconName = 'logo-whatsapp';
                    break;
                  case 'ContatsScreen':
                    iconName = 'person';
                    break;
                  
                  case 'AlbumsScreen':
                    iconName = 'images';
                    break;
      
                }
      
                return <Icon name={iconName} size={20} color="#5856D6" />
              }

        })}
    >
  
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContatsScreen" component={ContatsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}