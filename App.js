import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; /* Crear  contenedor de pantallas de las vistas de la App */
import { createStackNavigator } from '@react-navigation/stack'; /* Contenedor de la navegación de la App */

const Stack = createStackNavigator(); /* Contenedor de toda la Navegación */

import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

function MyStack () {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="UsersList" component={ UsersList } options={{ title:'User List' }}/>
      <Stack.Screen name="CreateUserScreen" component={ CreateUserScreen } options={{ title:'Create User' }} />
      <Stack.Screen name="UserDetailScreen" component={ UserDetailScreen } options={{ title:'User Detail' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
