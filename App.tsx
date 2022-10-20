import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Cabecera from './componentes/cabecera';
import Botones from './componentes/botones';
import Cuadritos from './componentes/cuadritos';
import CuadritoDos from './componentes/cuadritoDos';
import CuadritoTres from './componentes/cuadritoTres';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar backgroundColor={"white"} />
    <ScrollView>
      <View>
        <Cabecera
        />
        <Botones
        />
        <Cuadritos
        />
        <CuadritoDos
        />
        <CuadritoTres
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '250%',
    backgroundColor: 'pink',
  },
})
