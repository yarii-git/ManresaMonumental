import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { mapStyle } from './mapStyle';
import { MARKERS_DATA } from '../../data/MARKERS_DATA';
import HeaderComponent from '../HeaderComponent';

const MapScreen = () => {
  const mapRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const handleMarkerPress = (marker, index) => {
    
    setSelectedMarker(MARKERS_DATA[index]);

    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }

  };

  return (
    <View style={styles.container}>
      <HeaderComponent style={styles.header} />
      <MapView
        ref={mapRef}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 41.73015213309458,
          longitude: 1.8306851445290087,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
      >
        {MARKERS_DATA.map((marker, index)  => (
          <Marker
            key={marker.id}
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            onPress={() => handleMarkerPress(marker, index)}
          >
            {selectedMarker && selectedMarker.id === marker.id && <Text>{selectedMarker.name}</Text>}
          </Marker>
        ))}
      </MapView>
      <FlatList
        style={styles.slider}
        horizontal
        data={MARKERS_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleMarkerPress(item, index)}>
            <View style={styles.slide}>
              <Image source={item.img} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  slider: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  slide: {
    width: 200,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MapScreen;
