import React, { Component } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import CBInput from './CBInput'
import CBButton from './CBButton'

import styles from './Styles/LoginScreenStyle'

const LoginScreen = (props) => {
    passwordInput = null

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Text style={styles.name}>ChatBot</Text>

                <View style={styles.containerInput}>

                    <CBInput
                        placeholder='E-mail'
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => {passwordInput.focus()}}
                        onChangeText={props.getHandler('email')} />

                    <CBInput 
                        reference={(input) => {passwordInput = input}} 
                        style={styles.div}
                        returnKeyType='next'
                        blurOnSubmit={false} 
                        placeholder='Senha' 
                        onChangeText={props.getHandler('password')} 
                        secureTextEntry={true} />
                </View>

                <CBButton 
                    title='Login' 
                    onPress={props.login}/>
            </View>

            <TouchableOpacity 
                style={styles.btnCadastro} 
                onPress={props.navCadastro}>
                
                <Text style={styles.btnCadastroText}>Cadastrar</Text>
            
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen