import React, { Component } from 'react'
import { View, FlatList, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import CBSelectors from '../Redux/CBRedux'

import CBIconButton from '../Components/CBIconButton'
import CBInput from '../Components/CBInput'

import styles from './Styles/ChatScreenStyle'

var steps = null
class ChatScreen extends Component {
    
    chatInput = null

    state = {
        id: 0,
        list: [],
        userMsg: 'Olá',
    }   

    setUserMsg = (userMsg) => {
        this.setState({userMsg})
    }

    onPress = () => {
        if(this.state.userMsg != '') {
            this.setState({
                list: [{isMy: false, msg: steps[this.state.userMsg]}].concat([{isMy: true, msg: this.state.userMsg}]).concat(this.state.list),
            })
        }
    }

    render() {
        steps = {
            'Olá': `Olá, ${this.props.username}`,
            'Tudo bom?': 'Sim e você?',
            'Estou bem!': 'No que posso te ajudar?',
            'Qual é o seu nome?' : 'Me chamo Robot', 
            'Qual sua função?': 'Fui feito para te ajudar', 
            'Tchau!': 'Até mais!'
        }

        return(
            <View style={styles.container}>
                <FlatList 
                    inverted
                    style={styles.list}
                    data={this.state.list}
                    renderItem={({item}) =>{
                         if(item.isMy) return (
                             <View style={styles.containerUser}>
                                 <Text style={styles.containerUserText}>{item.msg}</Text>
                             </View>
                         )
                         return (
                         <View style={styles.containerRobot}>
                            <Text style={styles.containerRobotText}>{item.msg}</Text>
                        </View>)
                        }}
                    keyExtractor={item => item.msg} />
                    
                <View style={styles.containerInput}>
                    <CBInput style={styles.input} onChangeText={this.setUserMsg} placeholder='Digite uma mensagem'/>
                    <CBIconButton style={styles.icon} color='#077' icon='send' size='22' onPress={this.onPress}/>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => ({
    username: state.user.username,
})

mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)