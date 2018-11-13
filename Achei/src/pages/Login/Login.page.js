import React, { Component } from 'react';

import { 
    View, 
    Text,
    KeyboardAvoidingView,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';

import styles from './Login.style';
import logo from '../../assets/img/logo.png'
import api from '../../services/api';
import ApiResult from '../../models/ApiResult';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        usuario : '',
        senha : ''
    }

    async componentDidMount(){
        
        var usuario  = await AsyncStorage.getItem('@Achei:usuario');

        if(usuario){
            this.navigateToHome();
        }
    }

    handleUsernameChange = (usuario) => {
        this.setState({usuario});
    };
    
    handlePasswordChange = (senha) => {
        this.setState({senha});
    }
  
    navigateToHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })  
            ]
        });

        this.props.navigation.dispatch(resetAction);
    }

    handleLogin = async () => {
        const { usuario } = this.state;
        const { senha } = this.state;
        
        if (!usuario.length || !senha.length) return;
        
        const req = await api.post('login', { usuario, senha });
        
        if(!req.data.result)
        {
            Alert.alert('Não foi possível realizar login.');
            return;   
        }

        await AsyncStorage.setItem('@Achei:usuario', usuario);

        this.navigateToHome();
    };


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="height">
                <View style={styles.content}>
                    <Image source={logo} style={styles.logo}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do usuário"
                        value={this.state.usuario}
                        onChangeText={this.handleUsernameChange}
                      />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="Senha"
                        value={this.state.senha}
                        onChangeText={this.handlePasswordChange}
                        returnKeyType="send"
                        onSubmitEditing={this.handleLogin}
                        />
  
                  <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                      <Text style={styles.buttonText}>Entrar</Text>
                  </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
