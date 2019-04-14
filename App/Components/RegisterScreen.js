import React, { Component } from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import CBInput from './CBInput'
import CBButton from './CBButton'

import styles from './Styles/RegisterScreenStyle'

const RegisterScreen = (props) => {
    emailInput = null
    passwordInput = null

    return  (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Text style={styles.name}>ChatBot</Text>

                <View style={styles.containerInput}>
                    <CBInput 
                        placeholder='Usuário' 
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => {emailInput.focus()}}
                        onChangeText={props.getHandler('username')} />

                    <CBInput 
                        style={styles.div}
                        reference={(input) => {emailInput = input}}  
                        placeholder='E-mail' 
                        returnKeyType='next'
                        blurOnSubmit={false}
                        onSubmitEditing={() => {passwordInput.focus()}}
                        onChangeText={props.getHandler('email')}/>

                    <CBInput 
                        style={styles.div} 
                        reference={(input) => {passwordInput = input}} 
                        placeholder='Senha' 
                        onChangeText={props.getHandler('password')} 
                        secureTextEntry={true}/>

                </View>

                <CBButton 
                    title='Cadastrar' 
                    onPress={props.cadastrar}/>
            </View>

            <TouchableOpacity 
                style={styles.btnCadastro} 
                onPress={props.navLogin}>

                <Text style={styles.btnCadastroText}>Login</Text>

            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen