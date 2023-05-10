import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';

export default function CriarConta() {

    const navigation = useNavigation();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const criar = () => {
        Alert.alert(`O usuário ${nome} foi criado com sucesso com o email ${email}`)
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                
                <Text style={styles.message}>Criar conta</Text>
                
                <Input 
                    placeholder="Nome *"
                    onChangeText={value => setNome(value) }
                />

                <Input 
                    placeholder="E-mail *"
                    leftIcon={{type: 'font-awesome', name: 'envelope'}}
                    onChangeText={value => setEmail(value) }
                    keyboardType="email-address"
                />
                <Input 
                    placeholder="Senha *"
                    leftIcon={{type: 'font-awesome', name: 'lock'}}
                    onChangeText={value => setPassword(value) }
                    secureTextEntry={true}
                />

                <Text style={styles.textmenor} > Precisa ter no minimo 8 caracteres </Text>
                
                <TouchableOpacity onPress = {() => criar() }  style={styles.submitButton} >
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