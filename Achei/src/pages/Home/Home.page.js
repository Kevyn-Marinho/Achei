import React, { Component } from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


import Card from '../../components/achei-card/Card';
import styles from './Home.styles';
import image from '../../assets/img/date-in-coffee.jpg';

export default class Home extends Component {
    static navigationOptions ={
        header : null
    };
  

    componentDidMount(){
        this.setEventListeners();
    }

    setEventListeners(){
        DeviceEventEmitter.addListener('navigate', (data) => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: data.navigateTo })  
                ]
            });
        
            this.props.navigation.dispatch(resetAction);
        });

    }
    render() {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Card   
                    titulo="Pessoas" 
                    backgroundImage={image} 
                    descricao="Encontre seus amores para a vida, ou outras coisas."
                    route="Encontros"
                    ></Card>
                <Card 
                    titulo="Eventos" 
                    descricao="Encontre os melhores eventos por perto."
                    route="Pessoas"></Card>
                <Card 
                    titulo="Roteiros" 
                    descricao="Encontre incríveis roteiros para sua viagem inesquecível."
                    route="Pessoas"></Card>
            </View>
        </View>

    ) 
  }
}
