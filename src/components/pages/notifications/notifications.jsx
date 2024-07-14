import React, { useState, useEffect } from "react";
import {
  Blog,
  BlogContainer,
  BlogDetailWrap,
  BlogInfosWrapper,
  BlogWrapper,
  Container,
  Date,
  DetailText,
  DetailTitle,
  MainWrapper,
  ModalWrapper,
  PageTitle,
  Title,
  View,
  ViewWrapper,
} from "./notificationsStyle";
import { mockNotification } from "../../mock/./notification/notifications";
import viewIcon from "../../../assets/notifications-icons/notificationView-icon.svg";
import NotificationModal from "./notificationModal";

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState("");

  useEffect(() => {
    if (mockNotification.notificationInfo.length > 0) {
      setSelectedNotification(mockNotification.notificationInfo[0].notification);
      setSelectedBlogId(mockNotification.notificationInfo[0].id);
    }
  }, []);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleBackgroundClick = (id) => {
    setSelectedBlogId(id);
  };

  return (
    <MainWrapper>
      <ModalWrapper>
        <PageTitle>Notifications</PageTitle>
        <NotificationModal />
      </ModalWrapper>
      <BlogContainer>
        <BlogWrapper>
          <Container>
            {mockNotification.notificationInfo.map((value) => (
              <Blog
                key={value.notification.id}
                onClick={() => {
                  handleNotificationClick(value.notification);
                  handleBackgroundClick(value.id);
                }}
                activeColor={selectedBlogId === value.id}
              >
                <Title>{value.notification.title}</Title>
                <BlogInfosWrapper>
                  <Date>{value.notification.date}</Date>
                  <ViewWrapper>
                    <img src={viewIcon} alt="view" />
                    <View>{value.notification.view}</View>
                  </ViewWrapper>
                </BlogInfosWrapper>
              </Blog>
            ))}
          </Container>
        </BlogWrapper>
        <BlogDetailWrap>
          {selectedNotification && (
            <div>
              <DetailTitle>{selectedNotification.title}</DetailTitle>
              <DetailText>{selectedNotification.text}</DetailText>
            </div>
          )}
        </BlogDetailWrap>
      </BlogContainer>
    </MainWrapper>
  );
};

export default Notifications;
