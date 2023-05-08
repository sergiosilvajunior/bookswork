import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logoImage from '../../../../assets/BookSwapify-full.png'

export const Logo = () => {
    return (
        <Image style={StyleSheet.logo}  source={logoImage}  />
    )
}

const style = StyleSheet.create({
    logo: {
        height: 230,
        width: 230
    }

})

