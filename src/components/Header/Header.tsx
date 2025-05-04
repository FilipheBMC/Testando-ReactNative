import { View, Text } from 'react-native'
import React from 'react'

import {
    Container,
    Title,
    ContentHeader,
    Avatar,
    AppName,
    Status,
} from "./styles";

export const Header = () => {
    return (
        <Container>
            <ContentHeader>
                <AppName>App Wallet</AppName>
                <Status>Ativo</Status>
            </ContentHeader>
            <Avatar
                source={{ uri: 'http://github.com/silvaneimartins.png' }}
            />
        </Container>
    )
};