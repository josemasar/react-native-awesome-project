import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled === true ){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an image from your Phone!</Text>
      <Image source={{uri: selectedImage !== null ? selectedImage.localUri : "https://picsum.photos/200"}} style={styles.image}/>
      <Button 
        color="blue"
        title="This is only a button"
        accessibilityLabel="you will learn more"
        onPress={ () => Alert.alert("Funciona?")}
      />
      <TouchableOpacity
      style={styles.button}
      accessibilityLabel="very customizable button"
      onPress={openImagePickerAsync}
      >
        <Text style={styles.buttonText}>New image</Text>
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
    borderRadius: 100,
    marginTop: 5,
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
