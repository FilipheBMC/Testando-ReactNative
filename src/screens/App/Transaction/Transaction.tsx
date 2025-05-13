import { View, Text } from 'react-native';
import React from 'react';

import { Header } from '../../../components/Header';
import {
    Container,

    ContentFlat,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubTitleTransaction,
    PriceTransaction,
    ButtonGoBack,
} from "./styles";

import { CaretDoubleLeft } from 'phosphor-react-native';
import { transaction } from '../../../Util/transaction';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const Transaction = () => {

    const Navigation = useNavigation();

    const handleGoBack = () => {
        Navigation.goBack();
    }

    return (
        <>
            <Header
                appName={"Minhas Transações"}
                iconeLeft
                typeTransaction
            />

            {/* <GoBack /> */}

            <Container>
                <FlatList
                    data={transaction}
                    renderItem={({ item }) => (
                        <ContentFlat>

                            <IconTransaction
                                source={item.icon}
                            />
                            <DetailsTransaction>

                                <NameTransaction>{item.name}</NameTransaction>
                                <SubTitleTransaction>{item.subtitle}</SubTitleTransaction>

                            </DetailsTransaction>

                            <PriceTransaction>${item.price}</PriceTransaction>

                        </ContentFlat>
                    )}

                    showsVerticalScrollIndicator={false}
                />

                <ButtonGoBack onPress={handleGoBack}>
                    <CaretDoubleLeft size={32} weight='regular' />
                </ButtonGoBack>
            </Container>
        </>
    );
};
