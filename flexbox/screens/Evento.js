import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, ActivityIndicator,} from 'react-native';
import {Header, Image, Avatar, Input, Button, Icon, Card } from 'react-native-elements';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

export default class Main extends Component {
  render() {
    return (

      <View style={styles.contenidor}>
        <View style={styles.nompreapp}>
          <Text style={{ fontSize: 25, }}>Place My Bet</Text>
        </View>
        <View style={styles.deporte}>
          <Text style={{ fontSize: 25, }}>Nombre del evento</Text>
          <View style={styles.imagen}>
            <Image
              source={{ uri: 'https://cdn.discordapp.com/attachments/734541936618242129/764919483487223818/Pngtreefootball_championship_realistic_soccer_ball_5316695.png' }}
              style={{ width: 80, height: 40, alignSelf: 'flex-end' }}
            />

          </View>
        </View>
        <View style={styles.contenedor2}>
          <View style={styles.informacion}>
            <View style={styles.datos1}>
              <Image
                source={{ uri: 'https://cdn.discordapp.com/attachments/533381207505895441/785164337031020614/588cac7bd5567337fe2498a42e443e0d.png' }}
                style={{ width: 90, height: 60, alignSelf: 'center' }}
              />
            </View>
            <View style={styles.datos2}>
            </View>
          </View>

          <View style={styles.informacion}>
            <View style={styles.datos1}>
              <Image
                source={{ uri: 'https://cdn.discordapp.com/attachments/533381207505895441/785164337031020614/588cac7bd5567337fe2498a42e443e0d.png' }}
                style={{ width: 90, height: 60, alignSelf: 'center' }}
              />
            </View>
            <View style={styles.datos2}>
            </View>
          </View>

          <View style={styles.informacion}>
            <View style={styles.datos1}>
              <Image
                source={{ uri: 'https://cdn.discordapp.com/attachments/533381207505895441/785164337031020614/588cac7bd5567337fe2498a42e443e0d.png' }}
                style={{ width: 90, height: 60, alignSelf: 'center' }}
              />
            </View>
            <View style={styles.datos2}>
            </View>
          </View>

          <View style={styles.informacion}>
            <View style={styles.datos1}>
              <Image
                source={{ uri: 'https://cdn.discordapp.com/attachments/533381207505895441/785164337031020614/588cac7bd5567337fe2498a42e443e0d.png' }}
                style={{ width: 90, height: 60, alignSelf: 'center' }}
              />
            </View>
            <View style={styles.datos2}>
            </View>
          </View>

          <View style={styles.boton}>
          <Button title={'Menu principal'} titleStyle={{color:'white', fontWeight:'bold'}}
             buttonStyle={{width:140, height:40, backgroundColor:'#8A3CF3', marginTop:30}}/>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'purple',
    borderWidth: 5,
    backgroundColor: '#CDB5EE'
  },
  nompreapp: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 4,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#E1D3F4'
  },
  deporte: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 4,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E1D3F4'
  },
  imagen: {
    flex: 1,
    paddingLeft: 90,
    height: 37,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  datos1: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 4,
    padding: 12,
    height: 80,
    alignSelf: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#B294DC'
  },
  datos2: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 4,
    padding: 12,
    height: 85,
    alignSelf: "flex-end",
    borderRadius: 10,

    backgroundColor: '#B294DC'
  },
  informacion: {
    flex: 3,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 12,
    flexDirection: 'row',
    borderRadius: 10
  },
  boton: {
    flex: 3,
    padding: 12,
    flexDirection: 'row',
    paddingLeft:200
  },
  contenedor2: {
    flex: 20,
    margin: 4,
    padding: 12,
    borderRadius: 10
  },
});


