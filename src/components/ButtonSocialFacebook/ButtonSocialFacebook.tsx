import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import{ Button, IconFacebook, Title } from "./styles";

import { Fontisto } from "@expo/vector-icons";
// import PngGoogle from "../../assets/logoGoogle.png";


interface props extends RectButtonProps{
    title: String;
    iconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocialFacebook: React.FC<props> = ( {title, iconName, ...rest} ) => {
    return (
        
        <Button {...rest} >
            {/* <IconGoogle source = {PngGoogle} resizeMode="contain"/> */}
            <IconFacebook name={iconName}/>
            <Title>{title}</Title>
        </Button>
    )
};

export { ButtonSocialFacebook };