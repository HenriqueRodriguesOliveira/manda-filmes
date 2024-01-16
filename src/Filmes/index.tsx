import { View, Text } from 'react-native'
import React from 'react'

interface ListaProps {
    data: {
        nome: string
    }
}

export default function Filmes({ data }: ListaProps) {
    return (
        <View>
            <Text>{data.nome}</Text>
        </View>
    )
}