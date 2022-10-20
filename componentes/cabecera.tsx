import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';

export default function Cabecera() {
    const [fontsLoaded] = useFonts({
        'IBM Plex Sans': require('../assets/Font/IBMPlexSans-BoldItalic.ttf'),
        'Oswald': require('../assets/Font/Oswald-VariableFont_wght.ttf'),
    })
    if (!fontsLoaded) return null;
    return (
        <View style={styles.contenedor}>
            <AntDesign style={styles.flechita} name="arrowleft" size={28} color="black" />
            <Text style={{ fontFamily: 'Oswald', fontSize: 28 }}> Recent Jobs</Text>
            <Entypo style={styles.lupita} name="magnifying-glass" size={37} color="rgb(113, 107, 107)" />
        </View>

);
}
const styles = StyleSheet.create({
contenedor:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:72,
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
});