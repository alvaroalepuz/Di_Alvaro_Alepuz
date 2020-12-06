import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

export default class Registrarse extends Component {
  render() {return(
        <View style={styles.contenidor}>
            <View style={styles.seccio1}>
            <Input placeholder='Nombre'/>
            </View>
            <View style={styles.seccio1}>
            <Input placeholder='Apellidos'/>
            </View><View style={styles.seccio1}>
            <Input placeholder='Correo'/>
            </View><View style={styles.seccio1}>
            <Input placeholder='Nº Tarjeta'
            />
            </View><View style={styles.seccio1}>
            <Input placeholder='Nº Cuenta'/>
            </View><View style={styles.seccio1}>
            <Input placeholder='Contraseña'/>
            </View>
            <View style={styles.seccio2}>
            <Button title={'Aceptar'} titleStyle={{color:'white', fontWeight:'bold'}}
            buttonStyle={{width:140, height:40, backgroundColor:'#BBF599', marginTop:30}}/>
            <Button title={'Cancelar'} titleStyle={{color:'white', fontWeight:'bold'}}
            buttonStyle={{width:140, height:40, backgroundColor:'#F59C9C', marginTop:30}}/>
            </View>
            </View>
 );
}
};
    
const styles = StyleSheet.create({
    contenidor: {
    flex: 1,
    flexDirection: 'column',
    borderColor:'purple',
    borderWidth:5,
    backgroundColor:'#B28EE3'
    
    },
    seccio1: {
    flex:1,
    borderColor:'grey',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding:12,
    textAlign: 'right',
    borderRadius:40,
    backgroundColor:'#E3D6F5',
    },
    seccio2: {
        flex: 3,
        paddingLeft: 120
    },
});