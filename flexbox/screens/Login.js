import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

export default class Login extends Component {
  render() {return(
        <View style={styles.contenidor}>
            <View style={styles.espacio1}>
            </View>

            <View style={styles.seccio1}>
            <Input placeholder='Nombre'/>
            </View>
            
            <View style={styles.seccio1}>
            <Input placeholder='Contraseña'/>
            </View>
            <View style={styles.seccio2}>
            <Button title={'Entrar'} titleStyle={{color:'white', fontWeight:'bold'}}
             buttonStyle={{width:140, height:40, backgroundColor:'#8A3CF3', marginTop:10}}/>
            <Button title={'Registrarse'} titleStyle={{color:'white', fontWeight:'bold'}}
             buttonStyle={{width:140, height:40, backgroundColor:'#8A3CF3', marginTop:30}}/>
            
            </View>
            <View style={styles.espacio1}>
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
    flex:2,
    borderColor:'grey',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
    borderRadius:40,
    backgroundColor:'#E3D6F5',
    width:300, 
    marginLeft:50,

    },
    seccio2: {
        flex: 2,
        flexDirection: 'column',
        paddingLeft: 120
    },
    espacio1: {
        flex: 1,
        margin: 40,
    },
});