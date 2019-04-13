import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Styles/CBIconButtonStyle'


class CBIconButton extends Component {

    static defaultProps = {
        style: {},
        icon: 'account-plus',
        color: '#fff'
    }

    static propTypes = {
        style: PropTypes.object,
        icon: PropTypes.string,
        color: PropTypes.string,
        onPress: PropTypes.func
    }

    render() {
        return(
            <TouchableOpacity style={[styles.btn, this.props.style]} onPress={this.props.onPress}>
                <Icon name={this.props.icon} style={[styles.btnIcon, {color: this.props.color}]}/>
            </TouchableOpacity>
        )
    }
}

export default CBIconButton