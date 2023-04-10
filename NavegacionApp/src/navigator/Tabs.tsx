import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor:colores.primary,
        tabBarStyle:{
          borderTopColor:colores.primary,
          borderTopWidth: 0,
          elevation:0
        },
        tabBarLabelStyle:{
          fontSize:15
        },
        tabBarIcon:({color, focused, size})=>{
          let iconName : string = '';

          switch(route.name)
          {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTabNavigator':
              iconName = 'Top';
              break;
            
            case 'StackNavigator':
              iconName = 'ST';
              break;

          }

          return<Text style={{color }}>
            {iconName}
          </Text>
        }
      })}
    
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title:'Top'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () =>{
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor:colores.primary,
        tabBarStyle:{
          borderTopColor:colores.primary,
          borderTopWidth: 0,
          elevation:0
        },
        tabBarLabelStyle:{
          fontSize:15
        },
        tabBarIcon:({color, focused})=>{
          let iconName : string = '';

          switch(route.name)
          {
            case 'Tab1Screen':
              iconName = 'caret-back';
              break;
            case 'TopTabNavigator':
              iconName = 'caret-down';
              break;
            
            case 'StackNavigator':
              iconName = 'caret-forward';
              break;

          }

          return <Icon name={iconName} size={20} color={colores.primary}
          />
        }
      })}
    >
    <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
    <BottomTabAndroid.Screen name="TopTabNavigator" options={{title:'Top'}} component={TopTabNavigator} />
    <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
    
    );
}


