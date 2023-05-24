import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const map_style = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
        position: 'absolute'
    },
})

export default function Map({initial}) {
    const [region, setRegion] = useState(initial);

    return (
        <MapView
            style={map_style.map}
            showsUserLocation={true}
            initialRegion={initial}
            onRegionChangeComplete={region => setRegion(region)}
            />
    );
}