import { Text, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import { Container, InputContainer } from "./Styles";
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps{
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconNameLeft: string;
    iconColor?: string;
    iconSize?: number;
    secureTextEntry?: boolean;
}

// const Input: React.FC<InputProps & TextInputProps> = ({ rightIcon, leftIcon, iconNameLeft, iconColor, iconSize, iconNameRight, ...rest }) => {
//     const { COLORS } = useTheme();

//     const [secury, setSecury] = useState();

//     return (
//         <Container>
//             {leftIcon && (
//                 <Fontisto
//                     name={iconNameLeft as any}
//                     size={iconSize}
//                     color={iconColor || COLORS.BLACK}
//                     style={{ padding: 5 }}
//                 />
//             )}

//             <InputContainer
//                 {...rest}
//             />

//             {rightIcon && (
//                 <Ionicons
//                     name={iconNameRight as any || null}
//                     size={iconSize}
//                     color={iconColor || COLORS.BLACK}
//                     style={{ padding: 5 }}
//                 />
//             )}


//         </Container>
//     )
// }

const Input = ({
    rightIcon,
    leftIcon,
    iconNameLeft,
    iconColor,
    iconSize,
    secureTextEntry,
    ...rest
}: InputProps) => {
    const { COLORS } = useTheme();

    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <Container>
            {leftIcon && (
                <Fontisto
                    name={iconNameLeft as any}
                    size={iconSize}
                    color={iconColor || COLORS.BLACK}
                    style={{ padding: 5 }}
                />
            )}

            <InputContainer
                {...rest}
                secureTextEntry={secury}
                placeholderTextColor={COLORS.GRAY3}
                underLinerColorAndroid='transparent'
            />

            {rightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons
                        name={!secury ? 'eye' : 'eye-off'}
                        size={iconSize}
                        color={iconColor || COLORS.BLACK}
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
            )}


        </Container>
    )
}

export default Input;