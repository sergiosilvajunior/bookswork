import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Input } from 'react-native-elements';

export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logar = () => {
        if (email == 'sergio@teste.com.br' &&  password  == 'teste'){
            Alert.alert(`Login realizado com sucesso: ${email} `)
        }else{
            Alert.alert(`Senha ou email incorreto`)
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Login</Text>
            </Animatable.View>
        
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Input style={styles.input}
                    placeholder="E-mail *"
                    leftIcon={{type: 'font-awesome', name: 'envelope'}}
                    onChangeText={value => setEmail(value) }
                    keyboardType="email-address"
                />
                <Input style={styles.input}
                    placeholder="Senha *"
                    leftIcon={{type: 'font-awesome', name: 'lock'}}
                    onChangeText={value => setPassword(value) }
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={ () => navigation.navigate('EsqueceuSenha')} >
                    <Text style={styles.textmenor}> Esqueci minha senha </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => logar() }style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Logar </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('CriarConta')} style={styles.textmenor}>
                    <Text style={styles.textmenor}> Nao possuo uma conta? Crie agora mesmo </Text>
                </TouchableOpacity>
            </Animatable.View>
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
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    textmenor: {
        paddingTop: '10%',
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center'
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