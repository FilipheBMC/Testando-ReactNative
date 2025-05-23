// import { useTheme } from "styled-components";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import theme from '../../styles/theme';

// const { COLORS } = useTheme();

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };

    title: {
        color: string;
    };

    icon: {
        color: string;
    };
};

export interface ButtonVariant{
    enabled: ButtonStyle;
    desabled: ButtonStyle;
};

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PRIMARY,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },

    desabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    }
};

const buttonOutLine: ButtonVariant = {
    enabled: {
        button:{
            backgroundColor: "transparent",
            borderWidth: 2, 
            borderColor: theme.COLORS.PRIMARY,
        },
        title:{
            color: theme.COLORS.GRAY1,
        },
        icon:{
            color: theme.COLORS.GRAY1,
        }
    },

    desabled: {
        button:{
            backgroundColor: "transparent",
            borderWidth: 2, 
            borderColor: theme.COLORS.PRIMARY,
        },
        title:{
            color: theme.COLORS.GRAY_100,
        },
        icon:{
            color: theme.COLORS.GRAY_100,
        },
    },
};

const buttonBlack: ButtonVariant = {
    enabled: {
        button:{
            backgroundColor: theme.COLORS.BLACK,
            borderWidth: 2, 
            borderColor: theme.COLORS.PRIMARY,
        },
        title:{
            color: theme.COLORS.ORANGE_300,
        },
        icon:{
            color: theme.COLORS.ORANGE_300,
        }
    },

    desabled: {
        button:{
            backgroundColor: theme.COLORS.GRAY_100,
            borderWidth: 2, 
            borderColor: theme.COLORS.PRIMARY,
        },
        title:{
            color: theme.COLORS.WHITE,
        },
        icon:{
            color: theme.COLORS.WHITE,
        },
    },
};

const buttonTransparent: ButtonVariant = {
    enabled:{
        button:{
            backgroundColor: 'transparent',
        },
        title:{
            color: theme.COLORS.GRAY2,
        },
        icon:{
            color: theme.COLORS.GRAY2,
        }
    },
    desabled:{
        button:{
            backgroundColor: "transparent",
        },
        title:{
            color: theme.COLORS.GRAY2,
        },
        icon:{
            color: theme.COLORS.GRAY2,
        }
    }
}

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack,
    transparent: buttonTransparent,
};
