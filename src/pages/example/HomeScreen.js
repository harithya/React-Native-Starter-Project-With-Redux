import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function HomeScreen() {
    const state = useSelector(state => state.example);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{state.example}</Text>
        </View>
    )
}
