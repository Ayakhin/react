import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

function Accueil() {
  const [oeuvres, setOeuvres] = useState([]);

  useEffect(() => {
    fetch('https://www.getty.edu/')
      .then((response) => response.json())
      .then((data) => {
        setOeuvres(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []); 
  return (
    <View>
      <Text>Page d'accueil</Text>
      <Text>Liste des œuvres de musée :</Text>
      <FlatList
        data={oeuvres}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Titre : {item.titre}</Text>
            <Text>Auteur : {item.auteur}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Accueil;
