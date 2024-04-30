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

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      marginTop:20,
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 100,
      width: '100%',
      
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    image: {
      width: 30,
      height: 40,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333333',
    },
  });

export default HeaderComponent