import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

function Connexion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password') {
      navigation.navigate('EspaceGestion');
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <View>
      <Text>Page de connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <TouchableOpacity
        onPress={() => navigation.navigate('MotDePasseOublie')}
      >
        <Text>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Connexion;
