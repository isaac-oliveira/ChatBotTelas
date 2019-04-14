import React, { Component } from 'react'
import { connect } from 'react-redux'
import CBTypes from '../Redux/CBRedux'

import LoginScreenComponent from '../Components/LoginScreen'

class LoginScreen extends Component {

    state = {
        email: '',
        password: ''
    }

    //Coloca email e password no state
    getHandler = (key) => (val) => {
        this.setState({ [key]: val });
    }

    //Login no firebase
    login = () => {
        let email = this.state.email
        let password = this.state.password
        if(email != '' && password != '') {
            this.props.onPress(email, password)
            const { navigate } = this.props.navigation
            navigate('ChatScreen')
        } else {
            alert('Por favor, preencha todos os campos para continuar')
        }
    }

    //Navega para a tela de Cadastro
    navCadastro = () => {
        const { navigate } = this.props.navigation
        navigate('RegisterScreen')
    }

    render() {
        return(
            <LoginScreenComponent 
                getHandler={this.getHandler}
                login={this.login}
                navCadastro={this.navCadastro} />
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