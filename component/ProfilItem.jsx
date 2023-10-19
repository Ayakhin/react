import React from 'react';
import { View, Text } from 'react-native';

function ProfilItem({ profil }) {
  return (
    <View>
      <Text>Informations sur le profil :</Text>
      <Text>Nom : {profil.nom}</Text>
      <Text>Email : {profil.email}</Text>
    </View>
  );
}

export default ProfilItem;
