import React, { Component } from 'react'
import { connect } from 'react-redux'
import CBSelectors from '../Redux/CBRedux'

import ChatScreenComponent from '../Components/ChatScreen'

var steps = null
var chatInput = null

class ChatScreen extends Component {
    state = {
        id: 0,
        list: [],
        userMsg: '',
    }   

    //Coloca o texto do input no state
    setUserMsg = (userMsg) => {
        this.setState({userMsg})
    }

    //Pega a referência do input
    refInput = (input) => {
        this.chatInput = input
    }

    onPress = () => {
        if(this.state.userMsg != '') {
            // Coloca mais uma mensagem na lista
            this.setState({
                list: [{isMy: false, msg: steps[this.state.userMsg]}].concat([{isMy: true, msg: this.state.userMsg}]).concat(this.state.list),
            })
            this.chatInput.clear();
        } else {
            alert('Digite alguma coisa!')
        }
    }

    render() {
        //Lista para pode visualizar a lista de mensagem
        steps = {
            'Olá': `Olá, ${this.props.username}`,
            'Tudo bom?': 'Sim e você?',
            'Estou bem!': 'No que posso te ajudar?',
            'Qual é o seu nome?' : 'Me chamo Robot', 
            'Qual sua função?': 'Fui feito para te ajudar', 
            'Tchau!': 'Até mais!'
        }

        return(
            <ChatScreenComponent 
                reference={this.refInput}
                onPress={this.onPress} 
                setUserMsg={this.setUserMsg} 
                list={this.state.list} />
        )
    }
}

mapStateToProps = (state) => ({
    username: state.user.username,
})

mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)