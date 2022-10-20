import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function CuadritoDos() {
  const [fontsLoaded] = useFonts({
    'IBM Plex Sans': require('../assets/Font/IBMPlexSans-Medium.ttf'),
    'Oswald': require('../assets/Font/Oswald-VariableFont_wght.ttf'),
    'Ubuntu': require('../assets/Font/Ubuntu-Medium.ttf'),
})  
if (!fontsLoaded) return null;
    return (
        <View style={styles.cajita}>
        <View style={styles.cabecera}>
            <View style={styles.icono}>
            <Image
            style={styles.perfil}
            source={{uri:'https://cdn.icon-icons.com/icons2/91/PNG/512/pinterest_16445.png'}}
            />
            </View>
        <View style={styles.contenedorletras}>
            <Text style={{ fontFamily: 'Ubuntu', fontSize: 21 }}> Writing & Content</Text>
            <Text style={{fontFamily: 'Oswald', fontSize: 15,color:'rgb(113, 107, 107)' }}>Pinterest</Text>
        </View>
        <View style={styles.figurita}>
        <MaterialCommunityIcons name="bookmark-minus" size={34} color="rgb(26, 150, 232)" />
        </View>
            </View>
            <View style={styles.cajitaAbajo}>
              <Text style={styles.lugar}>Paris, France</Text>
              <Text style={styles.precios}>$5,000 - $15,000/month</Text>
              </View>
              <View style={styles.cajitabotenes}>
              <TouchableOpacity style={styles.botonuno}>
                    <Text style={styles.nombreBoton}>Part Time</Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.botondos}>
                    <Text style={styles.nombreBoton}>Onsite</Text>
                </TouchableOpacity>
                </View>
        </View>


    );
}

const styles = StyleSheet.create({

    cajita:{
        marginTop:12,
        alignSelf:'center',
        width:'90%',
        height:230,
        borderRadius:33,
        borderColor:'rgb(223, 223, 223)',
        borderWidth:2,
      },
      cabecera:{
        display:'flex',
        flexDirection:'row',
        marginTop:12,
        alignSelf:'center',
        width:'90%',
        height:84,
        borderBottomWidth:1,
        borderColor:'gray',
      },
      icono:{
        alignItems:'center',
        alignSelf:'center',
        width:60,
        height:60,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:23,
      },
      contenedorletras:{
        alignSelf:'center',
        width:'65%',
        height:53,
        marginLeft:6,
        backgroundColor:'white',
        flexDirection:'column',
      },
      figurita:{
        marginTop:12,
        marginLeft: 'auto',
      },
      perfil: {
        marginTop:12,
        width: 33,
        height: 32,
      },
      cajitaAbajo:{
        marginTop:12,
        alignItems:'center',
        alignSelf:'center',
        width:'65%',
        height:54,
      },
      lugar:{
        fontSize:18,
        color:'rgb(113, 107, 107)',
        fontFamily: 'Oswald'
      },
      precios:{
        fontSize:18,
        fontFamily: 'Ubuntu',
        color:' rgb(26, 163, 255)'
      },
      cajitabotenes:{
        marginTop:12,
        alignItems:'center',
        alignSelf:'center',
        width:'60%',
        height:34,
        flexDirection:'row',
      },
      botonuno:{
        alignItems:'center',
        width:84,
        height:30,
        borderWidth:2,
        borderColor:'gray',
        borderRadius:12,
      },
      botondos:{
        marginLeft:12,
        alignItems:'center',
        width:74,
        height:30,
        borderWidth:2,
        borderColor:'gray',
        borderRadius:12,
      },
      nombreBoton:{
        fontSize:13,
        color:'gray',
      }
})