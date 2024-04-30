import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

import img from '../assets/logo.png';

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <Image source={img} style={styles.image}></Image>
            <Text style={styles.text}>Manresa Monumental</Text>
        </View>
    );
}

//create our styling code:
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row', // Alinear elementos horizontalmente
      marginTop:20,
      alignItems: 'center', // Centrar verticalmente los elementos
      justifyContent: 'space-around', // Centrar horizontalmente los elementos
      height: 100,
      width: '100%', // Ancho del 100% del contenedor
      
      borderBottomWidth: 1, // Añade una línea inferior al encabezado
      borderBottomColor: '#CCCCCC', // Color de la línea inferior
    },
    image: {
      width: 30, // Tamaño de la imagen
      height: 40, // Tamaño de la imagen
    },
    text: {
      fontSize: 20, // Tamaño del texto
      fontWeight: 'bold', // Peso del texto
      color: '#333333', // Color del texto
    },
  });

export default HeaderComponent