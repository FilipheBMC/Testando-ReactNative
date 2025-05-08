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

interface IHeader {
    appName: String,
    textLef?: Boolean,
    iconAvatar?: boolean,
}

export const Header = ({
    appName,
    textLef,
    iconAvatar
}: IHeader) => {
    return (
        <Container>
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