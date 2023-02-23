import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>
        Open up App.js to start working on your app!
      </Text>
      <Image source={PlaceholderImage} style={styles.image} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
