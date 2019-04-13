import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Styles/CBButtonStyle'

class CBButton extends Component {
    static defaultProps = {
        title: 'Button',
    }

    static propTypes = {
        title: PropTypes.string,
        onPress: PropTypes.func
    }

    render() {
        return(
            <TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
                <Text style={styles.btnText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default CBButton