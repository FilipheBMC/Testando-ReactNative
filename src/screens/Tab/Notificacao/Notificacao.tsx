import React, { useState } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ContentHeader,
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
  NewButtonNotification,

} from "./styles";

import { ArrowCircleUp } from "phosphor-react-native";
import { recents_notifications } from "../../../Util/recent_notifications"
import { new_notifications } from "../../../Util/new_notificaions";

import { Header } from '../../../components/Header';
import { useTheme } from 'styled-components';
import { ContentTop } from "../../../components/Notification/ContentTop";

export const Notificacao = () => {

  const { COLORS } = useTheme();

  const [isVerify, setIsVerify] = useState<boolean>(false);

  const handleVerify = () => {
    setIsVerify(!isVerify);
  };

  return (
    <>
      <Header
        appName={"Notificação"}
        iconeLeft
        typeNotification
      />
      <Container>

        <ContentHeader>
          <ContentTopTitle>Notificação</ContentTopTitle>
          <FlatList
            data={new_notifications}
            renderItem={({ item }) => (
              <ContentTop 
                datetime={item.datetime}
                title = {item.title}
                type = {item.type}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </ContentHeader>

        <ContentBody>
          <ContentBodyTitle>Recentes</ContentBodyTitle>
          <FlatList
            data={recents_notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
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
                  <NewButtonNotification>
                    <ArrowCircleUp size={32} weight='regular' color={COLORS.GREEN2} />
                  </NewButtonNotification>
                </ContentFlat>
              </>
            )}
            contentContainerStyle={{
              paddingBottom:20
            }}
            showsVerticalScrollIndicator={false}
          />
        </ContentBody>
      </Container>
    </>
  )
};