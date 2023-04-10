import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContex';



export const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppState>
          <MenuLateral/>
        </AppState>
      {/*   <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
        {/* <Tabs/> */}
      </NavigationContainer>
    </>
  )
}

const AppState = ({children} : any ) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}