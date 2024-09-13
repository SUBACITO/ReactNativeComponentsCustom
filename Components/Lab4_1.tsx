

import { useFonts } from 'expo-font';
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';

type ContactType = {
  name: string;
  email: string;
  position : string;
  photo: string;
}


// Define contacts as a plain array of objects (no type annotations)
const kiki : ContactType[] = [
  {
    name: 'Tommy Vercetti',
    email: 'vice4life@gmail.com',
    position: 'Boss',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    name: 'Carl Johnson',
    email: 'grovestreet@gmail.com',
    position: 'OG',
    photo: 'https://randomuser.me/api/portraits/men/8.jpg',
  }
];

const Lab4_1 = () => {
  const [fontsLoaded] = useFonts({
    'ProtestGuerrilla-Regular': require('../assets/fonts/ProtestGuerrilla-Regular.ttf')
  });

  if (!fontsLoaded) {
    // Show a loading indicator while fonts are loading
    return (
      <View style={styles.itemContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{textAlign: 'center', padding: 10, fontSize: 16, fontWeight: 'bold'}}>Lab 4 Bài 1</Text>
      <FlatList
        data={kiki}
        keyExtractor={(kikiItem) => kikiItem.email} // Use email as a unique key
        renderItem={customMessenger} // Render each contact item
      />
    </SafeAreaView>
  );
}

const customMessenger = ({item}) => (
  <View style={styles.itemContainer}>
    <View>
      <Image source={{uri: item.photo}} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      {/* Email with overflow handling */}
      <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
        {item.email}
      </Text>
      {/* Position text */}
      <Text>{item.position}</Text>
    </View>
    <View>
      <TouchableOpacity style={{backgroundColor: 'green', padding: 10, paddingHorizontal: 30, borderRadius: 15}}>
        <Text style={{color: 'white'}}>Call</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-around'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Let the text container take remaining space
    paddingRight: 10, // Add padding to avoid text touching the right edge
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  buttonContainer: {
    position: 'absolute', // Position the button absolutely
    bottom: 0, // Align it to the bottom
    width: '100%', // Make it take up full width
    alignItems: 'center', // Center it horizontally
    padding: 10, // Add some padding
  },
  navigationButton: {
    backgroundColor: '#22A7F2',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default Lab4_1;
