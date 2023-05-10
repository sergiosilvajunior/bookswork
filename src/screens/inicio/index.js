import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {  Logo, TextInfo } from '../../components'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Inicio ()  {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <Animatable.View animation="flipInY">
      <View>
        <Logo />
      </View>
      </Animatable.View>

      <Animatable.View delay={600} animation="fadeInUp">
        <View>
          <TextInfo> Liberte seus livros </TextInfo>
          <TextInfo> Compartilhe suas histórias </TextInfo>
          <TextInfo> e enriqueça sua coleção </TextInfo>
        </View>
        </Animatable.View>
        <View style={styles.containerButton} >
          <TouchableOpacity
            onPress={ () => navigation.navigate('Login')
             }
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#040821',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton:{
    position: 'absolute',
    backgroundColor: '#836FFF',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFAE9',
    fontSize: 18,
    fontWeight: 'bold'
  }

});
