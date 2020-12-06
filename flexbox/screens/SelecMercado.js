import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

export default class SelecMercado extends Component {
  render() {return(
        <View style={styles.contenidor}>
            <View style={styles.seccio1}>
            <Input placeholder='Tipo de Apuesta'/>
            </View>
            <View style={styles.seccio1}>
            <Input placeholder='Apuesta'/>
            </View><View style={styles.seccio1}>
            <Input placeholder='Tipo Apuesta'/>
            </View><View style={styles.seccio1}>
            <Input placeholder='Resultados aproximados'
            />
            </View><View style={styles.seccio1}>
            <Input placeholder='Cantidad'/>
            </View><View style={styles.seccio1}>
            <Input placeholder='Cantidad de  dinero'/>
            </View>
            <View style={styles.seccio2}>
            <Button title={'Aceptar'} titleStyle={{color:'white', fontWeight:'bold'}}
            buttonStyle={{width:140, height:40, backgroundColor:'#8A3CF3', marginTop:10}}/>
            <Button title={'Atras'} titleStyle={{color:'white', fontWeight:'bold'}}
            buttonStyle={{width:140, height:40, backgroundColor:'#8A3CF3', marginTop:10,marginLeft:6}}/>
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
        flex: 2,
        flexDirection: 'row',
        paddingLeft: 55
    },
});