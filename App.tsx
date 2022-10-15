import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';


export default function App() {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('./assets/Font/IBMPlexSans-BoldItalic.ttf'),
    'Oswald': require('./assets/Font/Oswald-VariableFont_wght.ttf'),
  })
  if (!fontsLoaded) return null;
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.contenedorDos}>
      <AntDesign style={styles.flechita} name="arrowleft" size={28} color="black" />
      <Text style={{fontFamily: 'Oswald', fontSize:28 }}> Recent Jobs</Text>
      <Entypo style={styles.lupita} name="magnifying-glass" size={37} color="black" />
      </View>
      <View style={styles.contenedorBotones}>
      <TouchableOpacity style={styles.botonuno}>
        <Text style={styles.nombreBoton}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botondos}>
        <Text style={styles.nombreBotones}>Desing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botontres}>
        <Text style={styles.nombreBotones}>Technology</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: 'white',
  },
  contenedorDos:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:62,
    width:'100%',
    height:54,
  },
  flechita:{
    marginRight:17,
    marginLeft:12,
  },
  lupita:{
    marginLeft:'auto',
  },
  botonuno:{
    backgroundColor:' rgb(26, 163, 255)',
    width:'18%',
    height:34,
    borderRadius:20,
  },
  nombreBoton:{
    textAlign:'center',
    color:'white',
    marginTop:-2,
    fontSize:22,
  },
  nombreBotones:{
    textAlign:'center',
    color:'rgb(26, 163, 255)',
    marginTop:-2,
    fontSize:22,
  },
  contenedorBotones:{
    flexDirection:'row',
    alignSelf:'center',
    width:'90%',
    height:56,
  },
  botondos:{
    borderColor:' rgb(26, 163, 255)',
    width:'25%',
    height:34,
    borderRadius:20,
    borderWidth:2,
  },
  botontres:{
    borderColor:' rgb(26, 163, 255)',
    width:'32%',
    height:34,
    borderRadius:20,
    borderWidth:2,
  }

});
