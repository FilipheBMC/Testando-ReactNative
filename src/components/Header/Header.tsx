import { View, Text } from 'react-native'
import React from 'react'

import {
    Container,
    Title,
    ContentHeader,
    Avatar,
    AppName,
    Status,
    IconButton,
} from "./styles";

// Importando icone

import { ChartBarHorizontal } from 'phosphor-react-native';

interface IHeader {
    appName: String,
    textLef?: Boolean,
    iconAvatar?: boolean,
    iconeLeft?: boolean,
    typeRelatorio?: boolean,
}

export const Header = ({
    appName,
    textLef,
    iconAvatar,
    iconeLeft,
    typeRelatorio,

}: IHeader) => {
    return (
        <Container>
            {iconeLeft && (
                <>
                    {typeRelatorio && (
                        <IconButton>
                            <ChartBarHorizontal size={32} weight='light' />
                        </IconButton>
                    )}
                </>
            )}
            <ContentHeader>
                <AppName>{appName}</AppName>
                {textLef &&
                    (<Status>Ativo</Status>)}
            </ContentHeader>
            {iconAvatar && (
                <Avatar
                    source={{ uri: 'http://github.com/silvaneimartins.png' }}
                />
            )}

        </Container>
    )
};