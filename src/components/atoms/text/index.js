import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const CustomText = ({ children }) => {
    return (
        <Text style={styles.titleText}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#F5DEB3',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:12
    }
});


  