import React, { Component } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import CBTypes from '../Redux/CBRedux'

import CBInput from '../Components/CBInput'
import CBButton from '../Components/CBButton'

import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {

    state = {
        email: 'Isaacsantos9876@gmail.com',
        password: '123456'
    }

    setEmail = (email) => {
        this.setState({email})
    }

    setPassword = (password) => {
        this.setState({password})
    }

    login = () => {
        this.props.onPress(this.state.email, this.state.password)
        const { navigate } = this.props.navigation
        navigate('ChatScreen')
    }

    navCadastro = () => {
        const { navigate } = this.props.navigation
        navigate('RegisterScreen')
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerUser}>
                    <Text style={styles.name}>ChatBot</Text>

                    <View style={styles.containerInput}>
                        <CBInput placeholder='E-mail' onChangeText={this.setEmail} />
                        <CBInput style={styles.div} placeholder='Senha' onChangeText={this.setPassword} secureTextEntry={true}/>
                    </View>

                    <CBButton title='Login' onPress={this.login}/>
                </View>

                <TouchableOpacity style={styles.btnCadastro} onPress={this.navCadastro}>
                    <Text style={styles.btnCadastroText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        )
    }
 }

 const mapStateToProps = (state) => ({})

 const mapDispatchToProps = (dispatch) => ({
     onPress: (email, password) => {
         dispatch(CBTypes.loginUser(email, password))
     }
 })

 export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)