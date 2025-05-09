import { TouchableOpacity } from 'react-native';
import React from 'react';

import {
    Container,
    ViewProfileName,
    ViewIcon,
    ViewRight,
    PorfileName,


} from "./styled";

import {
    User,
    CaretRight,
    BellSimple,
    Wallet,
    Password,
    PhoneCall

} from "phosphor-react-native";

import { useTheme } from 'styled-components';

interface ISetings {
    name: string,
    iconLeft?: boolean,
    typeUser?: boolean,
    typeNotification?: boolean,
    typeWalet?: boolean,
    typeLogin?: boolean,
    typeCall?: boolean,
}

export const Setings = ({
    name,
    iconLeft,
    typeUser,
    typeNotification,
    typeWalet,
    typeLogin,
    typeCall,
}: ISetings) => {

    const { COLORS } = useTheme();

    const handleGoPerfil = () => {
        console.log("Botão clicadodo");
    }

    return (
        <Container>
            <ViewProfileName>
                {iconLeft && (
                    <>
                        {typeUser && (
                            <ViewIcon>
                                <User
                                    size={27}
                                    weight="bold"
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeNotification && (
                            <ViewIcon>
                                <BellSimple
                                    size={27}
                                    weight="bold"
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeWalet && (
                            <ViewIcon>
                                <Wallet
                                    size={27}
                                    weight="bold"
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeLogin && (
                            <ViewIcon>
                                <Password
                                    size={27}
                                    weight="bold"
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}
                        {typeCall && (
                            <ViewIcon>
                                <PhoneCall
                                    size={27}
                                    weight="bold"
                                    color={COLORS.BLACK}
                                />
                            </ViewIcon>
                        )}

                    </>
                )}


                <ViewRight>
                    <PorfileName>{name}</PorfileName>
                    <TouchableOpacity onPress={handleGoPerfil}>
                        <CaretRight size={32} weight="light" />
                    </TouchableOpacity>
                </ViewRight>

            </ViewProfileName>
        </Container>
    )
}
