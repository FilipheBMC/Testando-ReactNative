import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Title,
  ContentTop,
  ContentBody,
  ContentTopTitle,
  ContentBodyTitle,
  ContentFlat,
  DataNotifications,
  DataNotificationText,
  NewNotificationFlat,
  TitleNotification,
  TitleNotificationsText,
  DescriptionNotification,
  DescriptionNotificationText,

} from "./styles";

import { recents_notifications } from "../../../Util/recent_notifications"
import { new_notifications } from "../../../Util/new_notificaions";

import { Header } from '../../../components/Header';
import { View, Text } from "react-native";

export const Notificacao = () => {
  return (
    <>
      <Header
        appName={"Notificação"}
        iconeLeft
        typeNotification
      />
      <Container>

        <ContentTop>
          <ContentTopTitle>Novo</ContentTopTitle>
          <FlatList
            data={new_notifications}
            renderItem={({ item }) => (
              <ContentFlat>
                <NewNotificationFlat>
                  <DataNotifications>
                    <DataNotificationText>
                      {item.datetime}
                    </DataNotificationText>
                  </DataNotifications>

                  <TitleNotification>
                    <TitleNotificationsText>
                      {item.title}
                    </TitleNotificationsText>
                  </TitleNotification>

                  <DescriptionNotification>
                    <DescriptionNotificationText>{item.type}</DescriptionNotificationText>
                  </DescriptionNotification>
                </NewNotificationFlat>
              </ContentFlat>
            )}
            showsVerticalScrollIndicator={false}
          />
        </ContentTop>

        <ContentBody>
          <ContentBodyTitle>Recentes</ContentBodyTitle>
        </ContentBody>

      </Container>
    </>
  )
};