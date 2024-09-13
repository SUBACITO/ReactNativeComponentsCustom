
import React from 'react';
import { ActivityIndicator, StyleSheet, View, Pressable, Text, StatusBar, ImageBackground, Image} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFonts } from 'expo-font';
import { red, rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Bai_3 = () => {
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
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
      <ImageBackground style={styles.image} source={require('../assets/images/1.jpg')}></ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={{ color: 'white', fontSize: '1.5em', fontWeight: 'bold', padding: 20 }}>BLACK MYTH WUKONG</Text>
        <View style={styles.detailsInfor}>
          <Text style={{ color: '#074696', fontSize: 15, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10 }}>Game Science</Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10 }}>Thông tin Game</Text>
          <Text>Black Myth: Wukong is a 2024 action role-playing game developed and published by Game Science. The game is inspired by the classical Chinese novel Journey to the West and follows an anthropomorphic monkey based on Sun Wukong from the novel.</Text>
        </View>
        {/* Button love */}
        <Pressable style={styles.button} onPress={() => alert('Button Pressed!')}>
          <Text style={{textAlign:'center', fontSize: 25, color: 'red'}}>♥️</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>$55</Text>
          <Pressable style={styles.BuyNowBtn} onPress={() => alert('Button Pressed!')}>
            <Text style={{fontSize: 15, color: 'red'}}>Buy now!</Text>
          </Pressable>
      </View>
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
  title_yellow: {
    color: 'yellow'
  },
  fontText: {
    fontFamily: 'ProtestGuerrilla-Regular',
    fontSize: 50,
  },
  detailsContainer: {
    flex: 3,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#074696',
    paddingHorizontal: 20,
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 7
  },
  detailsInfor: {
    padding: 20,
    backgroundColor: 'white',
    height: 300,
    width: '100%',
    borderRadius: 25
  },
  button: {
    width: 35,
    height: 35, 
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'white',
    right: 20,
    top: 50,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  BuyNowBtn :{
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});

export default Bai_3;
