import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
export default function Botones() {

  const [fontsLoaded] = useFonts({
    'Ubuntu': require('../assets/Font/Ubuntu-Medium.ttf'),
})
if (!fontsLoaded) return null;
    return (
        <View style={styles.contenedorBotones}>
          <ScrollView
           horizontal>
                <TouchableOpacity style={styles.botonuno}>
                    <Text style={styles.nombreBoton}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botondos}>
                    <Text style={styles.nombreBotones}>Desing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botontres}>
                    <Text style={styles.nombreBotones}>Technology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botoncuatro}>
                    <Text style={styles.nombreBotones}>Finance</Text>
                </TouchableOpacity>
                
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorBotones:{
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        height:56,
      },
      botonuno:{
        marginHorizontal:12,
        backgroundColor:' rgb(26, 163, 255)',
        width:58,
        height:34,
        borderRadius:20,
      },
      botondos:{
        marginHorizontal:10,
        borderColor:'rgb(26, 163, 255)',
        width:85,
        height:34,
        borderRadius:20,
        borderWidth:2,
      },
      botontres:{
        marginHorizontal:10,
        borderColor:'rgb(26, 163, 255)',
        width:120,
        height:34,
        borderRadius:20,
        borderWidth:2,
      },
      botoncuatro:{
        marginHorizontal:10,
        borderColor:'rgb(26, 163, 255)',
        width:96,
        height:34,
        borderRadius:20,
        borderWidth:2,
      },
      nombreBoton:{
        fontFamily:'Ubuntu',
        textAlign:'center',
        color:'white',
        marginTop:3,
        fontSize:20,
      },
      nombreBotones:{
        fontFamily:'Ubuntu',
        textAlign:'center',
        color:'rgb(26, 163, 255)',
        fontSize:16,
      },
})