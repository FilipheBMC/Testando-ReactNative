import React from 'react'

import {
    Container,
    Title,
    ContentHeader,
    Description,
    ViewButton,
    ContentBody,
    ContentFotter,
    ButtonSingUp,
    TitleButtonSingUp1,
    TitleButtonSingUp2,
    ContentForgotPassWord,
    ContentButtonForgotPassWord,
    ContentTitleForgotPassWord

} from './Styles'

import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '@src/components/ButtonSocialFacebook/ButtonSocialFacebook';

import { Text, KeyboardAvoidingView } from 'react-native';
//Esse import aqui emb aixo não está funcionando.
// import { SafeAreaView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

// Importando o input
import Input from "../../../components/Input";

// Importando a cor para poder desestruturar
import { useTheme } from 'styled-components';

// Importando o Button
import { Button } from "../../../components/Button"
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function onPressButton(){
        console.log("Botão clicado");
    };

    const handleRecuperarSenha = () => {
        navigation.navigate('RecuperarSenha');
    };
    
    const handleCadastrar = () => {
        navigation.navigate('Cadastro');
    };

    const handleEntrarAplicacao = () => {
        navigation.navigate('AppRoutes')
        console.log('entrando');
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            enabled
        >
            <SafeAreaView>
                <Container>
                    <Title>Seja bem vindo(a) {"\n"} a App Carteira</Title>

                    <ContentHeader>
                        <Description>Cadastrar com</Description>

                        <ViewButton>
                            <ButtonSocialGoogle title="Google" />
                            <ButtonSocialFacebook title="Facebook" iconName="facebook" />
                        </ViewButton>
                    </ContentHeader>


                    <ContentBody>

                        {/* O left é eye ou eye-off */}

                        <Input
                            leftIcon
                            iconNameLeft='email'
                            iconSize={20}
                            iconColor={COLORS.BLACK}
                            placeholder='Digite seu e-mail.'
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={false}
                            keyboardType='email-address'
                        />

                        <Input
                            leftIcon
                            rightIcon
                            iconNameLeft='locked'
                            iconSize={20}
                            placeholder='Digite sua senha.'
                            secureTextEntry
                            keyboardType='default'
                            autoCorrect={false}
                            autoCapitalize='none'
                        />

                        <ContentForgotPassWord>
                            {/* <ContentButtonForgotPassWord onPress={() => { }}>
                                <ContentTitleForgotPassWord> Recuperar Senha</ContentTitleForgotPassWord>
                            </ContentButtonForgotPassWord> */}
                            <Button
                                title="Recuperar senha"
                                onPress={handleRecuperarSenha}
                                variant="transparent"
                            
                                />
                        </ContentForgotPassWord>

                        <Button
                            title="Entrar"
                            variant='primary'
                            onPress={() => handleEntrarAplicacao()}
                        />




                    </ContentBody>

                    <ContentFotter>
                        <ButtonSingUp onPress={handleCadastrar}>
                            <TitleButtonSingUp1>Não tem cadastro ainda ?</TitleButtonSingUp1>
                            <TitleButtonSingUp2>Cadastre-se</TitleButtonSingUp2>
                        </ButtonSingUp>
                    </ContentFotter>
                </Container>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export { Login };