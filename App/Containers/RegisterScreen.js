import React, { Component } from 'react'
import { connect } from 'react-redux'
import CBTypes from '../Redux/CBRedux'

import RegisterScreenComponent from '../Components/RegisterScreen'

class RegisterScreen extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    //Coloca username, email e password no state
    getHandler = (key) => (val) => {
        this.setState({ [key]: val });
    }
    
    //Login no firebase
    cadastrar = () => {
        let username = this.state.username
        let email = this.state.email 
        let password = this.state.password
        if (username != '' && email != '' && password != '') {
            this.props.onPress(username, email, password)
            const { navigate } = this.props.navigation
            navigate('ChatScreen')
        } else {
            alert('Por favor, preencha todos os campos para continuar')
        }
    }

    //Navega para tela de Login
    navLogin = () => {
        const { navigate } = this.props.navigation
        navigate('LoginScreen')
    }

    render() {
        return(
            <RegisterScreenComponent 
                getHandler={this.getHandler}
                cadastrar={this.cadastrar}
                navLogin={this.navLogin} />
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