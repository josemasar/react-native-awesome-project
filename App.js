import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image source={{uri:"https://picsum.photos/200"}} style={styles.image}/>
      <Button 
        color="blue"
        title="click me"
        accessibilityLabel="you will learn more"
        onPress={ () => Alert.alert("Funciona?")}
      />
      <TouchableOpacity
      style={styles.button}
      accessibilityLabel="very customizable button"
      onPress={ () => Alert.alert("Este es mejor!")}
      >
        <Text style={styles.buttonText}>New button</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  button:{
    borderRadius:2,
    padding:7,
    marginTop:2,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText:{
    color: "#fff"
  },
});
