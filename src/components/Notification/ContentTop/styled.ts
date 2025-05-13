import theme from "@src/styles/theme";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const NewFlatList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`

`;

export const NewNotificationFlat = styled.View`
    width: 85%;
    height: 88px;
    padding: 10px;
    padding-left: 20px;
`;

export const RecentFlatList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
})``;

export const ContentFlat = styled.View`
    margin-top: 10px;
    border-radius: 17px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.COLORS.WHITE};
`;

export const DataNotifications = styled.View``;

export const DataNotificationText = styled.Text`
    font-size: 12px;
    color: ${theme.COLORS.GRAY4};
`;

export const TitleNotification = styled.View``;

export const TitleNotificationsText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.COLORS.BLACK};
`;

export const DescriptionNotification = styled.View``;

export const DescriptionNotificationText = styled.Text`
    font-size: 12px;
    color: ${theme.COLORS.GRAY4};
`;

export const NewButtonNotification = styled.TouchableOpacity`
    width: 50px;
    height: 88px;
    align-items: center;
    justify-content: center;
`;

export const Badge = styled.View`
    width: 15px;
    height: 15px;
    position: absolute;
    right: 8px;
    top: -3px;
    border-radius: 10px;

    background-color: ${theme.COLORS.ATTENTION_LIGHT9};
`;