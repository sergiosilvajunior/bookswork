import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function EsqueceuSenha() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image
                style={styles.img}
                source={require('@expo../../../assets/triste.png')}
            />

            <Text style={styles.textmaior} >Esqueceu sua senha ?</Text>
            <Text style={styles.textmenor} >Não se preocupe, enviaremos instruções de redefinição.</Text>
            
            <TextInput style={styles.input}
                placeholder="E-mail"
                placeholderTextColor = "#FFF"
            />

            <TouchableOpacity style={styles.submitButton} >
                <Text style={styles.submitButtonText} > Alterar senha </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = { () => navigation.navigate('Login')}>
                <Text style={styles.textmenor} >Voltar para o login.</Text>
            </TouchableOpacity>
            </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: '10%',
        backgroundColor: '#040821',
    },
    textmaior: {
        paddingTop: '40%',
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center'
    },
    textmenor: {
        paddingTop: '10%',
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
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