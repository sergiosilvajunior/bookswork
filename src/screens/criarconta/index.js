import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'


export default function CriarConta() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                
                <Text style={styles.message}>Criar conta</Text>
                
                <TextInput style={styles.input}
                    placeholder="Nome *"
                    placeholderTextColor = "#FFF"
                />
                <TextInput style={styles.input}
                    placeholder="E-mail *"
                    placeholderTextColor = "#FFF"
                />
                <TextInput style={styles.input}
                    placeholder="Senha *"
                    placeholderTextColor = "#FFF"
                />
                <Text style={styles.textmenor} > Precisa ter no minimo 8 caracteres </Text>
                
                <TouchableOpacity style={styles.submitButton} >
                    <Text style={styles.submitButtonText} > Criar conta </Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={ () => navigation.navigate('Login')}>
                    <Text style={styles.textmenor}> Já possui uma conta. </Text>
                </TouchableOpacity>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: '10%',
        backgroundColor: '#040821',
    },
    containerHeader:{
        marginTop: '20%',
        marginBottom: '20%',
        paddingStart: '15%'
    },
    message:{
        fontSize: 38,
        color: '#FFF',
    },
    containerForm:{
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingStart: '10%',
        paddingEnd: '10%',
    },
    input: {
        marginTop: 30,
        left: -10,
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    textmenor: {
        paddingTop: '10%',
        color: '#FFF',
        fontSize: 15,
        textAlign: 'left'
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 50,
     },
     submitButtonText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
     }
})