import React, { Component } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles/CBInputStyle'

class CBInput extends Component {
    static defaultProps = {
        style: {},
        placerholder: '',
        secureTextEntry: false,
    }

    static propTypes = { 
        style: PropTypes.object,
        placeholder: PropTypes.string.isRequired,
        returnKeyType: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        blurOnSubmit: PropTypes.bool,
        reference: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        onChangeText: PropTypes.func.isRequired
    }

    render() {
        return(
            <TextInput 
                style={[styles.input, this.props.style]}
                ref={this.props.reference}
                placeholder={this.props.placeholder} 
                secureTextEntry={this.props.secureTextEntry}
                onChangeText={this.props.onChangeText}
                onSubmitEditing={this.props.onSubmitEditing}
                blurOnSubmit={this.props.blurOnSubmit}
                returnKeyType={this.props.returnKeyType} />
        )
    }
}

export default CBInput