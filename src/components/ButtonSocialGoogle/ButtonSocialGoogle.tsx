import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import{ Button, IconGoogle, Title } from "./styles";
import PngGoogle from "../../assets/logoGoogle.png";

interface props extends RectButtonProps{
    title: String;
}

const ButtonSocialGoogle: React.FC<props> = ( {title, ...rest} ) => {
    return (
        
        <Button {...rest} >
            <IconGoogle source = {PngGoogle} resizeMode="contain"/>
            <Title>{title}</Title>
        </Button>
    )
};

export { ButtonSocialGoogle };