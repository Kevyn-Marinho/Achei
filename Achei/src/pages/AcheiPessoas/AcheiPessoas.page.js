import React, { Component } from 'react';

import { View, Text, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import Pessoas from '../../components/pessoas/pessoas.component';

import Icon from 'react-native-vector-icons/Ionicons';


export default class Encontros extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Encontros",
        headerLeft: (
            <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
                <Icon name="ios-arrow-back" size={24} color="#4BB0EE" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
        )
    });

    state = {
        proximosEncontros : [],
        usuarioLogado : '',
        id : '',
        index : 0
      }
    
    async componentDidMount(){
        const response = await AsyncStorage.getItem('@Achei:usuario');

        this.setState( { usuarioLogado: response.data } );
      
    };

    setEventListeners(){
        DeviceEventEmitter.addListener('iDidMychoice', (data) => {
            const id = 0;// this.state.proximosEncontros[this.state.index];
            
            if(this.state.index < 5 )
                this.setState( { id });
        });

 
    }


    handlePasswordChange = (senha) => {
        this.setState({senha});
    };
  
    render() {
        return (
            <View>
                <Pessoas />
            </View>
        );
  }
}
