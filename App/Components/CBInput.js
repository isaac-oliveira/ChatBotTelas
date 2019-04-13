import React, { Component } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles/CBInputStyle'

class CBInput extends Component {
    static defaultProps = {
        style: {},
        placerholder: '',
        secureTextEntry: false
    }

    static propTypes = { 
        style: PropTypes.object,
        placeholder: PropTypes.string.isRequired,
        secureTextEntry: PropTypes.bool,
        onChangeText: PropTypes.func.isRequired,
    }

    render() {
        return(
            <TextInput 
                style={[styles.input, this.props.style]}
                placeholder={this.props.placeholder} 
                secureTextEntry={this.props.secureTextEntry}
                onChangeText={this.props.onChangeText}/>
        )
    }
}

export default CBInput