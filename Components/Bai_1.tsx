
import React from 'react';
import { ActivityIndicator, StyleSheet, View} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
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
    <View style={styles.container}>
        <ThemedText type="title" style={styles.fontText}>
          BLACK MYTH
        </ThemedText>
        <ThemedText type="title" style={styles.title_yellow}>
          WUKONG
        </ThemedText>
    </View>
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
    }
});

export default Bai_1;
