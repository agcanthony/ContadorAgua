/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';

export default class ContadorAgua extends Component {

    constructor(props) {
        super(props);
        this.state = {consumido:0, status:'Ruim', pct:0};

        this.addCopo = this.addCopo.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }

    atualizar() {
        let s = this.state;
        s.pct = Math.floor((s.consumido/2000)*100);

        if(s.pct > 102){
            s.status = "Excelente";
        }

        if(s.pct >= 100 && s.pct < 101) {
            s.status = "Otimo";
        } 

        if(s.pct >= 50 && s.pct <= 90){
            s.status = "Bom"
        }
        
        if(s.pct <= 40) {
            s.status = "Ruim";
        }

        
        this.setState(s);
    }

    addCopo() {
        let s =this.state;
        s.consumido += 200;
        this.setState(s);

        this.atualizar();
    }

  render() {
    return (

      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage} >
            <View>
            <Text style={styles.titulo}>Contador de copos de água</Text>
                <View style={styles.infoArea}>

                    <View style={styles.area}>
                        <Text style={styles.areaTitulo}>Meta</Text>
                        <Text style={styles.areaDado}>2000ml</Text>
                    </View>

                    <View style={styles.area}>
                         <Text style={styles.areaTitulo}>Consumido</Text>
                         <Text style={styles.areaDado}>{this.state.consumido} ml</Text>
                    </View>

                    <View style={styles.area}>
                         <Text style={styles.areaTitulo}>Status</Text>
                         <Text style={styles.areaDado}>{this.state.status}</Text>
                    </View>
                </View>

                <View style={styles.pctArea}>
                    <Text style={styles.pctTexto}>{this.state.pct}%</Text>
                </View>

                <View style={styles.btnArea}>
                    <Button title="Beber 200ml" onPress={this.addCopo}/>
                </View>
            </View>
        </ImageBackground>
      </View>

      );
  }
}
const styles = StyleSheet.create ({
    body:{
        flex: 1,
        paddingTop: 5
    },
    bgimage:{
        flex: 1,
        width: null
    },
    titulo:{
        fontSize: 25,
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold'  
    },
    infoArea:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 70
    },
    area:{
        flex: 1,
        alignItems: 'center' 
    },
    areaTitulo:{
        color: '#45b2fc'
    },
    areaDado:{
        color: '#2b4174',
        fontSize: 15,
        fontWeight: 'bold' 
    },
    pctArea:{
        marginTop: 190,
        alignItems: 'center' 
    },
    pctTexto:{
        fontSize: 70,
        color: '#FFFFFF',
        backgroundColor: 'transparent'
    },
    btnArea:{
        marginTop: 30,
        alignItems: 'center' 
    }
});