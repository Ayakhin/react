import React from 'react';
import { View, Text } from 'react-native';

function OeuvreItem({ oeuvre }) {
  return (
    <View>
      <Text>Informations sur l'œuvre :</Text>
      <Text>Titre : {oeuvre.titre}</Text>
      <Text>Auteur : {oeuvre.auteur}</Text>
    </View>
  );
}

export default OeuvreItem;
