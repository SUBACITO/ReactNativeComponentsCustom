
import React from 'react';
import { ActivityIndicator, StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFonts } from 'expo-font';

const Bai_1 = () => {
  const [fontsLoaded] = useFonts({
    'ProtestGuerrilla-Regular': require('../assets/fonts/ProtestGuerrilla-Regular.ttf')
  });

  if (!fontsLoaded) {
    // Show a loading indicator while fonts are loading
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('../assets/images/1.jpg')} // Replace with your image path
        style={styles.image}
        resizeMode="cover"
      />
      <ThemedText type="title" style={styles.fontText}>
        BLACK MYTH
      </ThemedText>
      <ThemedText type="title" style={styles.title_yellow}>
        WUKONG
      </ThemedText>
      <Pressable style={styles.button} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>Trailer</Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed for your theme
  },
  title_yellow:{
    color: 'yellow'
  },
  fontText: {
    fontFamily: 'ProtestGuerrilla-Regular',
    fontSize: 50,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 230,
    backgroundColor: '#333', // Dark background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 4, // For Android shadow
    zIndex: 1,
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'ProtestGuerrilla-Regular'
  },
});

export default Bai_1;
