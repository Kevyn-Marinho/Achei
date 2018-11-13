import React, { Component } from 'react';

import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image , DeviceEventEmitter} from 'react-native';

import styles from './Card.style';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Card extends Component {
    navigate = () => {
        DeviceEventEmitter.emit('navigate', {navigateTo: this.props.route});
    }

  render() {
    const titulo = this.props.titulo;
    const descricao = this.props.descricao;
    const backgroundImage = this.props.backgroundImage;

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
           <View style={styles.content} >
                <TouchableOpacity style={styles.card} onPress={this.navigate}>
                    <Image style={styles.backgroundImage} source={backgroundImage} />
                    <Text name="Title" style={styles.titulo} >{titulo}</Text>
                    <Text name="Description" style={styles.descricao}>{descricao}</Text>
                </TouchableOpacity>
           </View>
        </KeyboardAvoidingView>
    );
  }
}
