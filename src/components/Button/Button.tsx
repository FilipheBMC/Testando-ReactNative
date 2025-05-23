import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { variants } from "./Variante";
import { Container, Title, Content } from './Styles';



interface IButtonProps {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof AntDesign.glyphMap;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'black' | 'transparent';
  style?: TouchableOpacityProps['style'];
}

export const Button: React.FC<IButtonProps> = ({
  title,
  onPress = () => { },
  isLoading,
  iconName,
  disabled,
  variant = 'primary',
  style,
}) => {


  const { COLORS } = useTheme();
  const buttonVariant = variants[variant];
  const buttonStyle = disabled ? buttonVariant.desabled : buttonVariant.enabled;

  return (
    <Container
      onPress={onPress}
      disabled={isLoading || disabled}
      style={[buttonStyle.button, style]}
    >
      {isLoading ? (
        <ActivityIndicator color={COLORS.GRAY1} />
      ) : (
        <Content>
          {iconName && (
            <AntDesign
              name={iconName}
              size={20}
              color={buttonStyle.icon.color}
              style={{
                margin: 15,
              }}
            />
          )}
          <Title>{title}</Title>
        </Content>
      )}


    </Container>
  )
};