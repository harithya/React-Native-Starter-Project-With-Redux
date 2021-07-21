import React from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { color } from '../../utils'

export default function Feedback(props) {
    return (
        <TouchableNativeFeedback
            disabled={props.disabled}
            background={TouchableNativeFeedback.Ripple(color.ripple)}
            onPress={props.onPress}
        >
            {props.children}
        </TouchableNativeFeedback>
    )
}
