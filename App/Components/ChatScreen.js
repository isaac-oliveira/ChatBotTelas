import React, { Component } from 'react'
import { View, FlatList, Text, TextInput } from 'react-native'

import CBIconButton from './CBIconButton'
import CBInput from './CBInput'

import styles from './Styles/ChatScreenStyle'

const ChatScreen = (props) => {
    return (
    <View style={styles.container}>
        <FlatList 
            inverted
            style={styles.list}
            data={props.list}
            renderItem={({item}) =>{
                 if(item.isMy) return (
                     <View style={styles.containerUser}>
                         <Text style={styles.containerUserText}>{item.msg}</Text>
                     </View>)
                 return (
                 <View style={styles.containerRobot}>
                    <Text style={styles.containerRobotText}>{item.msg}</Text>
                </View>)
                }
            }
            keyExtractor={item => item.msg} />
            
        <View style={styles.containerInput}>
            <CBInput 
                reference={props.reference} 
                style={styles.input} 
                onChangeText={props.setUserMsg} 
                placeholder='Digite uma mensagem'/>

            <CBIconButton 
                style={styles.icon} 
                color='#077' 
                icon='send' 
                size='22' 
                onPress={props.onPress}/>
        </View>
    </View>
)
}

export default ChatScreen