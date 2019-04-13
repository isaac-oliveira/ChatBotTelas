import React, { Component } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import CBTypes from '../Redux/CBRedux'

import CBInput from '../Components/CBInput'
import CBButton from '../Components/CBButton'

import styles from './Styles/RegisterScreenStyle'

class RegisterScreen extends Component {

    state = {
        username: 'Isaac',
        email: 'Isaacsantos9876@gmail.com',
        password: '123456'
    }

    setUsername = (username) => {
        this.setState({username})
    }

    setEmail = (email) => {
        this.setState({email})
    }

    setPassword = (password) => {
        this.setState({password})
    }

    cadastrar = () => {
        this.props.onPress(this.state.username, this.state.email, this.state.password)
        const { navigate } = this.props.navigation
        navigate('ChatScreen')
    }

    navLogin = () => {
        const { navigate } = this.props.navigation
        navigate('LoginScreen')
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerUser}>
                    <Text style={styles.name}>ChatBot</Text>

                    <View style={styles.containerInput}>
                        <CBInput placeholder='Usuário' onChangeText={this.setUsername} />
                        <CBInput style={styles.div} placeholder='E-mail' onChangeText={this.setEmail}/>
                        <CBInput style={styles.div} placeholder='Senha' onChangeText={this.setPassword} secureTextEntry={true}/>
                    </View>

                    <CBButton title='Cadastrar' onPress={this.cadastrar}/>
                </View>

                <TouchableOpacity style={styles.btnCadastro} onPress={this.navLogin}>
                    <Text style={styles.btnCadastroText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
 }

 const mapStateToProps = (state) => ({})

 const mapDispatchToProps = (dispatch) => ({
     onPress: (username, email, password) => {
         dispatch(CBTypes.createUser(username, email, password))
     }
 })

 export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)