import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './screen/Accueil';
import Single from './screen/Single';
import Connexion from './screen/Connexion';
import MotDePasseOublie from './screen/MotDePasseOublie';
import EspaceGestion from './screen/EspaceGestion';
import GestionOeuvres from './screen/GestionOeuvres';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="test">
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Single" component={Single} />
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="MotDePasseOublie" component={MotDePasseOublie} />
        <Stack.Screen name="EspaceGestion" component={EspaceGestion} />
        <Stack.Screen name="GestionOeuvres" component={GestionOeuvres} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
