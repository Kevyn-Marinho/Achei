import React, { Component } from 'react';
import { 
  View, 
  Button, 
  Text, 
  Image, 
  DeviceEventEmitter,
  TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api';
import styles from './pessoas.styles';
import logo from '../../assets/img/teste.png'

export default class Pessoas extends Component {

  state = {
    pessoa : {}
  }
  
  async componentWillMount(){
    const pessoa = {
      id : 'asdf',
      nome: "Kevyn Marinho",
      idade: 22,
      ocupacao: 'Desenvolvedor .Net na Avanade',
      percentualMatch: 73

    }
    //(await api.get('usuarios/' + this.props.id)).data;

    this.setState({ pessoa });
  }

  handleUnlike(){
    //api.post('like', {usuario: usuario, id : this.props.id});
    DeviceEventEmitter.emit('iDidMychoice', {name:'John', age:23});
  }

  handleLike(){
    DeviceEventEmitter.emit('iDidMychoice', {name:'John', age:23});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.row}>
            <Image source={logo} style={styles.image  } />
            <Text>{this.state.pessoa.nome}</Text>

          </View>
          <View style={styles.row}>
        
            <View style={ styles.buttons }>
              <TouchableOpacity onPress={this.handleUnlike} style={ styles.choiceButton }> 
                <Icon name="times-circle" size={70} color="#d0678c" />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.handleLike} style={ styles.choiceButton }>
                <Icon name="check-circle" size={70} color="#d0678c" />
              </TouchableOpacity> 
              </View> 
          </View>      
        </View>
      </View>
    );
  }
}
