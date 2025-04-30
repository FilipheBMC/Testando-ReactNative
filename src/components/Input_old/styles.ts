import styled, { css } from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

interface IContainerProps extends ViewProps {
        hasErro: boolean;
        isFocused: boolean;
        isFilled: boolean;
}

interface ITextContainerProps extends ViewProps {
    hasErro: boolean;
    isFocused: boolean;
    isFilled?: boolean;
}

export const Container = styled.View`
    width: 85%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`;

export const IConContainer = styled.View<IContainerProps>`
  width: ${RFValue(55)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;

  ${({ isFocused, isFilled }: IContainerProps) =>
    (isFocused || isFilled) &&
    css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${theme.COLORS.BLUE1}
    `}

  ${({ hasErro }: IContainerProps) => hasErro && css`
    border-bottom-color: ${theme.COLORS.RED};
  `}

  margin-right: ${RFValue(3)}px;
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;
  background-color: ${theme.COLORS.GRAY1}
`;

export const InputText = styled(TextInput)<ITextContainerProps>`
    flex: 1;
    font-size: ${RFValue(12)}px;
    border-top-right-radius: ${RFValue(5)}px;
    border-bottom-right-radius: ${RFValue(5)}px;
    color: ${theme.COLORS.GRAY4};
    font-family: ${theme.FONTS.POPPINSLIGHT};
    background-color: ${theme.COLORS.GRAY5};

    ${({ isFocused, isFilled }: ITextContainerProps) =>
        (isFocused || isFilled) &&
        css`
            border-bottom-width: ${RFValue(2)}px;
            border-bottom-color: ${theme.COLORS.BLUE1};
        `}

    ${({ hasErro }: ITextContainerProps) =>
        hasErro &&
        css`
            border-bottom-color: ${theme.COLORS.RED};
        `}

    padding: 0 ${RFValue(10)}px;
`;