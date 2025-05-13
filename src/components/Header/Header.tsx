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

import { ChartBarHorizontal, CurrencyCircleDollar, BellRinging } from 'phosphor-react-native';

interface IHeader {
    appName: String,
    textLef?: Boolean,
    iconAvatar?: boolean,
    iconeLeft?: boolean,
    typeRelatorio?: boolean,
    typeTransaction?: boolean,
    typeNotification?: boolean,
}

export const Header = ({
    appName,
    textLef,
    iconAvatar,
    iconeLeft,
    typeRelatorio,
    typeTransaction,
    typeNotification,

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

                    {typeTransaction && (
                        <IconButton>
                            <CurrencyCircleDollar size={32} weight='light' />
                        </IconButton>
                    )}

                    {typeNotification && (
                        <IconButton>
                            <BellRinging size={32} weight='light' />
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