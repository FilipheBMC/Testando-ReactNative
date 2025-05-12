import { View, Text, Pressable } from 'react-native';
import React from 'react';

import BgPng from "../../../assets/addcard.png";
import ChipPng from "../../../assets/chipcard.png";

import {
    Container,
    Title,
    Content,
    SubTitle,
    ContentChip,

} from "./styles";

import { GoBack } from "../../../components/GoBack";
import { useNavigation } from '@react-navigation/native';

export const AddCartao = () => {

    const Navigation = useNavigation();

    const handleClickCartao = () =>{
        console.warn('Botão clicado');
        Navigation.navigate('DetailCard');
    };

    return (
        <>
            <GoBack />
            <Container>
                <Title>Adicionar Cartão</Title>
                <Pressable onPress={handleClickCartao} >
                    <Content
                        source={BgPng}
                    >
                        <ContentChip source={ChipPng} />
                    </Content>
                </Pressable>

                <SubTitle>
                    Adicionar um novo cartão{"\n"}
                    na sua carteira para uma vida masi fácil.
                </SubTitle>
            </Container>
        </>
    )
}
