import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'

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

    if(Platform.OS === 'web'){
      Alert.alert("This functionality is not available in the web browser")
    }else{
      setSelectedImage({localUri: pickerResult.uri})
    }
    
  }

  const openShareDialog = async () => {
    if(!(await Sharing.isAvailableAsync())){
      alert("Sharing, is not available in your platform");
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an image from your Phone!</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        >
        <Image source={{uri: selectedImage !== null ? selectedImage.localUri : "https://picsum.photos/200"}} style={styles.image}/>
      </TouchableOpacity>
      { selectedImage ? 
      <TouchableOpacity
      style={styles.button}
      accessibilityLabel="very customizable button"
      onPress={ openShareDialog }
      >
        <Text style={styles.buttonText}>Share this image!</Text>
      </TouchableOpacity>
      : <View/>
      }
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
